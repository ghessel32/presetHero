import LogoSettings from "./LogoSetttings";
import { useNavbarStore } from "../../store/navstyleStore";
import SubTabs from "./SubTabs";
import Appearance from "./Appearance";
import Typography from "./Typography";
import Spacing from "./Spacing";
import ButtonSettings from "../button/ButtonSettings.jsx";
import Animation from "./Animation.jsx";

function NavbarSettings() {
  const selectedSubComponent = useNavbarStore(
    (state) => state.selectedSubComponent
  );
  const setSelectedSubComponent = useNavbarStore(
    (state) => state.setSubSelected
  );

  return (
    <div className="">
      {/* Header */}
      <h1 className="m-4 text-lg font-bold">Navbar</h1>

      <div>
        {/* Sub component tabs */}
        <SubTabs
          value={selectedSubComponent}
          onChange={setSelectedSubComponent}
        />

        {/* Settings panel */}
        {selectedSubComponent === "layout" && (
          <>
            <Spacing />
            <Appearance target="layout" />
            <Animation />
          </>
        )}

        {selectedSubComponent === "logo" && (
          <>
            <LogoSettings />
          </>
        )}

        {selectedSubComponent === "list" && (
          <>
            <Typography />
            <Appearance target="list" />
          </>
        )}

        {selectedSubComponent === "button" && (
          <>
            <ButtonSettings />
          </>
        )}
      </div>
    </div>
  );
}

export default NavbarSettings;
