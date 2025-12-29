import { useNavbarStore } from "../../store/navstyleStore";
import Select from "../../utils/Selector.jsx";
import ColorPicker from "../../utils/ColorPicker.jsx";

function ButtonShadow() {
  const { navbar, updateStyle } = useNavbarStore();
  if (!navbar) return null;

  return (
    <div className="mb-8">
      <div className="space-y-2">
        <label className="text-[11px] font-normal text-slate-500">
          Shadow Size
        </label>
        <Select
          value={navbar.shadow}
          onChange={(e) => updateStyle("navbar", { shadow: e.target.value })}
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
          value={navbar.shadowColor}
          opacity={navbar.shadowColor}
          onChange={(e) => updateStyle("navbar", { shadowColor: e.target.value })}
        />
      </div>
    </div>
  );
}

export default ButtonShadow;
