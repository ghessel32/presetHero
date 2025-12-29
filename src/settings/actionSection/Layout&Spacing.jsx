import React from "react";
import Select from "../../utils/Selector.jsx";
import { useActionSectionStore } from "../../store/actionSectionStore.js";
import Slider from "../../utils/Slider.jsx";

function LayoutnSpacing() {
  const {
    selectedAction,
    setSelectedAction,
    layout,
    updateStyle,
    selectedSubAction,
  } = useActionSectionStore();

  const actioncomponent = useActionSectionStore(
    (state) => state[selectedSubAction]
  );

  return (
    <div>
      <h1 className="mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Layout & Spacing
      </h1>

      <div className="p-6">
        {selectedSubAction === "layout" && (
          <>
            <Select
              label="Layout"
              value={selectedAction}
              onChange={(value) => setSelectedAction(value.target.value)}
              options={[
                { value: "singleButton", label: "Single Action" },
                { value: "buttonGroup", label: "Primary + Secondary" },
                { value: "button&link", label: "Primary + Link" },
                { value: "inputButton", label: "Input + Action" },
              ]}
            />

            <Select
              label="Direction"
              value={layout.direction}
              onChange={(value) =>
                updateStyle("layout", { direction: value.target.value })
              }
              options={[
                { value: "column", label: "Column" },
                { value: "row", label: "Row" },
              ]}
            />

            <Slider
              label="gap"
              unit="px"
              value={parseInt(actioncomponent.gap)}
              onChange={(e) =>
                updateStyle(selectedSubAction, { gap: `${e.target.value}px` })
              }
              min={0}
              max={100}
            />
          </>
        )}
        <Slider
          label="marginY"
          unit="px"
          value={parseInt(actioncomponent.marginY)}
          onChange={(e) =>
            updateStyle(selectedSubAction, { marginY: `${e.target.value}px` })
          }
          min={0}
          max={100}
        />
        <Slider
          label="marginX"
          unit="px"
          value={parseInt(actioncomponent.marginX)}
          onChange={(e) =>
            updateStyle(selectedSubAction, { marginX: `${e.target.value}px` })
          }
          min={0}
          max={100}
        />
        
        <Slider
          label="paddingY"
          unit="px"
          value={parseInt(actioncomponent.paddingY)}
          onChange={(e) =>
            updateStyle(selectedSubAction, { paddingY: `${e.target.value}px` })
          }
          min={0}
          max={100}
        />
        <Slider
          label="paddingX"
          unit="px"
          value={parseInt(actioncomponent.paddingX)}
          onChange={(e) =>
            updateStyle(selectedSubAction, { paddingX: `${e.target.value}px` })
          }
          min={0}
          max={100}
        />
      </div>
    </div>
  );
}

export default LayoutnSpacing;
