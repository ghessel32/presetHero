import { create } from "zustand";

export const usebgstyleStore = create((set) => ({
  bgstyles: {
    backgroundType: "color",
    bgColor: "#ffffff",
    animationPattern: "FloatingLines",
    bgImage: "./bgImage.jpg",
    bgVideo: "./bgVideo03.mp4",
    animation: {
      type: "none",
      duration: 0.6,
      delay: 0,
    },
  },

  bgColorPatterns: {
    type: "radial-center",
    position: "bottom",
    color: "#8FFFB0",
    colorStart: "#ffffff",
    transparentAt: 100,
    opacity: 0.6,
    size: 125,
  },

  bgImage: {
    src: "./bgImage.jpg",
    positionX: 0,
    positionY: 0,
    size: "cover",
  },

  updateBGStyle: (component, newStyle) =>
    set((state) => ({
      [component]: {
        ...state[component],
        ...newStyle,
      },
    })),
}));
