import { Heading } from "@/components/Heading";
import { KeyboardDisplay } from "@/components/KeyboardDisplay/KeyboardDisplay";
import { LevelSelect } from "@/components/LevelSelect/LevelSelect";
import { TypingWindow } from "@/components/TypingWindow";
import { LEVELS } from "@/constants/levels";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [level, setLevel] = useState(0);
  const [shouldRemap, setShouldRemap] = useState(false);

  return (
    <>
      <Head>
        <title>Dvorak Training</title>
      </Head>
      <Heading title="Dvorak Training" github about />
      <LevelSelect level={level} setLevel={setLevel} />
      <div className="text-xs mt-12 mb-2 flex flex-col-reverse gap-3 md:flex-row justify-between">
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={shouldRemap}
            onChange={(e) => setShouldRemap(e.target.checked)}
          />
          Remap QWERTY keyboard to Dvorak
        </label>
        <h5>Esc to reset</h5>
      </div>
      <div className="border-2 border-[#eee8d5] p-4 rounded-lg">
        <TypingWindow text={LEVELS[level].text} shouldRemap={shouldRemap} />
        <div className="m-4"></div>
        <KeyboardDisplay shouldRemap={shouldRemap} />
      </div>
    </>
  );
}
