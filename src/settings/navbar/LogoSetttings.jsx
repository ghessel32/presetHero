import { Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavbarStore } from "../../store/navstyleStore";
import Select from "../../utils/Selector.jsx";
import Input from "../../utils/Input.jsx";

function LogoSettings() {
  const logo = useNavbarStore((state) => state.logo);
  const updateStyle = useNavbarStore((state) => state.updateStyle);

  // Local state for width
  const [widthMode, setWidthMode] = useState(
    logo.width === "auto" ? "auto" : "custom"
  );
  const [customWidth, setCustomWidth] = useState(
    logo.width !== "auto" ? parseInt(logo.width) : ""
  );

  // Local state for height
  const [heightMode, setHeightMode] = useState(
    logo.height === "auto" ? "auto" : "custom"
  );
  const [customHeight, setCustomHeight] = useState(
    logo.height !== "auto" ? parseInt(logo.height) : ""
  );

  // Sync local state when logo dimensions change externally
  useEffect(() => {
    if (logo.width === "auto") {
      setWidthMode("auto");
    } else {
      setWidthMode("custom");
      setCustomWidth(parseInt(logo.width) || "");
    }
  }, [logo.width]);

  useEffect(() => {
    if (logo.height === "auto") {
      setHeightMode("auto");
    } else {
      setHeightMode("custom");
      setCustomHeight(parseInt(logo.height) || "");
    }
  }, [logo.height]);

  const handleUploadClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          updateStyle("logo", { src: event.target.result });
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleWidthModeChange = (e) => {
    const mode = e.target.value;
    setWidthMode(mode);
    
    if (mode === "auto") {
      updateStyle("logo", { width: "auto" });
    } else {
      updateStyle("logo", { width: customWidth ? `${customWidth}px` : "100px" });
    }
  };

  const handleCustomWidthChange = (e) => {
    const value = e.target.value;
    setCustomWidth(value);
    updateStyle("logo", { width: `${value}px` });
  };

  const handleHeightModeChange = (e) => {
    const mode = e.target.value;
    setHeightMode(mode);
    
    if (mode === "auto") {
      updateStyle("logo", { height: "auto" });
    } else {
      updateStyle("logo", { height: customHeight ? `${customHeight}px` : "32px" });
    }
  };

  const handleCustomHeightChange = (e) => {
    const value = e.target.value;
    setCustomHeight(value);
    updateStyle("logo", { height: `${value}px` });
  };

  return (
    <div className="mb-8">
      <h4 className="mb-6 text-base font-bold w-full bg-slate-500/10 px-3 py-1 text-gray-700 flex items-center gap-2">
        Logo
      </h4>

      <div className="p-6">
        <div className="flex flex-col items-center gap-6 p-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
          {/* Logo Display */}
          <div className="flex items-center justify-center">
            <img src={logo.src} alt="Company Logo" className="w-fit h-7" />
          </div>
        </div>
        {/* Upload Button */}
        <button
          onClick={handleUploadClick}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium my-2 mx-auto cursor-pointer"
        >
          <Upload size={20} />
          Upload
        </button>

        <div>
          <div className="m-2">
            <Select
              label="Width"
              value={widthMode}
              onChange={handleWidthModeChange}
              options={[
                { label: "Auto", value: "auto" },
                { label: "Custom", value: "custom" },
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
          </div>
          <div className="m-2">
            <Select
              label="Height"
              value={heightMode}
              onChange={handleHeightModeChange}
              options={[
                { label: "Auto", value: "auto" },
                { label: "Custom", value: "custom" },
              ]}
            />

            {heightMode === "custom" && (
              <Input
                value={customHeight}
                onChange={handleCustomHeightChange}
                unit="px"
                min={0}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoSettings;