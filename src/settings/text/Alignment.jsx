import React from "react";
import Input from "../../utils/Input.jsx";
import { useTextStore } from "../../store/textstyleStore.js";

function Alignment() {
  const selected = useTextStore((s) => s.selectedText);
  const styles = useTextStore((s) => s[selected]);
  const updateStyle = useTextStore((s) => s.updateStyle);

  return (
    <div>
     
    </div>
  );
}

export default Alignment;
