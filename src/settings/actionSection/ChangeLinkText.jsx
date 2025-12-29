import React from "react";
import { useActionSectionStore } from "../../store/actionSectionStore";
function ChangeLinkText() {
  const { link, updateStyle } = useActionSectionStore();
  return (
    <div>
      <textarea
        name="linkText"
        id="linkText"
        className="outline outline-blue-500 rounded-lg p-2 w-full"
        onChange={(e) => updateStyle("link", { text: e.target.value })}
        value={link.text || ""}
      ></textarea>
    </div>
  );
}

export default ChangeLinkText;
