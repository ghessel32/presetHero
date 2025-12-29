import Slider from "../../utils/Slider.jsx";
import ColorPicker from "../../utils/ColorPicker.jsx";
import { useActiveButton } from "./useActiveButton.js";

function Effect() {
  const { button, styles, updateStyle } = useActiveButton();
  if (!button) return null;

  // Helper function to extract numeric value from CSS values like "10px"
  const getNumericValue = (value) => {
    if (!value) return 0;
    return parseInt(value) || 0;
  };

  return (
    <div className="mb-8">
      <h1 className="mb-6 text-lg font-bold">Effects</h1>
      <Slider
        label="Border Radius"
        value={getNumericValue(styles.borderRadius)}
        onChange={(e) =>
          updateStyle({
            borderRadius: `${e.target.value}px`,
          })
        }
        unit=""
        step={1}
        min={0}
        max={50}
      />

      <ColorPicker
        label="Border Color"
        value={styles.borderColor || ""}
        onChange={(e) => updateStyle({ borderColor: e.target.value })}
      />
      <Slider
        label="Border Width"
        value={getNumericValue(styles.borderWidth)}
        onChange={(e) =>
          updateStyle({
            borderWidth: `${e.target.value}px`,
          })
        }
        unit=""
        step={1}
        min={0}
        max={4}
      />
    </div>
  );
}

export default Effect;
