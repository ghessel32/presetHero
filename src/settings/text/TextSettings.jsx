import React from "react";
import Typography from "./Typography";
import Appearance from "./Appearance";
import Spacing from "./Spacing";
import { useHeroLayoutStore } from "../../store/heroLayoutstore.js";
import { useTextStore } from "../../store/textstyleStore";
import SubTextTabs from "./SubTextTabs";
import TextShadow from "./TextShadow";
import Animation from "./Animation.jsx";

function TextSettings() {
  const selectedText = useTextStore((s) => s.selectedText);
  const setSelectedText = useTextStore((s) => s.setSelectedText);
  const layoutType = useHeroLayoutStore((s) => s.styles.layoutType);
  return (
    <>
      <h1 className="mb-4 text-lg font-bold">Content</h1>
      <SubTextTabs value={selectedText} onChange={setSelectedText} />

      {selectedText !== "layout" ? (
        <>
          <Typography />
          <hr className="my-6 border-slate-200" />
          <Appearance target={"text"} />
          <hr className="my-6 border-slate-200" />
          <TextShadow />
          <hr className="my-6 border-slate-200" />
          <Spacing target="text" />
          <hr className="my-6 border-slate-200" />
        </>
      ) : (
        <>
          <Appearance target={"layout"} />
          <Spacing target="layout" />
          <Animation />
        </>
      )}
    </>
  );
}

export default TextSettings;
