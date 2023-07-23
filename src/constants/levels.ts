import START_POSITION_WORDS from "@/pages/api/start_position_words.json";
import HOME_ROW_WORDS from "@/pages/api/home_row_words.json";
import EXT_CFKLMPRV_WORDS from "@/pages/api/ext_cfklmprv_words.json";
import EXT_BGJQWXZY_WORDS from "@/pages/api/ext_bgjqwxzy_words.json";
import CORE_CONNECTORS from "@/pages/api/core_connectors.json";
import CORE_SENTENCES from "@/pages/api/core_sentences.json";
import TOP_200 from "@/pages/api/top_200.json";
import TOP_1K from "@/pages/api/top_1k.json";

const shuffle = (array: string[]) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const WORD_COUNT = 100;

const createText = (words: string[]) =>
  Array(Math.ceil(words.length / WORD_COUNT))
    .fill(0)
    .flatMap(() => shuffle(words))
    .slice(0, WORD_COUNT)
    .join(" ");

export const LEVELS = [
  {
    title: "1 - Home row, 8 keys (start positions)",
    text: () => createText(START_POSITION_WORDS),
    include: "aoeuhtns",
    banner:
      "Welcome! Let's begin by learning the start positions. Check out the keyboard below to see what keys you'll be using.",
  },
  {
    title: "2 - Home row, 10 keys",
    text: () => createText(HOME_ROW_WORDS),
    include: "aoeuidhtns",
    banner: "Great job! Now, let's add the remaining keys on the home row.",
  },
  {
    title: "3 - Home row + C, F, K, L, M, P, R, V",
    text: () => createText(EXT_CFKLMPRV_WORDS),
    include: "aoeuidhtnscfklmprv",
    banner:
      "Doing great! Next up: a few of the keys above and below the home row.",
  },
  {
    title: "4 - Home row + B, G, J, Q, W, X, Y, Z",
    text: () => createText(EXT_BGJQWXZY_WORDS),
    include: "aoeuidhtnsbgjqwxzy",
    banner:
      "Fantastic! Now, let's add the remaining keys. After this chapter, you'll have learned all the letters in the alphabet!",
  },
  {
    title: "5 - Core connectors",
    text: () => createText(CORE_CONNECTORS),
    banner:
      "With the keys learnt, it's time to start focusing on speed. In this chapter, you'll learn the 10 words that make up 20% of a typical text. Learn them well!",
  },
  {
    title: "6 - Core sentences, part 1",
    text: () => shuffle(CORE_SENTENCES[0]).join(" "),
    banner:
      "The next three chapters focus on developing muscle memory using sentences. Here are the first 20. Practice until you can type them quickly.",
  },
  {
    title: "7 - Core sentences, part 2",
    text: () => shuffle(CORE_SENTENCES[1]).join(" "),
    banner:
      "Here are the next 20 sentences. Practice until you can type them even faster than the first!",
  },
  {
    title: "8 - Core sentences, part 3",
    text: () => shuffle(CORE_SENTENCES[2]).join(" "),
    banner: "Don't stop now! Here are the last 20 sentences...",
  },
  {
    title: "9 - Top 200 words, 100 words long",
    text: () => createText(TOP_200),
    banner:
      "You're probably typing pretty fast now! The final two lessons will drill some of the most common words in the English langauge.",
  },
  {
    title: "10 - Top 1K words, 100 words long",
    text: () => createText(TOP_1K),
    banner:
      "This is it! The final lesson. Practice this one over and over, or move on to normal typing practice sites to continue. You're a Dvorak master!",
  },
];
