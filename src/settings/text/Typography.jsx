import React from "react";
import Slider from "../../utils/Slider.jsx";
import { useTextStore } from "../../store/textstyleStore.js";
import Select from "../../utils/Selector.jsx";
import ChangeText from "./ChangeText";

function Typography() {
  //textTransform
  const selected = useTextStore((s) => s.selectedText);
  const styles = useTextStore((s) => s[selected]);

  const updateStyle = useTextStore((s) => s.updateStyle);

  // AFTER hooks
  if (selected === "layout" || !styles) return null;

  return (
    <div className="mb-4">
      <h2 className="mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Typography
      </h2>

      <div className="p-6">
        <ChangeText />

        <Slider
          label="Size"
          unit="px"
          value={parseInt(styles.size) || 0}
          onChange={(e) =>
            updateStyle(selected, { size: `${e.target.value}px` })
          }
          min={10}
          max={120}
        />

        <Select
          label="Font Weight"
          value={styles.fontWeight}
          onChange={(e) =>
            updateStyle(selected, { fontWeight: e.target.value })
          }
          options={[
            { value: "400", label: "Normal" },
            { value: "100", label: "Thin" },
            { value: "300", label: "Light" },
            { value: "500", label: "Medium" },
            { value: "600", label: "Semi-Bold" },
            { value: "700", label: "Bold" },
            { value: "900", label: "Black" },
          ]}
        />
        <Slider
          label="LineHeight"
          value={parseFloat(styles.lineHeight) || 1.2}
          onChange={(e) =>
            updateStyle(selected, { lineHeight: `${e.target.value}` })
          }
          step={0.1}
          min={0.8}
          unit=""
          max={3}
        />
        <Slider
          label="Letter Spacing"
          value={parseFloat(styles.letterSpacing) || 0}
          onChange={(e) =>
            updateStyle(selected, { letterSpacing: `${e.target.value}px` })
          }
          step={0.5}
          min={-3}
          unit="px"
          max={20}
        />
        <Select
          label="Text Transform"
          value={styles.textTransform}
          onChange={(e) =>
            updateStyle(selected, { textTransform: e.target.value })
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
