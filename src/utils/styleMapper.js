export const mapStyle = (styleObj) => {
  const result = {};

  // Helper function
  const hexToRgba = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  // Direct mappings (excluding colors that need opacity handling)
  const directMappings = {
    size: "fontSize",
    fontWeight: "fontWeight",
    lineHeight: "lineHeight",
    letterSpacing: "letterSpacing",
    textAlign: "textAlign",
    textTransform: "textTransform",
    opacity: "opacity",
    width: "width",
    maxWidth: "maxWidth",
    height: "height",
    borderRadius: "borderRadius",
    gap: "gap",
    direction: "flexDirection",
  };

  // Apply direct mappings
  for (const [sourceKey, targetKey] of Object.entries(directMappings)) {
    if (styleObj[sourceKey] !== undefined && styleObj[sourceKey] !== "") {
      result[targetKey] = styleObj[sourceKey];
    }
  }

  // Handle colors with opacity
  if (styleObj.color !== undefined && styleObj.color !== "") {
    result.color =
      styleObj.colorOpacity !== undefined
        ? hexToRgba(styleObj.color, styleObj.colorOpacity)
        : styleObj.color;
  }

  if (styleObj.bgColor !== undefined && styleObj.bgColor !== "") {
    result.backgroundColor =
      styleObj.bgOpacity !== undefined
        ? hexToRgba(styleObj.bgColor, styleObj.bgOpacity)
        : styleObj.bgColor;
  }

  // Padding
  if (styleObj.paddingY && styleObj.paddingX) {
    result.padding = `${styleObj.paddingY} ${styleObj.paddingX}`;
  }

  // Margin (supports Y-only, X-only, auto-centering)
  if (styleObj.marginY || styleObj.marginX) {
    const y = styleObj.marginY ?? "0";
    const x = styleObj.marginX ?? "0";

    result.margin = `${y} ${x}`;
  }

  // Border
  if (styleObj.borderWidth && styleObj.borderWidth !== "0px") {
    const borderColor = styleObj.borderColor || "#000000";
    result.border = `${styleObj.borderWidth} solid ${borderColor}`;
  }

  // Text Shadow (for text elements)
  if (styleObj.textShadow && styleObj.textShadow !== "none") {
    result.textShadow = styleObj.textShadow;
  }

  return result;
};
