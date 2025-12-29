import React from "react";
import Shadow from "./Shadow.jsx";
import { useNavbarStore } from "../../store/navstyleStore";
import ColorPicker from "../../utils/ColorPicker.jsx";
import Slider from "../../utils/Slider.jsx";
import Select from "../../utils/Selector.jsx";

function Appearance({ target }) {
  const { navbar, list, updateStyle } = useNavbarStore();

  return (
    <div className="mb-8">
      <h1 className="mb-6 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Appearance
      </h1>

      {/* LAYOUT ONLY */}
      <div className="p-6">
        {target === "layout" && (
          <>
            

            <ColorPicker
              label="Background Color"
              value={navbar.bgColor}
              opacity={navbar.bgOpacity}
              showOpacity
              onChange={(e) =>
                updateStyle("navbar", { bgColor: e.target.value })
              }
              onOpacityChange={(e) =>
                updateStyle("navbar", { bgOpacity: parseFloat(e.target.value) })
              }
            />

            <Shadow />

            <Slider
              label="Border Radius"
              value={parseInt(navbar.borderRadius) || 0}
              onChange={(e) =>
                updateStyle("navbar", {
                  borderRadius: e.target.value + "px",
                })
              }
              min={0}
              max={50}
            />

            <ColorPicker
              label="Border Color"
              value={navbar.borderColor}
              onChange={(e) =>
                updateStyle("navbar", { borderColor: e.target.value })
              }
            />

            <Slider
              label="Border Width"
              value={parseInt(navbar.borderWidth) || 0}
              onChange={(e) =>
                updateStyle("navbar", {
                  borderWidth: e.target.value + "px",
                })
              }
              min={0}
              max={4}
            />
          </>
        )}

        {/* LIST ONLY */}
        {target === "list" && (
          <ColorPicker
            label="Text Color"
            value={list.color}
            onChange={(e) => updateStyle("list", { color: e.target.value })}
          />
        )}
      </div>
    </div>
  );
}

export default Appearance;
