import React from "react";
import Slider from "../../utils/Slider.jsx";
import ColorPicker from "../../utils/ColorPicker.jsx";
import { useTextStore } from "../../store/textstyleStore.js";

function TextShadow() {
  const selected = useTextStore((s) => s.selectedText);
  const styles = useTextStore((s) => s[selected]);
  const updateStyle = useTextStore((s) => s.updateStyle);
  // AFTER hooks
  if (selected === "layout" || !styles) return null;
  const handleShadowChange = (prop, value) => {
    const x = prop === "shadowX" ? value : styles.shadowX || "0";
    const y = prop === "shadowY" ? value : styles.shadowY || "0";
    const blur = prop === "shadowBlur" ? value : styles.shadowBlur || "0";
    const color =
      prop === "shadowColor" ? value : styles.shadowColor || "#000000";

    const textShadow = `${x}px ${y}px ${blur}px ${color}`;

    updateStyle(selected, {
      [prop]: value,
      textShadow: textShadow,
    });
  };

  const resetShadow = () => {
    updateStyle(selected, {
      shadowX: "0",
      shadowY: "0",
      shadowBlur: "0",
      shadowColor: "#2feec",
      textShadow: "none",
    });
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 ">
        <h1 className="text-gray-700">Text Shadow</h1>
        <button
          onClick={resetShadow}
          className="text-sm text-blue-500 hover:text-blue-600"
        >
          Reset
        </button>
      </div>

      <div className="p-6">
        <Slider
          label="Horizontal (X)"
          value={parseInt(styles.shadowX) || 0}
          onChange={(e) => handleShadowChange("shadowX", e.target.value)}
          min={-50}
          max={50}
          unit="px"
        />

        <Slider
          label="Vertical (Y)"
          value={parseInt(styles.shadowY) || 0}
          onChange={(e) => handleShadowChange("shadowY", e.target.value)}
          min={-50}
          max={50}
          unit="px"
        />

        <Slider
          label="Blur"
          value={parseInt(styles.shadowBlur) || 0}
          onChange={(e) => handleShadowChange("shadowBlur", e.target.value)}
          min={0}
          max={50}
          unit="px"
        />

        <ColorPicker
          label="Shadow Color"
          value={styles.shadowColor || "#000000"}
          onChange={(e) => handleShadowChange("shadowColor", e.target.value)}
        />
      </div>
    </div>
  );
}

export default TextShadow;
