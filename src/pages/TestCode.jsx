import React, { useState } from "react";

function TestCode() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="h-screen relative overflow-hidden flex flex-col bg-black">
      <div className="absolute inset-0 z-0 pointer-events-none ">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(131% 131% at 50% 0%, #000000 40%, #8ffff8 100%)",
            opacity: 0.8,
          }}
        ></div>
      </div>

      <nav className="flex items-center gap-5 z-10 relative py-4 px-6 mx-2.5 my-2.5 justify-between ">
        <img src="/logo" alt="Logo" className="h-[50px]" />

        <div className="hidden md:block">
          <ul className="flex justify-between gap-10 items-baseline-last text-black text-[11px] sm:text-[11px] md:text-[15px]">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="hidden md:inline-block">
          <button className="cursor-pointer bg-white text-black py-2.5 px-5 rounded-[50px] border-[#ADADAD] border text-[11px] sm:text-[12px] md:text-[16px] font-semibold">
            Started
          </button>
        </div>
        <div className="md:hidden">
          <button
            className="ml-auto p-2 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
          {mobileMenuOpen && (
            <div className="md:hidden absolute bg-white z-20 border border-gray-600 right-0 mx-5 px-3 rounded-lg">
              <ul className="flex flex-col p-4 gap-3 text-black text-[11px] sm:text-[11px] md:text-[15px]">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="flex flex-col h-full justify-center items-center">
        <div className="flex flex-col z-10 py-5 px-5 my-2.5 text-center ">
          <h1 className="text-white text-[39px] sm:text-[42px] md:text-[56px] font-black leading-[1.2]">
            Build Stunning
          </h1>
          <h2 className="text-white text-[21px] sm:text-[23px] md:text-[30px] leading-[1.2]">
            Landing Pages
          </h2>
          <p className="text-white mx-auto text-[14px] sm:text-[15px] md:text-[20px] leading-[1.2] max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="z-10 py-2.5 px-2.5 my-2.5 ">
          <button
            className="cursor-pointer bg-white text-black py-2.5 px-5 rounded-[50px] border-[#ADADAD] border text-[11px] sm:text-[12px] md:text-[16px] font-semibold"
            onClick=""
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestCode