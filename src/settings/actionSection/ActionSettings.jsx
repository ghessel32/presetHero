import React from "react";
import LayoutnSpacing from "./Layout&Spacing";
import SubActionTabs from "./SubActionTabs";
import { useActionSectionStore } from "../../store/actionSectionStore.js";
import ButtonSettings from "../button/ButtonSettings.jsx";
import Appearance from "./Appearance.jsx";
import Typography from "./Typography.jsx";
import Animation from "./Animation.jsx";

function ActionSettings() {
  const { selectedSubAction, setSelectedSubAction, selectedAction } =
    useActionSectionStore();

  return (
    <div>
      <h1 className="mb-4 text-lg font-bold">Action Settings</h1>
      <SubActionTabs
        value={selectedSubAction}
        onChange={setSelectedSubAction}
      />

      {selectedSubAction === "layout" && (
        <>
          <LayoutnSpacing />
          <Animation />
        </>
      )}
      {selectedSubAction === "button" && <ButtonSettings />}
      {selectedSubAction === "input" && selectedAction === "inputButton" && (
        <div>
          <Appearance target={"input"} />
          <LayoutnSpacing />
        </div>
      )}
      {selectedSubAction === "link" && selectedAction === "button&link" && (
        <div>
          <Typography />
          <Appearance target={"link"} />
        </div>
      )}
    </div>
  );
}

export default ActionSettings;
