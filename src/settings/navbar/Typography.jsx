import React from "react";
import ListSettings from "./ListSettings";
import Slider from "../../utils/Slider.jsx";
import Select from "../../utils/Selector.jsx";
import { useNavbarStore } from "../../store/navstyleStore";

function Typography() {
  const { list, updateStyle } = useNavbarStore();

  return (
    <div className="mb-4">
      <h1 className="mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Typography
      </h1>

      <div className="p-6">
        <ListSettings />

        <Slider
          label="Size"
          unit="px"
          value={parseInt(list.size) || 0}
          onChange={(e) => updateStyle("list", { size: `${e.target.value}px` })}
          min={10}
          max={120}
        />

        <Select
          label="Font Weight"
          value={list.fontWeight}
          onChange={(e) => updateStyle("list", { fontWeight: e.target.value })}
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
          value={parseFloat(list.letterSpacing) || 0}
          onChange={(e) =>
            updateStyle("list", { letterSpacing: `${e.target.value}px` })
          }
          step={0.5}
          min={-3}
          unit="px"
          max={20}
        />
        <Select
          label="Text Transform"
          value={list.textTransform}
          onChange={(e) =>
            updateStyle("list", { textTransform: e.target.value })
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
