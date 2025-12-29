import { usebgstyleStore } from "../../store/bgstyleStore";
import { Upload } from "lucide-react";
import uploadFile from "../../utils/Upload.jsx";
import Slider from "../../utils/Slider.jsx";
import ColorPicker from "../../utils/ColorPicker.jsx";
import Select from "../../utils/Selector.jsx";

const handleBGUpload = () => {
  const { updateBGStyle } = usebgstyleStore.getState();

  uploadFile({
    accept: "image+video",

    onImage: (src) => {
      updateBGStyle("bgImage", { src });
    },

    onVideo: (videoURL) => {
      updateBGStyle("bgstyles", {
        bgVideo: videoURL,
      });
    },
  });
};

function ImageComponent() {
  const bgImage = usebgstyleStore((s) => s.bgImage);

  if (!bgImage?.src) return null;

  return (
    <>
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: bgImage.size,
          backgroundPosition: `${bgImage.positionX}% ${bgImage.positionY}%`,
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* OPTIONAL OVERLAY */}
      {bgImage.overlayColor && bgImage.overlayOpacity > 0 && (
        <div
          className="absolute inset-0 z-1 pointer-events-none"
          style={{
            backgroundColor: bgImage.overlayColor,
            opacity: bgImage.overlayOpacity / 100,
          }}
        />
      )}
    </>
  );
}

function ImageSettings() {
  const { bgImage, updateBGStyle } = usebgstyleStore();
  const bgColor = usebgstyleStore().bgstyles.bgColor;

  return (
    <div>
      <div className="flex flex-col items-center gap-6 p-6 border-2 border-dashed rounded-lg bg-gray-50">
        <img
          src={bgImage.src}
          alt="Preview"
          className="max-w-full max-h-40 object-contain"
        />
      </div>

      <button
        onClick={handleBGUpload}
        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg my-3 mx-auto"
      >
        <Upload size={20} />
        Upload
      </button>

      <div className="mt-10 space-y-4">
        <Select
          label="Background Size"
          value={bgImage.size}
          onChange={(e) => updateBGStyle("bgImage", { size: e.target.value })}
          options={[
            { value: "cover", label: "Cover" },
            { value: "contain", label: "Contain" },
            { value: "auto", label: "Auto" },
            { value: "100% 100%", label: "Stretch" },
          ]}
        />

        <Slider
          label="Position X"
          value={parseInt(bgImage.positionX) || 0}
          onChange={(e) =>
            updateBGStyle("bgImage", { positionX: e.target.value })
          }
          min={0}
          unit="%"
          max={100}
        />

        <Slider
          label="Position Y"
          value={parseInt(bgImage.positionY) || 0}
          onChange={(e) =>
            updateBGStyle("bgImage", { positionY: e.target.value })
          }
          min={0}
          unit="%"
          max={100}
        />

        <ColorPicker
          label="Overlay Color"
          value={bgImage.overlayColor || "#000000"}
          onChange={(e) =>
            updateBGStyle("bgImage", { overlayColor: e.target.value })
          }
        />

        <Slider
          label="Overlay Opacity"
          value={parseInt(bgImage.overlayOpacity) || 0}
          onChange={(e) =>
            updateBGStyle("bgImage", { overlayOpacity: e.target.value })
          }
          min={0}
          unit=""
          max={100}
        />
      </div>
    </div>
  );
}

export { ImageComponent, ImageSettings };
