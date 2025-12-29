import React, { useState, useEffect } from "react";
import { useNavbarStore } from "../../store/navstyleStore";
import Slider from "../../utils/Slider.jsx";
import Select from "../../utils/Selector.jsx";
import Input from "../../utils/Input.jsx";

function Spacing() {
  const { navbar, updateStyle } = useNavbarStore();

  // Local state for width mode
  const [widthMode, setWidthMode] = useState(
    navbar.width === "auto" ? "auto" : "custom"
  );
  const [customWidth, setCustomWidth] = useState(
    navbar.width !== "auto" ? parseInt(navbar.width) : ""
  );

  // Sync local state when navbar.width changes externally
  useEffect(() => {
    if (navbar.width === "auto") {
      setWidthMode("auto");
    } else {
      setWidthMode("custom");
      setCustomWidth(parseInt(navbar.width) || "");
    }
  }, [navbar.width]);

  const handleWidthModeChange = (e) => {
    const mode = e.target.value;
    setWidthMode(mode);

    if (mode === "auto") {
      updateStyle("navbar", { width: "auto" });
    } else {
      updateStyle("navbar", {
        width: customWidth ? `${customWidth}px` : "700px",
      });
    }
  };

  const handleCustomWidthChange = (e) => {
    const value = e.target.value;
    setCustomWidth(value);
    updateStyle("navbar", { width: `${value}px` });
  };

  return (
    <div>
      <h1 className="mb-6 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Layout & Spacing
      </h1>

      <div className="p-6">
        <Select
          label="Width"
          value={widthMode}
          onChange={handleWidthModeChange}
          options={[
            { label: "Auto", value: "auto" },
            { label: "Custom", value: "custom" },
          ]}
        />
        
        <Select
          label="Alignment"
          value={navbar.justifyContent}
          onChange={(e) =>
            updateStyle("navbar", { justifyContent: e.target.value })
          }
          options={[
            { value: "center", label: "Center" },
            { value: "space-between", label: "Between" },
            { value: "space-around", label: "Around" },
            { value: "space-evenly", label: "Evenly" },
          ]}
        />

        {widthMode === "custom" && (
          <Input
            value={customWidth}
            onChange={handleCustomWidthChange}
            unit="px"
            min={0}
          />
        )}

        <Slider
          label="Padding Y"
          value={parseInt(navbar.paddingY) || 16}
          onChange={(e) =>
            updateStyle("navbar", { paddingY: e.target.value + "px" })
          }
          min={0}
          max={60}
        />
        <Slider
          label="Padding X"
          value={parseInt(navbar.paddingX) || 24}
          onChange={(e) =>
            updateStyle("navbar", { paddingX: e.target.value + "px" })
          }
          min={0}
          max={100}
        />

        <Slider
          label="Margin Y"
          value={parseInt(navbar.marginY) || 0}
          onChange={(e) =>
            updateStyle("navbar", { marginY: e.target.value + "px" })
          }
          min={0}
          max={100}
        />
      </div>
    </div>
  );
}

export default Spacing;
