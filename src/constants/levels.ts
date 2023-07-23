import START_POSITION_WORDS from "@/pages/api/start_position_words.json";
import HOME_ROW_WORDS from "@/pages/api/home_row_words.json";
import CORE_CONNECTORS from "@/pages/api/core_connectors.json";
import CORE_SENTENCES from "@/pages/api/core_sentences.json";
import TOP_200 from "@/pages/api/top_200.json";
import TOP_1K from "@/pages/api/top_1k.json";

const shuffle = (array: string[]) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const WORD_COUNT = 10;

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
  },
  {
    title: "2 - Home row, 10 keys",
    text: () => createText(HOME_ROW_WORDS),
    include: "aoeuidhtns",
  },
  {
    title: "3 - Home row + C, F, K, L, M, P, R, V",
    text: () => createText(HOME_ROW_WORDS),
    include: "aoeuidhtnscfklmprv",
  },
  {
    title: "4 - Home row + B, G, J, Q, W, X, Y, Z",
    text: () => createText(HOME_ROW_WORDS),
    include: "aoeuidhtnsbgjqwxzy",
  },
  {
    title: "5 - Core connectors",
    text: () => createText(CORE_CONNECTORS),
  },
  {
    title: "6 - Core sentences, part 1",
    text: () => shuffle(CORE_SENTENCES[0]).join(" "),
  },
  {
    title: "7 - Core sentences, part 2",
    text: () => shuffle(CORE_SENTENCES[1]).join(" "),
  },
  {
    title: "8 - Core sentences, part 3",
    text: () => shuffle(CORE_SENTENCES[2]).join(" "),
  },
  {
    title: "9 - Top 200 words",
    text: () => createText(TOP_200),
  },
  {
    title: "10 - Top 1K words",
    text: () => createText(TOP_1K),
  },
];
