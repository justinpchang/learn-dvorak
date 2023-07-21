import Link from "next/link";
import { FaGithubAlt, FaHome, FaQuestion } from "react-icons/fa";

interface Props {
  title: string;
  github?: boolean;
  home?: boolean;
  about?: boolean;
}
function Heading({ title, github, home, about }: Props) {
  return (
    <div className="flex justify-between items-center mb-12">
      <h1 className="text-3xl">{title}</h1>
      <div className="flex justify-center items-center gap-4">
        {github && (
          <a href="https://github.com/justinpchang/learn-dvorak">
            <FaGithubAlt className="text-lg" />
          </a>
        )}
        {home && (
          <Link href="/">
            <FaHome className="text-lg" />
          </Link>
        )}
        {about && (
          <Link href="/about">
            <FaQuestion className="text-sm" />
          </Link>
        )}
      </div>
    </div>
  );
}

export { Heading };
