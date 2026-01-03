import Hero from "./layouts/Hero.jsx";

export default function Canvas() {
  return (
    <div className="h-full flex-1 bg-slate-100 p-6 flex justify-center items-start overflow-auto no-scrollbar">
      {/* HERO FRAME */}
      <div className="w-full max-w-[1200px]">
        <Hero editor />
      </div>
    </div>
  );
}
