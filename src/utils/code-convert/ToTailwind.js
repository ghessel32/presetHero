export const convertToTailwind = (styles) => {
  function hexToRgba(hex, opacity) {
    const h = hex.replace("#", "");
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity})`;
  }

  const classes = [];

  // Background color with opacity
  if (styles.bgColor && styles.bgColor !== "none" && styles.bgColor !== "") {
    const opacity = styles.bgOpacity ?? 1;

    if (styles.bgColor === "#000000" && opacity === 1) {
      classes.push(`bg-black`);
    } else if (styles.bgColor === "#ffffff" && opacity === 1) {
      classes.push(`bg-white`);
    } else {
      const bg = styles.bgColor.startsWith("#")
        ? hexToRgba(styles.bgColor, opacity)
        : styles.bgColor;
      classes.push(`bg-[${bg}]`);
    }
  }

  // Text color
  if (styles.color) {
    if (styles.color == "#000000") {
      classes.push(`text-black`);
    } else if (styles.color == "#ffffff") {
      classes.push(`text-white`);
    } else {
      classes.push(`text-[${styles.color}]`);
    }
  }

  // Opacity
  if (styles.opacity && styles.opacity !== "1" && styles.opacity !== 1) {
    if (styles.opacity > 1) {
      classes.push(`opacity-${styles.opacity}`);
    } else {
      const opacityValue = parseFloat(styles.opacity) * 100;
      classes.push(`opacity-${opacityValue}`);
    }
  }

  //Padding Y
  if (styles.paddingY && styles.paddingY !== "0px") {
    const tw = pxToTailwind(styles.paddingY);
    classes.push(tw ? `py-${tw}` : `py-[${styles.paddingY}]`);
  }

  // Padding X
  if (styles.paddingX && styles.paddingX !== "0px") {
    const tw = pxToTailwind(styles.paddingX);
    classes.push(tw ? `px-${tw}` : `px-[${styles.paddingX}]`);
  }

  // Margin X
  if (styles.marginX) {
    if (styles.marginX === "auto") {
      classes.push("mx-auto");
    } else if (styles.marginX !== "0px") {
      const tw = pxToTailwind(styles.marginX);
      classes.push(tw ? `mx-${tw}` : `mx-[${styles.marginX}]`);
    }
  }

  // Margin Y
  if (styles.marginY && styles.marginY !== "0px") {
    const tw = pxToTailwind(styles.marginY);
    classes.push(tw ? `my-${tw}` : `my-[${styles.marginY}]`);
  }

  // Border radius
  if (styles.borderRadius && styles.borderRadius !== "0px") {
    classes.push(`rounded-[${styles.borderRadius}]`);
  }

  // Border color
  if (
    styles.borderColor &&
    styles.borderColor !== "none" &&
    styles.borderColor !== "" &&
    styles.borderWidth !== "0px"
  ) {
    if (styles.borderColor === "#000000") {
      classes.push(`border-black`);
    } else if (styles.borderColor === "#ffffff") {
      classes.push(`border-white`);
    } else {
      classes.push(`border-[${styles.borderColor}]`);
    }
  }

  // Border width
  if (styles.borderWidth && styles.borderWidth !== "0px") {
    const width = styles.borderWidth.replace("px", "");

    if (width === "1") {
      classes.push(`border`);
    } else {
      classes.push(`border-${width}`);
    }
  }

  // Font size
  if (styles.size) {
    const base = parseInt(styles.size); 

    classes.push(`text-[${Math.round(base * 0.7)}px]`);
    classes.push(`sm:text-[${Math.round(base * 0.75)}px]`);
    classes.push(`md:text-[${base}px]`);
  }

  // Font weight
  if (styles.fontWeight && styles.fontWeight !== "400") {
    const fontWeightMap = {
      100: "thin",
      300: "light",
      500: "medium",
      600: "semibold",
      700: "bold",
      900: "black",
    };
    if (fontWeightMap[styles.fontWeight]) {
      classes.push(`font-${fontWeightMap[styles.fontWeight]}`);
    }
  }

  // Letter spacing
  if (styles.letterSpacing && styles.letterSpacing !== "0px") {
    classes.push(`tracking-[${styles.letterSpacing}]`);
  }

  // Text transform
  if (styles.textTransform && styles.textTransform !== "none") {
    classes.push(styles.textTransform);
  }

  // Line height
  if (styles.lineHeight) {
    classes.push(`leading-[${styles.lineHeight}]`);
  }

  // Text align
  if (styles.textAlign) {
    classes.push(`text-${styles.textAlign}`);
  }

  // Text shadow
  if (styles.textShadow && styles.textShadow !== "none") {
    const {
      shadowX = "0",
      shadowY = "0",
      shadowBlur = "0",
      shadowColor = "#000000",
    } = styles;

    classes.push(
      `text-shadow-[${shadowX}px_${shadowY}px_${shadowBlur}px_${shadowColor}]`
    );
  }

  // Box shadow
  if (styles.shadow && styles.shadow !== "none") {
    classes.push(`shadow-${styles.shadow}`);

    if (styles.shadowColor === "#000000") {
      classes.push(`shadow-black`);
    } else if (styles.shadowColor === "#ffffff") {
      classes.push(`shadow-white`);
    } else {
      classes.push(`shadow-[${styles.shadowColor}]`);
    }
  }

  // Justify content
  if (styles.justifyContent) {
    const justifyMap = {
      "space-between": "justify-between",
      "space-around": "justify-around",
      "space-evenly": "justify-evenly",
      center: "justify-center",
      start: "justify-start",
      end: "justify-end",
    };

    if (justifyMap[styles.justifyContent]) {
      classes.push(justifyMap[styles.justifyContent]);
    }
  }

  // Justify content
  if (styles.alignItems) {
    const alignItemsMap = {
      start: "items-start",
      end: "items-end",
      center: "items-center",
    };

    if (alignItemsMap[styles.alignItems]) {
      classes.push(alignItemsMap[styles.alignItems]);
    }
  }

  // max width
  if (styles.maxWidth) {
    classes.push(`max-w-[${styles.maxWidth}]`);
  }

  //  width
  if (styles.width && styles.width !== "" && styles.width !== "auto") {
    classes.push(`w-[${styles.width}]`);
  }

  //Height
  if (styles.height && styles.height !== "" && styles.height !== "auto") {
    classes.push(`h-[${styles.height}]`);
  }

  // Background size (object-fit)
  if (styles.fit && styles.fit !== "auto") {
    const fitMap = {
      cover: "object-cover",
      contain: "object-contain",
    };
    if (fitMap[styles.fit]) {
      classes.push(fitMap[styles.fit]);
    }
  }

  return classes.join(" ");
};

function pxToTailwind(px) {
  if (!px) return null;
  if (px === "0px") return "0";

  const value = parseFloat(px);
  if (Number.isNaN(value)) return null;

  const scale = value / 4;

  // allow only clean steps (0.5, 1, 1.5, 2, ...)
  if (Number.isInteger(scale) || scale % 0.5 === 0) {
    return scale.toString();
  }

  return null;
}
