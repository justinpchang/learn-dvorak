import { Heading } from "@/components/Heading";
import { KeyboardDisplay } from "@/components/KeyboardDisplay/KeyboardDisplay";
import { LevelSelect } from "@/components/LevelSelect/LevelSelect";
import { TypingWindow } from "@/components/TypingWindow";
import { LEVELS } from "@/constants/levels";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [level, setLevel] = useState(0);

  return (
    <>
      <Head>
        <title>Dvorak Training</title>
      </Head>
      <Heading title="Dvorak Training" github about />
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
