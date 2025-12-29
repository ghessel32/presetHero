import { usebgstyleStore } from "../store/bgstyleStore";
import { dynamicBgCodeMap } from "../utils/code-convert/dynamicBgCodeMap";

function DynamicBgCode() {
  const pattern = usebgstyleStore((s) => s.bgstyles.animationPattern);

  return dynamicBgCodeMap[pattern] || "";
}
 export default DynamicBgCode