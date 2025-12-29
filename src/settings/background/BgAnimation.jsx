import React from "react";
import Slider from "../../utils/Slider";
import { usebgstyleStore } from "../../store/bgstyleStore.js";
import Select from "../../utils/Selector.jsx";

function BgAnimation() {
  const { bgstyles, updateBGStyle } = usebgstyleStore();
  return (
    <div>
      <h1 className="mb-2 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700">
        Animation
      </h1>

      <div className="p-6">
        <Select
          label="type"
          value={bgstyles.animation.type}
          onChange={(e) =>
            updateBGStyle("bgstyles", {
              animation: {
                ...bgstyles.animation,
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

        {bgstyles.animation.type !== "none" && (
          <>
            <Slider
              label="duration"
              value={bgstyles.animation.duration}
              min={0}
              max={2}
              step={0.1}
              unit=""
              onChange={(e) =>
                updateBGStyle("bgstyles", {
                  animation: {
                    ...bgstyles.animation,
                    duration: Number(e.target.value),
                  },
                })
              }
            />

            <Slider
              label="delay"
              value={bgstyles.animation.delay}
              min={0}
              max={2}
              step={0.1}
              unit=""
              onChange={(e) =>
                updateBGStyle("bgstyles", {
                  animation: {
                    ...bgstyles.animation,
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

export default BgAnimation;
