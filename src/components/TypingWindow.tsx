import { useEffect, useMemo, useRef, useState } from "react";
import useTyping, { CharStateType, PhaseType } from "react-typing-game-hook";

interface Props {
  text: string;
}

function TypingWindow({ text }: Props) {
  const [duration, setDuration] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const letterElements = useRef<HTMLDivElement>(null);

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

  // set cursor
  const pos = useMemo(() => {
    if (currIndex !== -1 && letterElements.current) {
      let spanref: any = letterElements.current.children[currIndex];
      let left = spanref.offsetLeft + spanref.offsetWidth - 2;
      let top = spanref.offsetTop - 2;
      return { left, top };
    } else {
      return {
        left: -2,
        top: 2,
      };
    }
  }, [currIndex]);

  // set WPM
  useEffect(() => {
    if (phase === PhaseType.Ended && endTime && startTime) {
      setDuration(Math.floor((endTime - startTime) / 1000));
    } else {
      setDuration(0);
    }
  }, [phase, startTime, endTime]);

  // handle key presses
  const handleKeyDown = (letter: string, control: boolean) => {
    if (letter === "Escape") {
      resetTyping();
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
        className="text-xl outline-none relative"
      >
        <div
          ref={letterElements}
          className="tracking-wide pointer-events-none select-none mb-4"
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
                top: pos.top,
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
            <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 backdrop-blur-sm cursor-pointer">
              <span>
                Click here to{" "}
                {phase === PhaseType.NotStarted ? "focus" : "continue"}
              </span>
            </div>
          ))}
      </div>
      <p className="text-sm">
        {phase === PhaseType.Ended && startTime && endTime ? (
          <>
            <span className="text-green-500 mr-4">
              WPM: {Math.round(((60 / duration) * correctChar) / 5)}
            </span>
            <span className="text-blue-500 mr-4">
              Accuracy: {((correctChar / text.length) * 100).toFixed(2)}%
            </span>
            <span className="text-yellow-500 mr-4">Duration: {duration}s</span>
          </>
        ) : null}
      </p>
    </div>
  );
}

export { TypingWindow };
