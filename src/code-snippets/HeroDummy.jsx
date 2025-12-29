import React from "react";

function HeroDummy() {
  return (
    //bg-Color remain
    <div className={`h-screen relative overflow-hidden flex flex-col`}>
      <nav className={`flex items-center cursor-pointer gap-5`}>
        <img src="/logo" alt="Logo" className={``} />
        <ul className={`flex justify-between gap-10 items-baseline-last`}></ul>
        <button className={`cursor-pointer`} onClick={""}></button>
      </nav>
    </div>
  );
}

export default HeroDummy;
