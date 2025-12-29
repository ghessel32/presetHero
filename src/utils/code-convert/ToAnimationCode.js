// utils/getAnimationProps.js
import { animationClassMap } from "../animationMapper";

export function toAnimationCode(animation) {
  if (!animation || animation.type === "none") {
    return {
      className: "",
      style: "",
    };
  }

  return {
    className: animationClassMap[animation.type] || "",
    style: `style={{ 
      "--anim-duration": "${animation.duration}s",
      "--anim-delay": "${animation.delay}s"
    }}`,
  };
}

