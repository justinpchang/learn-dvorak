import { useEffect, useMemo, useRef, useState } from "react";
import useTyping, { CharStateType, PhaseType } from "react-typing-game-hook";
import { FaMousePointer } from "react-icons/fa";
import { remapToDvorak } from "@/utils/remap";
import { LEVELS } from "@/constants/levels";
import { ProgressBar } from "./ProgressBar";
import { useLevelStore } from "@/utils/useLevelStore";

interface Props {
  text: string;
  refreshText: () => void;
  shouldRemap: boolean;
}

function TypingWindow({ text, refreshText, shouldRemap }: Props) {
  const [duration, setDuration] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const letterElements = useRef<HTMLDivElement>(null);

  const { level, setLevel } = useLevelStore();

  const {
    states: {
      charsState,
      currIndex,
      phase,
      correctChar,
      errorChar,
      startTime,
      endTime,
    },
    actions: { insertTyping, deleteTyping, resetTyping },
  } = useTyping(text, { skipCurrentWordOnSpace: false, pauseOnError: false });

  const reset = () => {
    refreshText();
    letterElements.current?.scrollTo({
      top: 0,
    });
    setDuration(0);
    resetTyping();
  };

  // Set cursor
  const pos = useMemo(() => {
    if (currIndex !== -1 && letterElements.current) {
      let spanref: any = letterElements.current.children[currIndex];
      let left = spanref.offsetLeft + spanref.offsetWidth - 2;
      let top = spanref.offsetTop;

      // Set scroll
      letterElements.current?.scrollTo({
        top: top - 40,
        behavior: "smooth",
      });

      return { left, top };
    } else {
      return {
        left: -2,
        top: 0,
      };
    }
  }, [currIndex]);

  // Set WPM
  useEffect(() => {
    if (phase === PhaseType.Ended && endTime && startTime) {
      setDuration(Math.floor((endTime - startTime) / 1000));
    } else {
      setDuration(0);
    }
  }, [phase, startTime, endTime]);

  const handleKeyDown = (_letter: string, control: boolean) => {
    const letter = shouldRemap ? remapToDvorak(_letter) : _letter;
    if (letter === "Escape") {
      reset();
    } else if (letter === "Backspace") {
      deleteTyping(control);
    } else if (letter.length === 1) {
      insertTyping(letter);
    }
  };

  return (
    <div>
      <div
        tabIndex={0}
        onKeyDown={(e) => handleKeyDown(e.key, e.ctrlKey)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="text-2xl outline-none relative h-[5em]"
      >
        <div
          ref={letterElements}
          className="tracking-wide leading-10 pointer-events-none select-none mb-4 h-[5em] pt-[36px] pb-[44px] overflow-hidden absolute"
          tabIndex={0}
        >
          {text.split("").map((letter, index) => {
            let state = charsState[index];
            let color =
              state === CharStateType.Incomplete
                ? "text-[#93a1a1]"
                : state === CharStateType.Correct
                ? "text-[#657b83]"
                : "text-red-500";
            return (
              <span key={letter + index} className={`${color}`}>
                {letter}
              </span>
            );
          })}
        </div>
        {phase !== PhaseType.Ended &&
          (isFocused ? (
            <span
              style={{
                left: pos.left,
                top: "1.7em",
                animationName: phase === PhaseType.Started ? "" : "flash",
                animationIterationCount: "infinite",
                animationDuration: "1s",
                transition: "0.08s",
              }}
              className="absolute inline pointer-events-none select-none border-l-[2px] border-[#073642]"
            >
              &nbsp;
            </span>
          ) : (
            <div className="w-full h-full flex flex-col justify-center items-center absolute top-0 left-0 backdrop-blur cursor-default">
              {phase === PhaseType.NotStarted && (
                <span className="text-lg mb-2">
                  <span className="block md:hidden">
                    Chapter {LEVELS[level].title}
                  </span>
                  <span className="hidden md:block">
                    {LEVELS[level].banner}
                  </span>
                </span>
              )}
              <span className="flex items-center gap-4 font-extrabold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                <FaMousePointer />
                <span className="text-transparent">
                  Click to{" "}
                  {phase === PhaseType.NotStarted ? "begin" : "continue"}
                </span>
              </span>
            </div>
          ))}
      </div>
      <div className="text-sm">
        {phase === PhaseType.Ended && startTime && endTime && (
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-green-500 mr-4">
                WPM: {Math.round((60 / duration) * text.split(" ").length)}
              </span>
              <span className="text-blue-500 mr-4">
                Accuracy: {((correctChar / text.length) * 100).toFixed(2)}%
              </span>
              <span className="text-yellow-500 mr-4">
                Duration: {duration}s
              </span>
            </div>
            <div className="space-x-4 text-lg">
              <button onClick={() => reset()} className="text-teal-500">
                &#x21bb; Play again
              </button>
              {level < LEVELS.length - 1 && (
                <button
                  onClick={() => {
                    setLevel(level + 1);
                    reset();
                  }}
                  className="text-fuchsia-500"
                >
                  Next chapter &rarr;
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          opacity: phase === PhaseType.Started ? 1 : 0,
        }}
        className="transition-all duration-1000"
      >
        <ProgressBar
          percent={
            phase === PhaseType.Started
              ? Math.round((currIndex / text.length) * 100)
              : 0
          }
        />
      </div>
    </div>
  );
}

export { TypingWindow };
