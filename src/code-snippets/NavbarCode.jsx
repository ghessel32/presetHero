import { convertToTailwind } from "../utils/code-convert/ToTailwind";
import { useNavbarStore } from "../store/navstyleStore";
import { useButtonStore } from "../store/buttonstyleStore";
import ContentCode from "./ContentCode";
import { toAnimationCode } from "../utils/code-convert/ToAnimationCode";
import BackgroundCode from "./BackgroundCode";
import { usebgstyleStore } from "../store/bgstyleStore";
import { cleanCode } from "../utils/cleanCode";
import CodeSnippet from "./CodeSnippetUtil";

function NavbarCode() {
  const { navbar, logo, list } = useNavbarStore();
  const { buttons, zones } = useButtonStore();
  const { bgstyles } = usebgstyleStore();
  const backgroundType = bgstyles.backgroundType;
  const navButtonId = zones.nav?.[0];
  const navButton = buttons[navButtonId];
  const getNavButtonStyles = () =>
    navButton ? convertToTailwind(navButton.styles) : "";
  const navAnim = toAnimationCode(navbar.animation);
  const bganim = toAnimationCode(bgstyles.animation);

  const getBgCode = () => {
    if (backgroundType === "color") return "";

    return `
    <div ${bganim.style} className="absolute inset-0 z-0 pointer-events-none ${
      bganim.className
    }">
      ${BackgroundCode()}
    </div>
  `;
  };

  const indent = (code, level = 1) => {
    const pad = "  ".repeat(level);
    return code
      .split("\n")
      .map((line) => (line.trim() ? pad + line : line))
      .join("\n");
  };

  const rawCode = `
  import React, { useState } from "react";

  function Hero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <div className="h-screen relative overflow-hidden flex flex-col ${convertToTailwind(
       bgstyles
     )}">
   ${indent(getBgCode())}
   ${indent(`
   
{/* ============================== */}
{/* 🚀 NAVBAR SECTION  */}
{/* ============================== */}

   <nav ${
     navAnim.style
   } className="flex items-center gap-5 z-10 relative ${convertToTailwind(
     navbar
   )} ${navAnim.className}">
   ${indent(
     `<img src="/logo" alt="Logo" className="${convertToTailwind(logo)}" />`,
     2
   )}
   ${indent(
     `
   <div className="hidden md:block">  
   <ul className="flex justify-between gap-10 items-baseline-last ${convertToTailwind(
       list
     )}">
{/* 🔧 EDIT TEXT / LINKS BELOW */}
   ${indent(list.items.map((v) => `<li>${v}</li>`).join("\n"), 2)}
   </ul>
   </div>
   `,
     2
   )}
   <div className="hidden md:inline-block">
   <button className="cursor-pointer ${getNavButtonStyles()}">${
     navButton.text
   }</button>
   </div>

   
   <div className="md:hidden">

  {/* ☰ MENU TOGGLE BUTTON */}
    <button
     className="ml-auto p-2 cursor-pointer"
     onClick={(e) => {
     e.stopPropagation();
     setMobileMenuOpen(!mobileMenuOpen);
     }}
     aria-label="Toggle menu"
     >
     <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
         {mobileMenuOpen ? (
         <>
         <line x1="18" y1="6" x2="6" y2="18" />
         <line x1="6" y1="6" x2="18" y2="18" />
         </>
         ) : (
         <>
         <line x1="3" y1="12" x2="21" y2="12" />
         <line x1="3" y1="6" x2="21" y2="6" />
         <line x1="3" y1="18" x2="21" y2="18" />
         </>
         )}
     </svg>
   </button>

{/* 📱 MOBILE MENU LIST */}
   {mobileMenuOpen && (
   <div className="md:hidden absolute bg-white z-20 border border-gray-600 right-0 mx-5 px-3 rounded-lg">
   <ul
   className="flex flex-col p-4 gap-3 ${convertToTailwind(list)}"
   >
   ${indent(list.items.map((v) => `<li>${v}</li>`).join("\n"), 2)}
   </ul>
   </div>
   )}
   </div>
   </nav>

{/* ============================== */}
{/* 🔚 END NAVBAR */}
{/* ============================== */}

   `)}
   ${indent(ContentCode())}
   
   </div>
    );
  }
`;

  const code = cleanCode(rawCode);

  return <CodeSnippet title="Hero (JSX)" language="jsx" code={code} />;
}

export default NavbarCode;
