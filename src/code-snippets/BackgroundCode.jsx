import React from "react";
import { usebgstyleStore } from "../store/bgstyleStore";
import DynamicBgCode from "./DynamicBgCode";

function BackgroundCode() {
  const { bgstyles, bgImage } = usebgstyleStore();
  const { backgroundType } = bgstyles;
  const { type, position, color, transparentAt, opacity, size, colorStart } =
    usebgstyleStore((s) => s.bgColorPatterns);

  const getGradientStyle = () => {
    if (type === "radial-center") {
      return `radial-gradient(circle at ${position}, ${color}, transparent ${transparentAt}%)`;
    } else if (type === "radial-edge") {
      const positionMap = {
        bottom: "50% 0%",
        top: "50% 100%",
        left: "100% 50%",
        right: "0% 50%",
        center: "50% 50%",
      };
      return `radial-gradient(${size}% ${size}% at ${positionMap[position]}, ${colorStart} 40%, ${color} 100%)`;
    }
    return `radial-gradient(circle at ${position}, ${color}, transparent ${transparentAt}%)`;
  };

  if (backgroundType == "image") {
    return `
{/* ============================== */}
{/* 🖼️ BACKGROUND : IMAGE */}
{/* ============================== */}
{/* 🔧 Replace image URL or tweak size/position */}
{/* ⚠️ Keep this wrapper absolute for layout safety */}

    <div
        className="w-full h-full"
        style={{
          backgroundImage: 'url(/bgImage)',
          backgroundSize: ${bgImage.size},
          backgroundPosition: '${bgImage.positionX}% ${bgImage.positionY}%'
          backgroundRepeat: "no-repeat",
        }}
      />
      ${
        bgImage.overlayColor && bgImage.overlayOpacity > 0
          ? `<div
        className="w-full h-full z-1"
        style={{
          backgroundColor: '${bgImage.overlayColor}',
          opacity: ${bgImage.overlayOpacity / 100},
        }}
      />`
          : ""
      }

{/* ============================== */}
{/* 🔚 END IMAGE BACKGROUND */}
{/* ============================== */}  
    `;
  }
  if (backgroundType == "video") {
    return `
{/* ============================== */}
{/* 🎥 BACKGROUND : VIDEO */}
{/* ============================== */}
{/* 🔧 Replace video source only */}
{/* ⚠️ AutoPlay + muted required for mobile */}    
    <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src='/bgVideo' type="video/mp4" />
      </video>

{/* ============================== */}
{/* 🔚 END VIDEO BACKGROUND */}
{/* ============================== */}      
    `;
  }
  if (backgroundType == "dynamic") {
    return `
{/* ============================== */}
{/* 🌀 BACKGROUND : DYNAMIC (ADVANCED) */}
{/* ============================== */}

    <div className="pointer-events-auto w-full h-full">
     ${DynamicBgCode()}
    </div>

{/* ============================== */}
{/* 🔚 END DYNAMIC BACKGROUND */}
{/* ============================== */}    
    `;
  }
  if (backgroundType == "pattern") {
    return `
{/* ============================== */}
{/* 🎨 BACKGROUND : PATTERN / GRADIENT */}
{/* ============================== */}
{/* 🔧 Adjust colors or opacity safely */}

    <div className="w-full h-full" style={{
             background: "${getGradientStyle()}",
              opacity: ${opacity},
              }}>
            </div>
            
{/* ============================== */}
{/* 🔚 END PATTERN BACKGROUND */}
{/* ============================== */}            
            `;
  }
}

export default BackgroundCode;
