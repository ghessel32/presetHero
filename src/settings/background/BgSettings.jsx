import ColorPicker from "../../utils/ColorPicker";
import { usebgstyleStore } from "../../store/bgstyleStore";
import Select from "../../utils/Selector";
import { ImageSettings } from "./ImageSetting";
import { VideoSettings } from "./VideoSettings";
import { ColorPatternSettings } from "./ColorPattern";
import BgAnimation from "./BgAnimation";

function BgSettings() {
  const { bgstyles, updateBGStyle } = usebgstyleStore();

  const { bgColor, animationPattern, backgroundType } = bgstyles;

  return (
    <div>
      <h1 className="mb-4 text-lg font-bold">Background</h1>

      <div className="p-6">
        {/* Background Type */}
        <Select
          label="Background Type"
          value={backgroundType}
          onChange={(e) =>
            updateBGStyle("bgstyles", {
              backgroundType: e.target.value,
              animation: {
                ...bgstyles.animation,
                type: "none",
              },
            })
          }
          options={[
            { value: "color", label: "Color" },
            { value: "image", label: "Image" },
            { value: "video", label: "Video" },
            { value: "dynamic", label: "Dynamic" },
            { value: "pattern", label: "Pattern" },
          ]}
        />

        {/* Solid Color */}
        {backgroundType === "color" && (
          <ColorPicker
            label="Background"
            value={bgColor}
            onChange={(e) =>
              updateBGStyle("bgstyles", { bgColor: e.target.value })
            }
          />
        )}

        {/* Dynamic Background */}
        {backgroundType === "dynamic" && (
          <>
            <Select
              label="Dynamic Background"
              value={animationPattern}
              onChange={(e) =>
                updateBGStyle("bgstyles", {
                  animationPattern: e.target.value,
                })
              }
              options={[
                { value: "FloatingLines", label: "Floating Lines" },
                { value: "Particles", label: "Particles" },
                { value: "DarkVeil", label: "Dark Veil" },
                { value: "Aurora", label: "Aurora" },
                { value: "GradientBlinds", label: "Gradient Blinds" },
              ]}
            />
            <ColorPicker
              label="Background"
              value={bgColor}
              onChange={(e) =>
                updateBGStyle("bgstyles", { bgColor: e.target.value })
              }
            />
          </>
        )}

        {/* Image */}
        {backgroundType === "image" && <ImageSettings />}

        {/* Video */}
        {backgroundType === "video" && <VideoSettings />}

        {/* Pattern */}
        {backgroundType === "pattern" && <ColorPatternSettings />}
      </div>

      {backgroundType === "image" && <BgAnimation />}
    </div>
  );
}

export default BgSettings;
