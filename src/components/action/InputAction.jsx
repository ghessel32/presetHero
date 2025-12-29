// components/action/InputAction.jsx
import React from "react";
import { useButtonStore } from "../../store/buttonstyleStore.js";
import Button from "../Button.jsx";
import Input from "../Input.jsx";
import { mapStyle } from "../../utils/styleMapper.js";

function InputAction({ layout }) {
  const heroIds = useButtonStore((s) => s.zones.hero);
  const setActiveButton = useButtonStore((s) => s.setActiveButton);

  const submitButtonId = heroIds[0]; // primary button

  return (
    <>
      <Input placeholder="Enter your email" />

      <Button
        buttonId={submitButtonId}
        onClick={() => setActiveButton(submitButtonId)}
      />
    </>
  );
}

export default InputAction;
