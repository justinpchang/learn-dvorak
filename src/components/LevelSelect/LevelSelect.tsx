import { useMemo } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { LEVELS } from "@/constants/levels";
import { useLevelStore } from "@/utils/useLevelStore";

function LevelSelect() {
  const { level, setLevel } = useLevelStore();

  const options = useMemo(
    () =>
      LEVELS.map((level, i) => ({
        value: i.toString(),
        label: level.title,
      })),
    []
  );

  return (
    <>
      <p className="text-md mb-2">Select a chapter</p>
      <Dropdown
        options={options}
        value={options[level]}
        onChange={({ value }) => setLevel(parseInt(value))}
        placeholder="Select a chapter"
        className="level-select"
      />
    </>
  );
}

export { LevelSelect };
