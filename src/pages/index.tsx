import { KeyboardDisplay } from "@/components/KeyboardDisplay/KeyboardDisplay";
import { LevelSelect } from "@/components/LevelSelect/LevelSelect";
import { TypingWindow } from "@/components/TypingWindow";
import { LEVELS } from "@/constants/levels";
import Link from "next/link";
import { useState } from "react";
import { FaGithubAlt, FaQuestion } from "react-icons/fa";

export default function Home() {
  const [level, setLevel] = useState(0);

  return (
    <>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl">Dvorak Training</h1>
        <div className="flex justify-center items-center gap-4">
          <a href="https://github.com/justinpchang/learn-dvorak">
            <FaGithubAlt className="text-lg" />
          </a>
          <Link href="/about">
            <FaQuestion className="text-sm" />
          </Link>
        </div>
      </div>
      <LevelSelect level={level} setLevel={setLevel} />
      <h5 className="text-xs mt-12">Esc to reset</h5>
      <div className="border-2 border-[#eee8d5] p-4 rounded-lg">
        <TypingWindow text={LEVELS[level].text} />
        <div className="m-8"></div>
        <KeyboardDisplay />
      </div>
    </>
  );
}
