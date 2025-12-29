import React from "react";
import { useButtonStore } from "../../store/buttonstyleStore";
import Button from "../Button.jsx";
import { mapStyle } from "../../utils/styleMapper.js";

function ButtonsGroup({ layout }) {
  const heroIds = useButtonStore((s) => s.zones.hero);
  const setActiveButton = useButtonStore((s) => s.setActiveButton);
  return (
    <>
      {heroIds.map((id) => (
        <Button
          key={id}
          buttonId={id}
          onClick={() => {
            setActiveButton(id);
          }}
        />
      ))}
    </>
  );
}

export default ButtonsGroup;
