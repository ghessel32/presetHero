import React from "react";
import Select from "../../utils/Selector";
import ColorPicker from "../../utils/ColorPicker";
import Slider from "../../utils/Slider";
import { usebgstyleStore } from "../../store/bgstyleStore";

function ColorPattern() {
  const { type, position, color, transparentAt, opacity, size, colorStart } =
    usebgstyleStore((s) => s.bgColorPatterns);

  const getGradientStyle = () => {
    if (type === "radial-center") {
      return `radial-gradient(circle at ${position}, ${color}, transparent ${transparentAt}%)`;
    } else if (type === "radial-edge") {
      const positionMap = {
        bottom: "50% 0%",
        top: "50% 100%",
        left: "100% 50%", 
        right: "0% 50%",
        center: "50% 50%",
      };
      return `radial-gradient(${size}% ${size}% at ${positionMap[position]}, ${colorStart} 40%, ${color} 100%)`;
    }
    return `radial-gradient(circle at ${position}, ${color}, transparent ${transparentAt}%)`;
  };

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: getGradientStyle(),
        opacity: opacity,
      }}
    />
  );
}

function ColorPatternSettings() {
  const { bgColorPatterns, updateBGStyle, bgstyles } = usebgstyleStore();

  return (
    <div className="mt-4 space-y-4">
      <Select
        label="Gradient Type"
        value={bgColorPatterns.type}
        onChange={(e) =>
          updateBGStyle("bgColorPatterns", {
            type: e.target.value,
          })
        }
        options={[
          { value: "radial-center", label: "Radial from Center" },
          { value: "radial-edge", label: "Radial from Edge" },
        ]}
      />

      <Select
        label="Position"
        value={bgColorPatterns.position}
        onChange={(e) =>
          updateBGStyle("bgColorPatterns", {
            position: e.target.value,
          })
        }
        options={[
          { value: "bottom", label: "Bottom" },
          { value: "top", label: "Top" },
          { value: "left", label: "Left" },
          { value: "right", label: "Right" },
          { value: "center", label: "Center" },
        ]}
      />

      {bgColorPatterns.type === "radial-edge" && (
        <>
          <Slider
            label="Gradient Size"
            value={bgColorPatterns.size}
            onChange={(e) =>
              updateBGStyle("bgColorPatterns", {
                size: Number(e.target.value),
              })
            }
            min={50}
            max={200}
            unit="%"
          />

          <ColorPicker
            label="Start Color"
            value={bgColorPatterns.colorStart}
            onChange={(e) =>
              updateBGStyle("bgColorPatterns", { colorStart: e.target.value })
            }
          />
        </>
      )}

      <ColorPicker
        label="End Color"
        value={bgColorPatterns.color}
        onChange={(e) =>
          updateBGStyle("bgColorPatterns", { color: e.target.value })
        }
      />

      {bgColorPatterns.type === "radial-center" && (
        <Slider
          label="Transparent At"
          value={bgColorPatterns.transparentAt}
          onChange={(e) =>
            updateBGStyle("bgColorPatterns", {
              transparentAt: Number(e.target.value),
            })
          }
          min={0}
          max={100}
          unit="%"
        />
      )}

      <ColorPicker
        label="Background Color"
        value={bgstyles.bgColor}
        onChange={(e) => updateBGStyle("bgstyles", { bgColor: e.target.value })}
      />

      <Slider
        label="Opacity"
        value={bgColorPatterns.opacity}
        onChange={(e) =>
          updateBGStyle("bgColorPatterns", {
            opacity: Number(e.target.value),
          })
        }
        min={0}
        max={1}
        step={0.1}
        unit=""
      />
    </div>
  );
}

export { ColorPattern, ColorPatternSettings };



