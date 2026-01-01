import Canvas from "./Canvas";
import Inspector from "./Inspector";

export default function Editor() {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <Canvas />
      <Inspector />
    </div>
  );
}
