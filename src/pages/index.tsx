import { Heading } from "@/components/Heading";
import { KeyboardDisplay } from "@/components/KeyboardDisplay/KeyboardDisplay";
import { LevelSelect } from "@/components/LevelSelect/LevelSelect";
import { TypingWindow } from "@/components/TypingWindow";
import { LEVELS } from "@/constants/levels";
import { useLevelStore } from "@/utils/useLevelStore";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [shouldRemap, setShouldRemap] = useState(() => {
    if (typeof window !== "undefined") {
      return window.localStorage.getItem("shouldRemap") === "true";
    } else {
      return false;
    }
  });
  const [text, setText] = useState("");

  // Refresh text for the same level
  const [incrementer, increment] = useState(0);
  const refreshText = useCallback(() => increment((prev) => prev + 1), []);

  const { level, setLevel } = useLevelStore();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLevel(parseInt(window.localStorage.getItem("level") ?? "0"));
    }
  }, [setLevel]);

  useEffect(() => {
    setText(LEVELS[level].text());
  }, [level, incrementer]);

  return (
    <>
      <Head>
        <title>Dvorak Training</title>
      </Head>
      <Heading title="Dvorak Training" github about />
      <LevelSelect />
      <div className="text-xs mt-12 mb-2 flex flex-col-reverse gap-3 md:flex-row justify-between">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={shouldRemap}
            onChange={() => {
              setShouldRemap((prev) => {
                window.localStorage.setItem("shouldRemap", (!prev).toString());
                return !prev;
              });
            }}
          />
          Remap QWERTY keyboard to Dvorak
        </label>
        <h5>Esc to reset</h5>
      </div>
      <div className="border-2 border-[#eee8d5] p-4 rounded-lg">
        <TypingWindow
          text={text}
          refreshText={refreshText}
          shouldRemap={shouldRemap}
        />
        <div className="m-4"></div>
        <KeyboardDisplay shouldRemap={shouldRemap} />
      </div>
    </>
  );
}
