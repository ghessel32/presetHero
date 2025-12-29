import { create } from "zustand";

export const useHeroLayoutStore = create((set) => ({
  styles: {
    alignItems: "center",
    justifyContent: "center",
  },

  updateStyle: (component, newStyle) =>
    set((state) => ({
      [component]: { ...state[component], ...newStyle },
    })),
}));
