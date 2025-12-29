import React from "react";
import { useActionSectionStore } from "../../store/actionSectionStore";
import { useButtonStore } from "../../store/buttonstyleStore";
import Button from "../Button.jsx";
import ButtonsGroup from "./ButtonsGroup.jsx";
import InputAction from "./InputAction.jsx";
import BtnNLink from "./Btn&Link.jsx";

function Index() {
  const { selectedAction, layout } = useActionSectionStore();
  const heroIds = useButtonStore((s) => s.zones.hero);
  const setActiveButton = useButtonStore((s) => s.setActiveButton);

  if (!heroIds || heroIds.length === 0) return null;

  return (
    <>
      {selectedAction === "singleButton" && (
        <Button
          buttonId={heroIds[0]}
          onClick={() => setActiveButton(heroIds[0])}
        />
      )}

      {selectedAction === "buttonGroup" && <ButtonsGroup layout={layout} />}

      {selectedAction === "inputButton" && <InputAction layout={layout} />}

      {selectedAction === "button&link" && <BtnNLink layout={layout} />}
    </>
  );
}
export default Index;
