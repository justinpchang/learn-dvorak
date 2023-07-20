import { robotoMono } from "@/pages/_app";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const KEYBOARD_LAYOUTS = {
  default: [
    "{tab} ' , . p y f g c r l / = \\",
    "{lock} a o e u i d h t n s - {enter}",
    "{shift} ; q j k x b m w v z {shift}",
  ],
};

const KEYBOARD_DISPLAY = {
  "{bksp}": "⌫",
  "{tab}": "⇥",
  "{lock}": "⇪",
  "{enter}": "⏎",
  "{shift}": "⇧",
  "{ctrl}": "⌃",
  "{alt}": "⌥",
  "~": "`",
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F",
  g: "G",
  h: "H",
  i: "I",
  j: "J",
  k: "K",
  l: "L",
  m: "M",
  n: "N",
  o: "O",
  p: "P",
  q: "Q",
  r: "R",
  s: "S",
  t: "T",
  u: "U",
  v: "V",
  w: "W",
  x: "X",
  y: "Y",
  z: "Z",
};

function KeyboardDisplay() {
  return (
    <div className="pointer-events-none">
      <Keyboard
        layout={KEYBOARD_LAYOUTS}
        layoutName="default"
        display={KEYBOARD_DISPLAY}
        theme={"keyboard " + robotoMono.className}
        buttonTheme={[
          {
            buttons: "{tab}",
            class: "w-[15px]",
          },
          {
            buttons: "{shift}",
            class: "w-[50px]",
          },
        ]}
        physicalKeyboardHighlight
        physicalKeyboardHighlightBgColor="#93a1a1"
        physicalKeyboardHighlightTextColor="white"
      />
    </div>
  );
}

export { KeyboardDisplay };
