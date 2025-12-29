import { useState } from "react";
import { useButtonStore } from "../store/buttonstyleStore";
import { useNavbarStore } from "../store/navstyleStore";
import { getAnimationProps } from "../utils/getAnimationProps";
import { mapStyle } from "../utils/styleMapper";
import Button from "./Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navId = useButtonStore((s) => s.zones.nav);
  const { navbar, list, selected, setSelected } = useNavbarStore();
  const navbarStyle = navbar;
  const logoStyle = useNavbarStore((state) => state.logo);
  const anim = getAnimationProps(navbarStyle.animation);

  const style = mapStyle({
    ...navbarStyle,
    width: navbarStyle.width,
  });

  // Helper function to convert hex to rgb
  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
          result[3],
          16
        )}`
      : "0 0 0";
  };

  // Map shadow values with custom color
  const getShadow = (size, color) => {
    const rgb = hexToRgb(color);
    const shadowMap = {
      none: "none",
      sm: `0 1px 2px 0 rgb(${rgb})`,
      md: `0 4px 6px -1px rgb(${rgb}), 0 2px 4px -2px rgb(${rgb})`,
      lg: `0 10px 15px -3px rgb(${rgb}), 0 4px 6px -4px rgb(${rgb})`,
      xl: `0 20px 25px -5px rgb(${rgb}), 0 8px 10px -6px rgb(${rgb})`,
      "2xl": `0 25px 50px -12px rgb(${rgb})`,
    };
    return shadowMap[size] || shadowMap.none;
  };

  return (
    <div className="w-full pointer-events-auto z-10">
      <div
        onClick={() => setSelected("navbar")}
        style={{
          ...style,
          justifyContent: navbarStyle.justifyContent,
          boxShadow: getShadow(navbarStyle.shadow, navbarStyle.shadowColor),
          ...anim.style,
        }}
        className={`flex items-center cursor-pointer gap-5 ${anim.className} ${
          selected == "navbar" ? "outline-1 outline-blue-600" : ""
        } hover:outline-1 hover:outline-blue-600`}
      >
        <img
          src={logoStyle.src}
          alt="Logo"
          style={{
            ...logoStyle,
            width: logoStyle.width,
            height: logoStyle.height,
          }}
        />

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul
            className="flex justify-between gap-10 items-baseline"
            style={mapStyle(list)}
          >
            {list.items.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <Button buttonId={navId} />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
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

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute bg-white z-20 border border-gray-600 right-0 mx-5 px-3 rounded-lg">
              <ul
                className="flex flex-col p-4"
                style={{
                  ...mapStyle(list),
                }}
              >
                {list.items.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
