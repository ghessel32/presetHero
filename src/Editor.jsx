import Canvas from "./Canvas";
import Inspector from "./Inspector";

export default function Editor() {
  return (
    <div className="flex h-screen">
      <Canvas />
      <Inspector />
    </div>
  );
}
