import { usebgstyleStore } from "../../store/bgstyleStore";
import { BG_PATTERNS } from "../../registry/bgPatterns.jsx";

function DynamicBg() {
  const { animationPattern } = usebgstyleStore((state) => state.bgstyles);

  const PatternRenderer = BG_PATTERNS[animationPattern];

  if (!PatternRenderer) {
    console.warn(`Pattern "${animationPattern}" not found in BG_PATTERNS`);
    return null;
  }

  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      {PatternRenderer()}
    </div>
  );
}

export default DynamicBg;
