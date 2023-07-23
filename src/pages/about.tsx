import { Heading } from "@/components/Heading";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Dvorak Training</title>
      </Head>
      <Heading title="About" github home />
      <div className="border-2 border-[#eee8d5] p-4 rounded-lg space-y-6 mb-10">
        <p className="text-lg">Welcome to Dvorak Training!</p>
        <p className="text-md">
          This website is a simple tool to help you learn the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Dvorak_keyboard_layout"
            className="text-blue-500 underline"
          >
            Dvorak keyboard layout
          </a>
          .
        </p>
        <Image
          src="/layout.png"
          alt="Dvorak keyboard layout"
          width={600}
          height={200}
          className="m-auto"
        />
        <h1 className="text-xl">Why Dvorak?</h1>
        <p>This layout was designed with the following principles in mind:</p>
        <ul className="list-disc list-inside">
          <li>Letters should be typed by alternating between hands.</li>
          <li>
            The most common letters and bigrams should be on the home row and
            under the strongest fingers.
          </li>
          <li>The least common letters should be on the bottom row.</li>
          <li>
            The right hand should do more of the typing since most people are
            right-handed.
          </li>
          <li>Digraphs should not be typed with adjacent fingers.</li>
          <li>Stroking should move from outside in.</li>
        </ul>
        <p>
          Following these principles led to a keyword layout that reduces
          finger, hand, and wrist strain (alleviating RSI), and it also may
          improve typing speed!
        </p>
        <hr className="border-2 border-[#eee8d5]" />
        <h1 className="text-xl">Why this site?</h1>
        <p>
          Most of us have typed in QWERTY our whole lives, so switching to
          Dvorak can be a difficult process.
        </p>
        <p>
          This site is designed to bring you up-to-speed as quickly as possible.
          The chapters first teach you the locations of the keys (using real,
          frequently used words the whole time), then the chapters jump straight
          into drilling muscle memory with the most common words in the English
          language.
        </p>
        <p>
          Upon completion of the chapters, you will be comfortable touch-typing
          every letter on the Dvorak keyboard. From there, you can move on to
          normal typing practice sites like TypeRacer, keybr, and monkeytype to
          continue if you wish.
        </p>
        <p className="text-blue-800">
          p.s. The best way to learn Dvorak quickly is to switch your computer
          to Dvorak, but if you can&apos;t or don&apos;t want to, this site
          supports remapping a QWERTY keyboard, too! Just click the checkbox on
          the home page.
        </p>
        <hr className="border-2 border-[#eee8d5]" />
        <p className="text-sm">
          This site is created and maintained by Justin Chang. View the code on{" "}
          <a
            href="https://github.com/justinchang/dvorak-training"
            className="text-blue-500 underline"
          >
            GitHub
          </a>
          . Follow my projects on{" "}
          <a
            href="https://inpublic.dev/justinpchang"
            className="text-blue-500 underline"
          >
            inpublic
          </a>
          . Contact me by{" "}
          <a
            href="mailto:justin.p.chang@gmail.com"
            className="text-blue-500 underline"
          >
            email
          </a>
          .
        </p>
        <p className="text-xs">
          Copyright (c) 2023, Justin Chang. All rights reserved.
        </p>
      </div>
    </>
  );
}
