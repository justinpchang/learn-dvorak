import { Heading } from "@/components/Heading";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Dvorak Training</title>
      </Head>
      <Heading title="About" github home />
      <div className="border-2 border-[#eee8d5] p-4 rounded-lg space-y-6">
        <p className="text-lg">
          Welcome to Dvorak Training! This is a simple web app that helps you
          learn the Dvorak keyboard layout.
        </p>
        <p className="text-md">Other text.</p>
      </div>
    </>
  );
}
