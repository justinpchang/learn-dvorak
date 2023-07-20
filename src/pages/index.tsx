import { KeyboardDisplay } from "@/components/KeyboardDisplay";
import { TypingWindow } from "@/components/TypingWindow";

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <h5>Esc to reset</h5>
      <div className="border-2 p-4 rounded-lg">
        <h1 className="mb-2">Charles Darwin, On the Origin of Species</h1>
        <TypingWindow
          text={
            "When we look to the individuals of the same variety or sub-variety of our older cultivated plants and animals, one of the first points which strikes us, is, that they generally differ much more from each other, than do the individuals of any one species or variety in a state of nature."
          }
        />
        <div className="m-4"></div>
        <KeyboardDisplay />
      </div>
    </>
  );
}
