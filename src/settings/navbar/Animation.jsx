import React from "react";
import Slider from "../../utils/Slider";
import { useNavbarStore } from "../../store/navstyleStore.js";
import Select from "../../utils/Selector.jsx";

function Animation() {
  const { navbar, updateStyle } = useNavbarStore();
  return (
    <div>
      <h1 className="mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Animation
      </h1>

      <div className="p-6">
        <Select
          label="type"
          value={navbar.animation.type}
          onChange={(e) =>
            updateStyle("navbar", {
              animation: {
                ...navbar.animation,
                type: e.target.value,
              },
            })
          }
          options={[
            { value: "none", label: "None" },
            { value: "fade", label: "Fade" },
            { value: "slide-up", label: "Slide-up" },
            { value: "slide-down", label: "Slide-down" },
            { value: "scale", label: "Scale" },
          ]}
        />

        {navbar.animation.type !== "none" && (
          <>
            <Slider
              label="duration"
              value={navbar.animation.duration}
              min={0}
              max={2}
              step={0.1}
              unit=""
              onChange={(e) =>
                updateStyle("navbar", {
                  animation: {
                    ...navbar.animation,
                    duration: Number(e.target.value),
                  },
                })
              }
            />

            <Slider
              label="delay"
              value={navbar.animation.delay}
              min={0}
              max={2}
              step={0.1}
              unit=""
              onChange={(e) =>
                updateStyle("navbar", {
                  animation: {
                    ...navbar.animation,
                    delay: Number(e.target.value),
                  },
                })
              }
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Animation;
