import { create } from "zustand";

const defaultButtonStyles = {
  bgColor: "#ffffff",
  bgOpacity: 1,
  color: "#000000",
  paddingY: "10px",
  paddingX: "20px",
  marginY: "0px",
  marginX: "0px",
  shadow: "none",
  shadowColor: "#000000",
  borderRadius: "50px",
  borderColor: "#ADADAD",
  borderWidth: "1px",
  fontWeight: "600",
  size: "16px",
};

export const useButtonStore = create((set) => ({
  // HERO buttons only
  buttons: {
    "btn-1": {
      id: "btn-1",
      text: "Get Started",
      styles: { ...defaultButtonStyles },
    },
    "btn-2": {
      id: "btn-2",
      text: "Started",
      styles: { ...defaultButtonStyles },
    },

    "btn-3": {
      id: "btn-3",
      text: "Secondary",
      styles: { ...defaultButtonStyles, bgColor: "#000000", color: "#ffffff" },
    },
  },

  // HERO zone only
  zones: {
    hero: ["btn-1", "btn-3"],
    nav: ["btn-2"],
  },

  // which button settings panel edits
  activeButtonId: "btn-1",

  /* ================= ACTIONS ================= */

  setActiveButton: (id) => set({ activeButtonId: id }),

  updateActiveButtonStyle: (newStyles) =>
    set((state) => {
      const id = state.activeButtonId;
      if (!id) return {};

      return {
        buttons: {
          ...state.buttons,
          [id]: {
            ...state.buttons[id],
            styles: {
              ...state.buttons[id].styles,
              ...newStyles,
            },
          },
        },
      };
    }),

  updateActiveButtonText: (text) =>
    set((state) => {
      const id = state.activeButtonId;
      if (!id) return {};

      return {
        buttons: {
          ...state.buttons,
          [id]: {
            ...state.buttons[id],
            text,
          },
        },
      };
    }),
}));
