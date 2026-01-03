import { useState } from "react";
import Canvas from "./Canvas";
import Inspector from "./Inspector";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Editor() {
  const [showInspector, setShowInspector] = useState(true);

  return (
    <div className="flex h-screen relative overflow-hidden">
      {/* Canvas */}
      <div className="flex-1">
        <Canvas />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowInspector((v) => !v)}
        className="absolute top-1/2 right-80 z-20 bg-white border border-slate-300 rounded-full p-1 shadow
                   -translate-y-1/2 hover:bg-slate-100 cursor-pointer"
        style={{ right: showInspector ? "19rem" : "0.5rem" }}
      >
        {showInspector ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Inspector */}
      {showInspector && <Inspector />}
    </div>
  );
}
