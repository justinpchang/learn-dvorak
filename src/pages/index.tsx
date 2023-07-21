import { KeyboardDisplay } from "@/components/KeyboardDisplay/KeyboardDisplay";
import { LevelSelect } from "@/components/LevelSelect/LevelSelect";
import { TypingWindow } from "@/components/TypingWindow";
import { LEVELS } from "@/constants/levels";
import { useState } from "react";

export default function Home() {
  const [level, setLevel] = useState(0);

  return (
    <>
      <h1 className="text-3xl mb-6">Dvorak Training</h1>
      <LevelSelect level={level} setLevel={setLevel} />
      <h5 className="text-xs mt-6">Esc to reset</h5>
      <div className="border-2 p-4 rounded-lg">
        <TypingWindow text={LEVELS[level].text} />
        <div className="m-8"></div>
        <KeyboardDisplay />
      </div>
    </>
  );
}
