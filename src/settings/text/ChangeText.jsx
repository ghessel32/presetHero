import React from "react";
import { useTextStore } from "../../store/textstyleStore";

function ChangeText() {
  const selected = useTextStore((s) => s.selectedText);
  if (selected === "layout") return null;
  const styles = useTextStore((s) => s[selected]);
  const updateStyle = useTextStore((s) => s.updateStyle);
  return (
    <div className="mb-8">
      <h1 className="mb-3 text-[11px] font-normal text-slate-500">Text</h1>
      <textarea
        name={selected}
        id={selected}
        className="outline outline-blue-500 rounded-lg p-2 w-full"
        onChange={(e) => updateStyle(selected, { text: e.target.value })}
        value={styles.text || ""}
      ></textarea>
    </div>
  );
}

export default ChangeText;
