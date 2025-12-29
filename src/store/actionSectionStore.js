import { create } from "zustand";

export const useActionSectionStore = create((set) => ({
  selectedAction: "singleButton",
  setSelectedAction: (section) => set({ selectedAction: section }),

  selectedSubAction: "layout",
  setSelectedSubAction: (section) => set({ selectedSubAction: section }),

  layout: {
    gap: "1px",
    direction: "column",
    paddingY: "10px",
    paddingX: "10px",
    marginX: "0px",
    marginY: "10px",
    animation: {
      type: "none",
      duration: 0.6,
      delay: 0,
    },
  },

  input: {
    color: "#000000",
    bgColor: "none",
    paddingY: "8px",
    paddingX: "8px",
    marginX: "5px",
    marginY: "5px",
    borderRadius: "10px",
    borderColor: "#ADADAD",
    borderWidth: "1px",
  },

  link: {
    text: "Read More",
    opacity: "1",
    color: "#000000",
    size: "16px",
    fontWeight: "400",
    letterSpacing: "0px",
    textTransform: "none",
  },

  updateStyle: (component, newStyle) =>
    set((state) => ({
      [component]: {
        ...state[component],
        ...newStyle,
      },
    })),
}));
