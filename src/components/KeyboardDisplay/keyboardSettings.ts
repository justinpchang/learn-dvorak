const ALPHABET_LOWER = "abcdefghijklmnopqrstuvwxyz".split("");

export const KEYBOARD_LAYOUT: string[] = [
  "{tab} ' , . p y f g c r l / = \\",
  "{lock} a o e u i d h t n s - {enter}",
  "{shift} ; q j k x b m w v z {shift}",
];

const KEYBOARD_CODES: any = {
  ...ALPHABET_LOWER.reduce(
    (acc, letter) => ({ ...acc, [`Key${letter.toUpperCase()}`]: letter }),
    {}
  ),
  Tab: "{tab}",
  CapsLock: "{lock}",
  ShiftLeft: "{shift}",
  Quote: "'",
  Semicolon: ";",
  Comma: ",",
  Period: ".",
  Slash: "/",
  Backslash: "\\",
  Equal: "=",
  Minus: "-",
  ShiftRight: "{shift}",
  Enter: "{enter}",
};

export const getKeyFromCode = (code: string) =>
  KEYBOARD_CODES[code.split(" ")[0]] || code;

export const KEYBOARD_DISPLAY: any = {
  ...ALPHABET_LOWER.reduce(
    (acc, letter) => ({ ...acc, [letter]: letter.toUpperCase() }),
    {}
  ),
  "{bksp}": "⌫",
  "{tab}": "⇥",
  "{lock}": "⇪",
  "{enter}": "⏎",
  "{shift}": "⇧",
  "{ctrl}": "⌃",
  "{alt}": "⌥",
};
