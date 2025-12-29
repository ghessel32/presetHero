import { MdDelete } from "react-icons/md";
import { List } from "lucide-react";
import { useNavbarStore } from "../../store/navstyleStore";
function ListSettings() {
  const navList = useNavbarStore((state) => state.list.items);
  const updateStyle = useNavbarStore((state) => state.updateStyle);

  const addMoreInputs = () => {
    const updated = [...navList, "new Item"];
    updateStyle("list", { items: updated });
  };

  const changeItem = (index, val) => {
    const updated = [...navList];
    updated[index] = val;
    updateStyle("list", { items: updated });
  };

  const removeItem = (index) => {
    const updated = navList.filter((_, i) => i !== index);
    updateStyle("list", { items: updated });
  };

  return (
    <div className="mb-8">
      <h4 className="text-sm text-slate-500 mb-2 flex items-center gap-2">
        List
      </h4>
      <div>
        {navList.map((value, index) => (
          <div key={index} className="flex gap-2 items-center mb-2 text-xs">
            <input
              type="text"
              value={value}
              onChange={(e) => changeItem(index, e.target.value)}
              className="border p-1 rounded-lg"
            />
            <button
              onClick={() => removeItem(index)}
              className="text-red-500 font-bold bg-slate-200 p-1 rounded cursor-pointer"
            >
              <MdDelete className="text-red-700 w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={addMoreInputs}
        className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium my-2 cursor-pointer text-xs"
      >
        Add more
      </button>
    </div>
  );
}

export default ListSettings;
