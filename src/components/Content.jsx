import { useRef, useEffect } from "react";
import { useTextStore } from "../store/textstyleStore";
import { useNavbarStore } from "../store/navstyleStore";
import { mapStyle as mapTextStyle } from "../utils/styleMapper";
import { inspectorRef } from "../refs";
import { getAnimationProps } from "../utils/getAnimationProps";

function Content() {
  const heading = useTextStore((s) => s.heading);
  const subHeading = useTextStore((s) => s.subHeading);
  const paragraph = useTextStore((s) => s.paragraph);
  const layout = useTextStore((s) => s.layout);
  const anim = getAnimationProps(layout.animation);
  const { selected, setSelected } = useNavbarStore();

  const selectedText = useTextStore((s) => s.selectedText);
  const setSelectedText = useTextStore((s) => s.setSelectedText);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      const clickedInsideContent =
        wrapperRef.current && wrapperRef.current.contains(e.target);

      const clickedInsideInspector =
        inspectorRef.current && inspectorRef.current.contains(e.target);

      if (!clickedInsideContent && !clickedInsideInspector) {
        setSelectedText("layout");
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [setSelectedText]);

  const selectorClass = (key) =>
    selectedText === key
      ? "ring-1 ring-blue-600 ring-dashed ring-inset rounded-md"
      : "";

  return (
    <div
      ref={wrapperRef}
      style={{
        ...mapTextStyle(layout),
        ...anim.style,
      }}
      className={`flex flex-col ${anim.className} ${
        selected == "text" ? "outline-1 outline-blue-600" : ""
      } hover:outline-1 hover:outline-blue-600`}
      onClick={() => setSelected("text")}
    >
      <div
        onClick={() => setSelectedText("heading")}
        className={selectorClass("heading")}
      >
        <h1
          className="inline-block "
          style={{
            ...mapTextStyle(heading),
          }}
        >
          {heading.text}
        </h1>
      </div>

      <div
        onClick={() => setSelectedText("subHeading")}
        className={selectorClass("subHeading")}
      >
        <h2 className="inline-block" style={mapTextStyle(subHeading)}>
          {subHeading.text}
        </h2>
      </div>

      <div
        onClick={() => setSelectedText("paragraph")}
        className={`${selectorClass("paragraph")}`}
      >
        <p className="inline-block" style={{ ...mapTextStyle(paragraph) }}>
          {paragraph.text}
        </p>
      </div>
    </div>
  );
}

export default Content;
