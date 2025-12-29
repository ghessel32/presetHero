import { create } from "zustand";

export const useNavbarStore = create((set) => ({
  // Selected component
  selected: null,
  setSelected: (id) => set({ selected: id }),

  selectedSubComponent: "layout",
  setSubSelected: (key) => set({ selectedSubComponent: key }),

  // Layout
  navbar: {
    bgColor: "none",
    bgOpacity: 1,
    paddingY: "16px",
    paddingX: "24px",
    marginY: "10px",
    marginX: "10px",
    shadow: "none",
    shadowColor: "#000000",
    borderRadius: "0px",
    borderColor: "#000000",
    borderWidth: "0px",
    justifyContent: "space-between",
    width: "auto",
    animation: {
      type: "none",
      duration: 0.6,
      delay: 0,
    },
  },

  // Logo
  logo: {
    src: "/logo (2).svg",
    width: "auto",
    height: "50px",
  },

  // List
  list: {
    items: ["Home", "About", "Contact"],
    gap: "30px",
    color: "#000000",
    size: "15px",
    fontWeight: "400",
    letterSpacing: "0px",
    textTransform: "none",
  },

  // Update either navbar or logo styles
  updateStyle: (component, newStyle) =>
    set((state) => ({
      [component]: {
        ...state[component],
        ...newStyle,
      },
    })),
}));
