import React from "react";
import Slider from "../../utils/Slider.jsx";
import ColorPicker from "../../utils/ColorPicker.jsx";
import { useActionSectionStore } from "../../store/actionSectionStore.js";

function Appearance({ target }) {
  const { updateStyle } = useActionSectionStore();

  const actioncomponent = useActionSectionStore((state) => state[target]);

  return (
    <div>
      <h1 className="mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Appearance
      </h1>
      <div className="p-6">
        <ColorPicker
          label="Color"
          value={actioncomponent.color}
          onChange={(e) => updateStyle(target, { color: e.target.value })}
        />

        {target !== "link" && (
          <Slider
            label="Opacity"
            unit=""
            value={parseFloat(actioncomponent.opacity) || 0}
            onChange={(e) => updateStyle(target, { opacity: e.target.value })}
            step={0.1}
            min={0}
            max={1}
          />
        )}

        {target === "input" && (
          <>
            <ColorPicker
              label="Background Color"
              value={actioncomponent.bgColor}
              onChange={(e) => updateStyle(target, { bgColor: e.target.value })}
            />

            <Slider
              label="Border Radius"
              value={parseInt(actioncomponent.borderRadius) || 0}
              onChange={(e) =>
                updateStyle(target, {
                  borderRadius: e.target.value + "px",
                })
              }
              min={0}
              max={50}
            />

            <ColorPicker
              label="Border Color"
              value={actioncomponent.borderColor}
              onChange={(e) =>
                updateStyle(target, { borderColor: e.target.value })
              }
            />

            <Slider
              label="Border Width"
              value={parseInt(actioncomponent.borderWidth) || 0}
              onChange={(e) =>
                updateStyle(target, {
                  borderWidth: e.target.value + "px",
                })
              }
              min={0}
              max={4}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Appearance;
