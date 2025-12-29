import React from "react";
import Slider from "../../utils/Slider";
import { useActiveButton } from "./useActiveButton.js";

function Spacing() {
  const { button, styles, updateStyle } = useActiveButton();
  if (!button) return null;

  return (
    <div>
      <h1 className="mb-6 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
      Spacing
      </h1>

      <div className="p-6">
        <Slider
          label="paddingY"
          unit="px"
          value={parseInt(styles.paddingY)}
          onChange={(e) => updateStyle({ paddingY: `${e.target.value}px` })}
          min={0}
          max={100}
        />
        <Slider
          label="paddingX"
          unit="px"
          value={parseInt(styles.paddingX)}
          onChange={(e) => updateStyle({ paddingX: `${e.target.value}px` })}
          min={0}
          max={100}
        />

        <Slider
          label="marginX"
          value={parseInt(styles.marginX) || 0}
          onChange={(e) => updateStyle({ marginX: `${e.target.value}px` })}
          step={1}
          min={0}
          unit="px"
          max={100}
        />

        <Slider
          label="marginY"
          value={parseInt(styles.marginY) || 0}
          onChange={(e) => updateStyle({ marginY: `${e.target.value}px` })}
          step={1}
          min={0}
          unit="px"
          max={100}
        />
      </div>
    </div>
  );
}

export default Spacing;
