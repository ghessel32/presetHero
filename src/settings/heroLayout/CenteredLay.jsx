import React from "react";
import Select from "../../utils/Selector.jsx";
import { useHeroLayoutStore } from "../../store/heroLayoutstore.js";

function CenteredLay() {
  const { styles, updateStyle } = useHeroLayoutStore();

  return (
    <div className="p-6">
      <Select
        label="Vertical"
        value={styles.justifyContent}
        onChange={(e) =>
          updateStyle("styles", { justifyContent: e.target.value })
        }
        options={[
          { value: "start", label: "Top" },
          { value: "end", label: "Bottom" },
          { value: "center", label: "Center" },
        ]}
      />

      <Select
        label="Horizontal"
        value={styles.alignItems}
        onChange={(e) => updateStyle("styles", { alignItems: e.target.value })}
        options={[
          { value: "start", label: "Left" },
          { value: "end", label: "Right" },
          { value: "center", label: "Center" },
        ]}
      />
    </div>
  );
}

export default CenteredLay;
