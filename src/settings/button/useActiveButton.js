import { useButtonStore } from "../../store/buttonstyleStore";

export function useActiveButton() {
  const buttons = useButtonStore((s) => s.buttons);
  const activeId = useButtonStore((s) => s.activeButtonId);
  const updateStyle = useButtonStore((s) => s.updateActiveButtonStyle);
  const updateText = useButtonStore((s) => s.updateActiveButtonText);

  const button = activeId ? buttons[activeId] : null;

  return {
    button,        // full button object
    styles: button?.styles,
    updateStyle,   // for spacing, appearance, typo
    updateText,    // for text change
  };
}
