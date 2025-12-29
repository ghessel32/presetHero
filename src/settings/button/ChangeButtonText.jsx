import { useActiveButton } from "./useActiveButton.js";

function ChangeButtonText() {
  const { button, updateText } = useActiveButton();
  if (!button) return null;

  return (
    <div className="mb-8">
      <h1 className="text-[11px] font-normal text-slate-500">Text</h1>
      <div className="p-5">
        <textarea
          name="Button"
          id="button"
          className="outline outline-blue-500 rounded-lg p-2 w-full"
          onChange={(e) => updateText(e.target.value)}
          value={button.text || ""}
        ></textarea>
      </div>
    </div>
  );
}

export default ChangeButtonText;
