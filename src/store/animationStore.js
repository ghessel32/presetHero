import { create } from "zustand";

export const useAnimations = create((set) => ({
  animation: {
    enabled: false,
    type: "fade",
    duration: 0.6,
    delay: 0,
  },

  // actions
  setAnimationEnabled: (enabled) =>
    set((state) => ({
      animation: {
        ...state.animation,
        enabled,
      },
    })),

  setAnimationType: (type) =>
    set((state) => ({
      animation: {
        ...state.animation,
        type,
      },
    })),

  setAnimationDuration: (duration) =>
    set((state) => ({
      animation: {
        ...state.animation,
        duration,
      },
    })),

  setAnimationDelay: (delay) =>
    set((state) => ({
      animation: {
        ...state.animation,
        delay,
      },
    })),
}));
