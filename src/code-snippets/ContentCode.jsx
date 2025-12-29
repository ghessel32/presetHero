import React from "react";
import { useHeroLayoutStore } from "../store/heroLayoutstore";
import { useTextStore } from "../store/textstyleStore";
import { useActionSectionStore } from "../store/actionSectionStore";
import { convertToTailwind } from "../utils/code-convert/ToTailwind";
import CtaCode from "./CtaCode";
import { toAnimationCode } from "../utils/code-convert/ToAnimationCode";

function ContentCode() {
  const { styles } = useHeroLayoutStore();
  const { layout, heading, subHeading, paragraph } = useTextStore();
  const { layout: ctaLayout } = useActionSectionStore();
  const ConAnim = toAnimationCode(layout.animation);
  const ctaAnim = toAnimationCode(ctaLayout.animation);

  const styleClasses = convertToTailwind(styles);
  const layoutClasses = convertToTailwind(layout);
  const headClasses = convertToTailwind(heading);
  const subClasses = convertToTailwind(subHeading);
  const paraClasses = convertToTailwind(paragraph);
  const ctaLayoutClasses = convertToTailwind(ctaLayout);

  return `<div  className="flex flex-col h-full ${styleClasses}">
{/* ============================== */}
{/* 🧠 HERO CONTENT SECTION */}
{/* ============================== */}
{/* 🔧 EDIT TEXT CONTENT BELOW */}

      <div ${ConAnim.style} className="flex flex-col z-10 ${layoutClasses} ${
    ConAnim.className
  }">
       
        <h1 className="${headClasses}">${heading.text}</h1>
        <h2 className="${subClasses}">${subHeading.text}</h2>
        <p className="${paraClasses}">${paragraph.text}</p>
      </div>

 {/* ============================== */}
  {/* 🔚 END HERO CONTENT */}
  {/* ============================== */}


 {/* ============================== */}
  {/* 🚀 CTA SECTION */}
  {/* ============================== */}
  {/* 🔧 EDIT BUTTON / LINK HERE */}  
      <div ${ctaAnim.style} className="z-10 ${ctaLayoutClasses} ${
    ctaAnim.className
  }">

        ${CtaCode()}
      </div>
 {/* ============================== */}
  {/* 🔚 END CTA */}
  {/* ============================== */}      
    </div>`;
}

export default ContentCode;
