import { useButtonStore } from "../store/buttonstyleStore";
import { mapStyle } from "../utils/styleMapper";

function Button({ buttonId, onClick }) {
  const button = useButtonStore((s) => s.buttons[buttonId]);

  if (!button) return null;

  // Helper function to convert hex to rgb
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
          result[3],
          16
        )}`
      : "0 0 0";
  };

  // Map shadow values with custom color
  const getShadow = (size, color) => {
    const rgb = hexToRgb(color);
    const shadowMap = {
      none: "none",
      sm: `0 1px 2px 0 rgb(${rgb})`,
      md: `0 4px 6px -1px rgb(${rgb}), 0 2px 4px -2px rgb(${rgb})`,
      lg: `0 10px 15px -3px rgb(${rgb}), 0 4px 6px -4px rgb(${rgb})`,
      xl: `0 20px 25px -5px rgb(${rgb}), 0 8px 10px -6px rgb(${rgb})`,
      "2xl": `0 25px 50px -12px rgb(${rgb})`,
    };
    return shadowMap[size] || shadowMap.none;
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...mapStyle(button.styles),
        boxShadow: getShadow(button.styles.shadow, button.styles.shadowColor),
      }}
      className={`cursor-pointer z-10 pointer-events-auto`}
    >
      {button.text}
    </button>
  );
}

export default Button;
