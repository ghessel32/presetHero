export const mapWidth = (width) => {
  if (!width) return undefined;
  if (width.mode === "auto") return "auto";
  if (width.mode === "custom" && width.value) return width.value;
  return undefined;
};

export const mapHeight = (height) => {
  if (!height) return undefined;
  if (height.mode === "auto") return "auto";
  if (height.mode === "custom" && height.value) return height.value;
  return undefined;
};
