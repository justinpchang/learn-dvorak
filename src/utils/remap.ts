const DVORAK_LINEAR =
  "[]',.pyfgcrl/=aoeuidhtns-;qjkxbmwvz{}\"<>PYFGCRL?+AOEUIDHTNS_:QJKXBMWVZ";
const QWERTY_LINEAR =
  "-=qwertyuiop[]asdfghjkl;'zxcvbnm,./_+QWERTYUIOP{}ASDFGHJKL:\"ZXCVBNM<>?";

export const remapToDvorak = (c: string) =>
  DVORAK_LINEAR.charAt(QWERTY_LINEAR.indexOf(c)) || c;
