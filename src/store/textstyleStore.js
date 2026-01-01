import { create } from "zustand";

const baseTypography = {
  color: "#000000",
  size: "16px",
  fontWeight: "400",
  lineHeight: "1.2",
  letterSpacing: "0px",
  textTransform: "none",
  maxWidth: "",
  opacity: "1",
  textShadow: "none",
  shadowX: "0",
  shadowY: "0",
  shadowBlur: "0",
  shadowColor: "#000000",
};

export const useTextStore = create((set) => ({
  selectedText: "layout",

  setSelectedText: (key) => set({ selectedText: key }),

  layout: {
    paddingY: "20px",
    paddingX: "20px",
    marginY: "10px",
    marginX: "0px",
    textAlign: "center",
    animation: {
      type: "none",
      duration: 0.6,
      delay: 0,
    },
  },

  heading: {
    ...baseTypography,
    text: "Build Perfect Hero Sections in Seconds",
    size: "50px",
    fontWeight: "900",
    maxWidth: "600px",
  },

  subHeading: {
    ...baseTypography,
    text: "The visual hero builder that developers actually want to use",
    size: "20px",
    lineHeight: "1.9",
  },

  paragraph: {
    ...baseTypography,
    text: "Stop wrestling with code and AI prompts. Configure your hero section with simple settings, get production-ready code instantly, and ship faster. No design skills needed.",
    size: "13px",
    maxWidth: "600px",
    marginX: "auto",
    lineHeight: "1.4",
    fontWeight: 600,
  },

  fontConfig: {
    source: "external",
    url: "https://fonts.googleapis.com/css2?family=Anton&family=Pacifico&display=swap",
    family: "pacifico",
    fallback: "sans-serif",
  },

  updateStyle: (component, newStyle) =>
    set((state) => ({
      [component]: {
        ...state[component],
        ...newStyle,
      },
    })),

  applyLayoutPreset: (layoutType) =>
    set((state) => {
      if (layoutType === "centered") {
        return {
          layout: {
            ...state.layout,
            textAlign: "center",
          },

          paragraph: {
            ...state.paragraph,
            marginX: "auto",
          },
        };
      }

      // split (left-aligned)
      return {
        layout: {
          ...state.layout,
          textAlign: "left",
        },
        heading: {
          ...state.heading,
          textAlign: "left",
        },
        subHeading: {
          ...state.subHeading,
          textAlign: "left",
        },
        paragraph: {
          ...state.paragraph,
          textAlign: "left",
          marginX: "0px",
        },
      };
    }),
}));
