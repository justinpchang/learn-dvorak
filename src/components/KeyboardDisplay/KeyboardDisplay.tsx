import { useEffect } from "react";
import {
  KEYBOARD_DISPLAY,
  KEYBOARD_LAYOUT,
  getKeyFromCode,
} from "../../constants/keyboardSettings";
import { remapToDvorak } from "@/utils/remap";
import { useLevelStore } from "@/utils/useLevelStore";
import { LEVELS } from "@/constants/levels";

function getKeyEl(e: KeyboardEvent, { remap }: { remap: boolean }) {
  const key = remap
    ? remapToDvorak(getKeyFromCode(e.key))
    : getKeyFromCode(e.key);
  return document.getElementById("key-" + key);
}

interface Props {
  shouldRemap: boolean;
}

function KeyboardDisplay({ shouldRemap }: Props) {
  const { level } = useLevelStore();

  const include = LEVELS[level]?.include;

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const key = getKeyEl(e, { remap: shouldRemap });
      if (key) key.style.backgroundColor = "#eee8d5";

      setTimeout(() => {
        if (key) key.style.backgroundColor = "#fdf6e3";
      }, 500);
    }

    function handleKeyUp(e: KeyboardEvent) {
      const key = getKeyEl(e, { remap: shouldRemap });
      if (key) key.style.backgroundColor = "#fdf6e3";
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [shouldRemap]);

  return (
    <div className="keyboard">
      {KEYBOARD_LAYOUT.map((row) => (
        <div className="keyboard-row" key={row}>
          {row.split(" ").map((key, i) => (
            <div
              className={
                "keyboard-button " +
                ((key === "u" || key === "h") &&
                  " underline underline-offset-8 ") +
                (key === "{shift}" && " w-[50px] ") +
                (key === "{tab}" && " w-[15px] ") +
                (key === "{enter}" && " w-[40px] ") +
                (!include || include.includes(key)
                  ? " opacity-100 "
                  : " opacity-50 ")
              }
              key={key + i}
              id={"key-" + key}
            >
              {(KEYBOARD_DISPLAY as any)[key] || key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export { KeyboardDisplay };
