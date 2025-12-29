import React from "react";
import { useActionSectionStore } from "../../store/actionSectionStore";
import Slider from "../../utils/Slider.jsx";
import Select from "../../utils/Selector.jsx";
import ChangeLinkText from "./ChangeLinkText.jsx";
function Typography() {
  const { link, updateStyle } = useActionSectionStore();
  return (
    <div>
      <h1 className="mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Typography
      </h1>
      <div className="p-6">
        <ChangeLinkText />

        <Slider
          label="Size"
          unit="px"
          value={parseInt(link.size) || 0}
          onChange={(e) => updateStyle("link", { size: `${e.target.value}px` })}
          min={10}
          max={120}
        />
        <Select
          label="Font Weight"
          value={link.fontWeight}
          onChange={(e) => updateStyle("link", { fontWeight: e.target.value })}
          options={[
            { value: "400", label: "Regular" },
            { value: "100", label: "Thin" },
            { value: "300", label: "Light" },
            { value: "600", label: "Semi-Bold" },
            { value: "700", label: "Bold" },
            { value: "900", label: "Black" },
          ]}
        />
        <Slider
          label="Letter Spacing"
          value={parseFloat(link.letterSpacing) || 0}
          onChange={(e) =>
            updateStyle("link", { letterSpacing: `${e.target.value}px` })
          }
          step={0.5}
          min={-3}
          unit="px"
          max={20}
        />
        <Select
          label="Text Transform"
          value={link.textTransform}
          onChange={(e) =>
            updateStyle("link", { textTransform: e.target.value })
          }
          options={[
            { value: "none", label: "Normal" },
            { value: "uppercase", label: "Uppercase" },
            { value: "lowercase", label: "Lowercase" },
            { value: "capitalize", label: "Capitalize" },
          ]}
        />
      </div>
    </div>
  );
}

export default Typography;
