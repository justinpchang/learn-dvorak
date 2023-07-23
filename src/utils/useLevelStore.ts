import { create } from "zustand";

interface LevelState {
  level: number;
  setLevel: (level: number) => void;
}

const useLevelStore = create<LevelState>((set) => ({
  level: 0,
  setLevel: (level) => set({ level }),
}));

export { useLevelStore };
