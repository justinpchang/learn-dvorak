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
    <div className="keyboard">
      {KEYBOARD_LAYOUTS.default.map((row) => (
        <div className="keyboard-row" key={row}>
          {row.split(" ").map((key, i) => (
            <div
              className={
                "keyboard-button " +
                ((key === "u" || key === "h") &&
                  " underline underline-offset-8 ") +
                (key === "{shift}" && " w-[50px] ") +
                (key === "{tab}" && " w-[15px] ") +
                (key === "{enter}" && " w-[40px] ")
              }
              key={key + i}
            >
              {(KEYBOARD_DISPLAY as any)[key] || key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export { KeyboardDisplay };
