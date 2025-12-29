import ColorPicker from "../../utils/ColorPicker.jsx";
import { useActiveButton } from "./useActiveButton";
import ButtonShadow from "./ButtonShadow.jsx";
import Slider from "../../utils/Slider.jsx";

function Appearance() {
  const { button, styles, updateStyle } = useActiveButton();
  if (!button) return null;

  // Helper function to extract numeric value from CSS values like "10px"
  const getNumericValue = (value) => {
    if (!value) return 0;
    return parseInt(value) || 0;
  };

  return (
    <div className="mb-8">
      <h1 className="mb-6 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Appearance
      </h1>

      <div className="p-6">
        <ColorPicker
          label="Background Color"
          value={styles.bgColor}
          opacity={styles.bgOpacity}
          showOpacity
          onChange={(e) => updateStyle({ bgColor: e.target.value })}
          onOpacityChange={(e) =>
            updateStyle({ bgOpacity: parseFloat(e.target.value) })
          }
        />

        <ColorPicker
          label="Color"
          value={styles.color}
          onChange={(e) => updateStyle({ color: e.target.value })}
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

        <ColorPicker
          label="Border Color"
          value={styles.borderColor || ""}
          onChange={(e) => updateStyle({ borderColor: e.target.value })}
        />
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

        <ButtonShadow />
      </div>
    </div>
  );
}

export default Appearance;
