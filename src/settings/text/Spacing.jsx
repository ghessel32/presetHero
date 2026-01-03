import React from "react";
import Slider from "../../utils/Slider.jsx";
import { useTextStore } from "../../store/textstyleStore.js";
import Input from "../../utils/Input.jsx";

function Spacing({ target }) {
  const selected = useTextStore((s) => s.selectedText);
  const styles = useTextStore((s) => s?.[selected]);
  const updateStyle = useTextStore((s) => s.updateStyle);

  return (
    <div>
      <h1 className="mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Spacing
      </h1>

      <div className="p-6">
        {target === "layout" && (
          <>
            <Slider
              label="paddingY"
              unit="px"
              value={parseInt(styles.paddingY)}
              onChange={(e) =>
                updateStyle(selected, { paddingY: `${e.target.value}px` })
              }
              min={0}
              max={100}
            />
            <Slider
              label="paddingX"
              unit="px"
              value={parseInt(styles.paddingX)}
              onChange={(e) =>
                updateStyle(selected, { paddingX: `${e.target.value}px` })
              }
              min={0}
              max={100}
            />

            <Slider
              label="marginX"
              value={parseInt(styles.marginX) || 0}
              onChange={(e) =>
                updateStyle(selected, { marginX: `${e.target.value}px` })
              }
              step={1}
              min={0}
              unit="px"
              max={100}
            />

            <Slider
              label="marginY"
              value={parseInt(styles.marginY) || 0}
              onChange={(e) =>
                updateStyle(selected, { marginY: `${e.target.value}px` })
              }
              step={1}
              min={0}
              unit="px"
              max={100}
            />
          </>
        )}

        {target === "text" && (
          <Input
            label="Max Width"
            type="number"
            value={parseInt(styles?.maxWidth) || 0}
            onChange={(e) =>
              updateStyle(selected, { maxWidth: `${e.target.value}px` })
            }
            unit="px"
            min={0}
            max={2000}
          />
        )}
      </div>
    </div>
  );
}

export default Spacing;
