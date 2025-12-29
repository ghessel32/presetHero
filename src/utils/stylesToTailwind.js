/**
 * Converts style object properties to Tailwind CSS classes
 */
export const stylesToTailwind = (styles) => {
  const classes = [];

  // Background color
  if (styles.bgColor && styles.bgColor !== "none" && styles.bgColor !== "") {
    classes.push(`bg-[${styles.bgColor}]`);
  }

  // Text color
  if (styles.color) {
    classes.push(`text-[${styles.color}]`);
  }

  // Padding Y (vertical)
  if (styles.paddingY) {
    const py = convertToTailwindSpacing(styles.paddingY);
    if (py) classes.push(`py-${py}`);
  }

  // Padding X (horizontal)
  if (styles.paddingX) {
    const px = convertToTailwindSpacing(styles.paddingX);
    if (px) classes.push(`px-${px}`);
  }

  // Margin Y (vertical)
  if (styles.marginY) {
    const my = convertToTailwindSpacing(styles.marginY);
    if (my) classes.push(`my-${my}`);
  }

  // Margin X (horizontal)
  if (styles.marginX) {
    const mx = convertToTailwindSpacing(styles.marginX);
    if (mx) classes.push(`mx-${mx}`);
  }

  // Shadow
  if (styles.shadow && styles.shadow !== "none") {
    classes.push(styles.shadow);
  }

  // Border radius
  if (styles.borderRadius) {
    const rounded = convertToTailwindBorderRadius(styles.borderRadius);
    if (rounded) classes.push(rounded);
  }

  // Width - handle special cases
  if (styles.width) {
    const widthClass = convertToTailwindWidth(styles.width);
    if (widthClass) classes.push(widthClass);
  }

  // Border
  if (
    styles.borderWidth &&
    styles.borderWidth !== "0px" &&
    styles.borderWidth !== "0"
  ) {
    const borderW = convertToTailwindBorderWidth(styles.borderWidth);
    classes.push(borderW);

    if (styles.borderColor && styles.borderColor !== "none") {
      classes.push(`border-[${styles.borderColor}]`);
    }
  }

  return classes.filter(Boolean).join(" ");
};

/**
 * Convert width value to Tailwind class
 */
const convertToTailwindWidth = (value) => {
  if (!value) return "";

  const widthMap = {
    full: "w-full",
    container: "w-3/4 mx-auto",
    narrow: "w-1/2 mx-auto",
  };

  return widthMap[value] || `w-[${value}]`;
};

/**
 * Convert pixel/rem values to Tailwind spacing scale
 */
const convertToTailwindSpacing = (value) => {
  if (!value || value === "0") return "0";

  const numValue = parseFloat(value);

  // Map common values to Tailwind scale (4px = 1 unit)
  const spacingMap = {
    0: "0",
    4: "1",
    8: "2",
    12: "3",
    16: "4",
    20: "5",
    24: "6",
    32: "8",
    40: "10",
    48: "12",
    64: "16",
  };

  return spacingMap[numValue] || `[${value}]`;
};

/**
 * Convert border radius to Tailwind class
 */
const convertToTailwindBorderRadius = (value) => {
  if (!value || value === "0" || value === "0px") return "rounded-none";

  const numValue = parseFloat(value);

  const radiusMap = {
    2: "rounded-sm",
    4: "rounded",
    6: "rounded-md",
    8: "rounded-lg",
    12: "rounded-xl",
    16: "rounded-2xl",
    24: "rounded-3xl",
    9999: "rounded-full",
  };

  return radiusMap[numValue] || `rounded-[${value}]`;
};

/**
 * Convert border width to Tailwind class
 */
const convertToTailwindBorderWidth = (value) => {
  if (!value || value === "0" || value === "0px") return "";

  const numValue = parseFloat(value);

  const borderMap = {
    1: "border",
    2: "border-2",
    4: "border-4",
    8: "border-8",
  };

  return borderMap[numValue] || `border-[${value}]`;
};
