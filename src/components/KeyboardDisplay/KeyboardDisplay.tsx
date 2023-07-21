import { useEffect } from "react";
import "react-simple-keyboard/build/css/index.css";
import {
  KEYBOARD_DISPLAY,
  KEYBOARD_LAYOUT,
  getKeyFromCode,
} from "./keyboardSettings";

function KeyboardDisplay() {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      const key = document.getElementById("key-" + getKeyFromCode(e.code));
      if (key) key.style.backgroundColor = "#eee8d5";

      setTimeout(() => {
        const key = document.getElementById("key-" + getKeyFromCode(e.code));
        if (key) key.style.backgroundColor = "#fdf6e3";
      }, 500);
    }

    function handleKeyUp(e: KeyboardEvent) {
      const key = document.getElementById("key-" + getKeyFromCode(e.code));
      if (key) key.style.backgroundColor = "#fdf6e3";
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

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
                (key === "{enter}" && " w-[40px] ")
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
