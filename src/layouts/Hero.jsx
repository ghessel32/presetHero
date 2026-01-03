import Navbar from "../components/Navbar";
import { usebgstyleStore } from "../store/bgstyleStore";
import DynamicBg from "../components/background/DynamicBg";
import { VideoComponent } from "../settings/background/VideoSettings";
import { ImageComponent } from "../settings/background/ImageSetting";
import { getAnimationProps } from "../utils/getAnimationProps";
import { ColorPattern } from "../settings/background/ColorPattern";
import { useTextStore } from "../store/textstyleStore.js";
import { usePreviewFont } from "../usePreviewFont";
import Centered from "./Centered.jsx";

export default function Hero({ editor = false }) {
  usePreviewFont();

  const fontConfig = useTextStore((state) => state.fontConfig);
  const bgstyles = usebgstyleStore((state) => state.bgstyles);
  const bgColor = usebgstyleStore((state) => state.bgstyles.bgColor);
  const backgroundType = usebgstyleStore(
    (state) => state.bgstyles.backgroundType
  );
  const anim = getAnimationProps(bgstyles.animation);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        fontFamily: fontConfig.family
          ? `'${fontConfig.family}', ${fontConfig.fallback}`
          : undefined,
      }}
      className={`
        relative overflow-hidden flex flex-col font-serif
        ${
          editor
            ? "h-[560px] rounded-xl border border-slate-300 shadow-sm bg-white"
            : "h-screen"
        }
      `}
    >
      {/* BACKGROUND (same for editor + preview) */}
      <div className={`absolute inset-0 ${anim.className} w-full h-full`} style={anim.style}>
        {backgroundType === "dynamic" && <DynamicBg />}
        {backgroundType === "video" && <VideoComponent />}
        {backgroundType === "image" && <ImageComponent />}
        {backgroundType === "pattern" && <ColorPattern />}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col h-full pointer-events-none">
        <div className="pointer-events-auto">
          <Navbar />
        </div>

        <Centered />
      </div>
    </div>
  );
}
