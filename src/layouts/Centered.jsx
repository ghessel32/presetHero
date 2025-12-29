import React from "react";
import Content from "../components/Content.jsx";
import Index from "../components/action/Index.jsx";
import { useHeroLayoutStore } from "../store/heroLayoutstore.js";
import { useActionSectionStore } from "../store/actionSectionStore.js";
import { getAnimationProps } from "../utils/getAnimationProps.js";
import { useNavbarStore } from "../store/navstyleStore.js";
import { mapStyle } from "../utils/styleMapper.js";

function Centered() {
  const { styles } = useHeroLayoutStore();
  const { layout } = useActionSectionStore();
  const anim = getAnimationProps(layout.animation);
  const { selected, setSelected } = useNavbarStore();
  return (
    <div
      style={{
        justifyContent: styles.justifyContent,
        alignItems: styles.alignItems,
      }}
      className={`flex flex-col pointer-events-none h-full z-10 m-3 ${
        selected == "heroLayout" ? "outline-1 outline-blue-600" : ""
      } `}
    >
      <div className="pointer-events-auto">
        <Content />
      </div>

      <div
        onClick={() => setSelected("action")}
        style={{ ...mapStyle(layout), ...anim.style }}
        className={`${anim.className} ${
          selected == "action" ? "outline-1 outline-blue-600" : ""
        } hover:outline-1 hover:outline-blue-600 pointer-events-auto cursor-pointer flex items-center p-2`}
      >
        <Index />
      </div>
    </div>
  );
}

export default Centered;
