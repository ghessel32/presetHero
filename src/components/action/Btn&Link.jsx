import React from "react";
import Button from "../Button";
import { useButtonStore } from "../../store/buttonstyleStore";
import { mapStyle } from "../../utils/styleMapper.js";
import { useActionSectionStore } from "../../store/actionSectionStore.js";

function BtnNLink({ layout }) {
  const heroIds = useButtonStore((s) => s.zones.hero);
  const setActiveButton = useButtonStore((s) => s.setActiveButton);
  const { link } = useActionSectionStore();
  const heroId = heroIds[0];
  return (
    <>
      <div>
        <Button buttonId={heroId} onClick={() => setActiveButton(heroId)} />
      </div>
      <div>
        <a href="#" className="underline" style={{ ...mapStyle(link) }}>
          {link.text || "Read More"}
        </a>
      </div>
    </>
  );
}

export default BtnNLink;
