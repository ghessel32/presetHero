import { useActiveButton } from "./useActiveButton.js";
import Select from "../../utils/Selector.jsx";
import ColorPicker from "../../utils/ColorPicker.jsx";
function ButtonShadow() {
  const { button, styles, updateStyle } = useActiveButton();
  if (!button) return null;

  return (
    <div className="mb-8">
      <div className="space-y-2">
        <label className="text-[11px] font-normal text-slate-500">
          Shadow Size
        </label>

        <Select
          value={styles.shadow || "none"}
          onChange={(e) => updateStyle({ shadow: e.target.value })}
          options={[
            { value: "none", label: "None" },
            { value: "sm", label: "Small" },
            { value: "md", label: "Medium" },
            { value: "lg", label: "Large" },
            { value: "xl", label: "Extra Large" },
            { value: "2xl", label: "2X Large" },
          ]}
        />

        <ColorPicker
          label="Shadow Color"
          value={styles.shadowColor}
          opacity={styles.shadowColor}
          onChange={(e) => updateStyle({ shadowColor: e.target.value })}
        />
      </div>
    </div>
  );
}

export default ButtonShadow;
