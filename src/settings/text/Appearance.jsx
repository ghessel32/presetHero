import ColorPicker from "../../utils/ColorPicker.jsx";
import React from "react";
import { useTextStore } from "../../store/textstyleStore.js";
import Slider from "../../utils/Slider";
import Select from "../../utils/Selector.jsx";

function Appearance({ target }) {
  const selected = useTextStore((s) => s.selectedText);
  const styles = useTextStore((s) => s[selected]);
  const updateStyle = useTextStore((s) => s.updateStyle);

  // Don't return null - we need to render controls for layout too
  if (!styles) return null;

  return (
    <div className="mb-8">
      <h1 className="mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Appearance
      </h1>

<div className="p-6">
  {target !== "layout" ? (
    <>
      <ColorPicker
        label="Color"
        value={styles.color}
        onChange={(e) => updateStyle(selected, { color: e.target.value })}
      />

      <Slider
        label="Opacity"
        unit=""
        value={parseFloat(styles.opacity) || 0}
        onChange={(e) =>
          updateStyle(selected, { opacity: e.target.value })
        }
        step={0.1}
        min={0}
        max={1}
      />
    </>
  ) : (
    <Select
      label="Alignment"
      value={styles.textAlign}
      onChange={(e) => updateStyle(selected, { textAlign: e.target.value })}
      options={[
        { value: "left", label: "Left" },
        { value: "right", label: "Right" },
        { value: "center", label: "Center" },
      ]}
    />
  )}

       
      </div>
    </div>
  );
}

export default Appearance;
