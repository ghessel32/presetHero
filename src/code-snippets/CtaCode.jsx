import React from "react";
import { convertToTailwind } from "../utils/code-convert/ToTailwind";
import { useActionSectionStore } from "../store/actionSectionStore";
import { useButtonStore } from "../store/buttonstyleStore";

function CtaCode() {
  const { input, link, selectedAction} = useActionSectionStore();
  const { buttons, zones } = useButtonStore();
  const heroButtonIds = zones.hero || [];

  const getButtonStyles = (buttonId) => {
    const button = buttons[buttonId];
    return button ? convertToTailwind(button.styles) : "";
  };

  const getButtonText = (buttonId) => {
    const button = buttons[buttonId];
    return button?.text || "Button";
  };

  const inputClasses = convertToTailwind(input);
  const linkClasses = convertToTailwind(link);

  if (selectedAction === "singleButton") {
    const heroButtonId = heroButtonIds[0];
    return `<button className="cursor-pointer ${getButtonStyles(
      heroButtonId
    )}" onClick="">
  ${getButtonText(heroButtonId)}
</button>`;
  } else if (selectedAction === "buttonGroup") {
   
    const buttonsCode = heroButtonIds
      .map((buttonId) => {
        return `<button className="cursor-pointer ${getButtonStyles(
          buttonId
        )}" onClick="">
  ${getButtonText(buttonId)}
</button>`;
      })
      .join("\n");

    return buttonsCode;
  } else if (selectedAction === "inputButton") {
    const heroButtonId = heroButtonIds[0];
    return `<input
  placeholder="Enter your email"
  type="email"
  className="${inputClasses}"
/>
<button className="cursor-pointer ${getButtonStyles(heroButtonId)}" onClick="">
  ${getButtonText(heroButtonId)}
</button>`;
  } else if (selectedAction === "button&link") {
    const heroButtonId = heroButtonIds[0];
    return `<button className="cursor-pointer ${getButtonStyles(
      heroButtonId
    )}" onClick="">
  ${getButtonText(heroButtonId)}
</button>

<a href="#" className="underline ${linkClasses}">
  ${link.text || "Read More"}
</a>`;
  }
}

export default CtaCode;
