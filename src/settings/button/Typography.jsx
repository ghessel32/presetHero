import React from "react";
import Slider from "../../utils/Slider";
import Select from "../../utils/Selector.jsx";
import { useActiveButton } from "./useActiveButton.js";
import ChangeButtonText from "./ChangeButtonText.jsx";

function Typography() {
  const { button, styles, updateStyle } = useActiveButton();
  if (!button) return null;

  return (
    <div className="mb-8">
      <h1 className="mb-6 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        TypoGraphy
      </h1>

      <div className="p-6">
        <ChangeButtonText />
        <Slider
          label="Size"
          unit="px"
          value={parseInt(styles.size) || 0}
          onChange={(e) => updateStyle({ size: `${e.target.value}px` })}
          min={10}
          max={30}
        />

        <Select
          label="Font Weight"
          value={styles.fontWeight}
          onChange={(e) => updateStyle({ fontWeight: e.target.value })}
          options={[
            { value: "400", label: "Regular" },
            { value: "100", label: "Thin" },
            { value: "300", label: "Light" },
            { value: "600", label: "Semi-Bold" },
            { value: "700", label: "Bold" },
            { value: "900", label: "Black" },
          ]}
        />
      </div>
    </div>
  );
}

export default Typography;
