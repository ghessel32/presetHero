import React, { useState } from "react";

function TestCode() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen relative flex flex-col overflow-hidden bg-white">
        <div className="absolute inset-0 h-full">
          <img
            src="/bgImage2.jpg"
            alt=""
            className="h-[600px] w-full object-cover"
          />
        </div>

        {/* ============================== */}
        {/* 🚀 NAVBAR SECTION  */}
        {/* ============================== */}

        <nav className="flex items-center gap-5 z-10 relative py-4 px-6 mx-2.5 my-2.5 justify-between ">
          <img src="/logo" alt="Logo" className="h-[50px]" />

          <div className="hidden md:block">
            <ul className="flex justify-between gap-10 items-baseline-last text-black text-[11px] sm:text-[11px] md:text-[15px]">
              {/* 🔧 EDIT TEXT / LINKS BELOW */}
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
            {/* ☰ MENU TOGGLE BUTTON */}
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

            {/* 📱 MOBILE MENU LIST */}
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

        {/* ============================== */}
        {/* 🔚 END NAVBAR */}
        {/* ============================== */}

        <div className="flex flex-col h-full justify-center items-center">
          {/* ============================== */}
          {/* 🧠 HERO CONTENT SECTION */}
          {/* ============================== */}
          {/* 🔧 EDIT TEXT CONTENT BELOW */}

          <div className="flex flex-col z-10 py-5 px-5 my-2.5 text-center ">
            <h1 className="text-black text-[35px] sm:text-[38px] md:text-[50px] font-black leading-[1.2] max-w-[600px]">
              Build Perfect Hero Sections in Seconds
            </h1>
            <h2 className="text-black text-[14px] sm:text-[15px] md:text-[20px] leading-[1.9]">
              The visual hero builder that developers actually want to use
            </h2>
            <p className="text-black mx-auto text-[9px] sm:text-[10px] md:text-[13px] font-semibold leading-[1.4] max-w-[600px]">
              Stop wrestling with code and AI prompts. Configure your hero
              section with simple settings, get production-ready code instantly,
              and ship faster. No design skills needed.
            </p>
          </div>

          {/* ============================== */}
          {/* 🔚 END HERO CONTENT */}
          {/* ============================== */}

          {/* ============================== */}
          {/* 🚀 CTA SECTION */}
          {/* ============================== */}
          {/* 🔧 EDIT BUTTON / LINK HERE */}
          <div className="z-10 py-2.5 px-2.5 my-2.5 ">
            <button
              className="cursor-pointer bg-white text-black py-2.5 px-5 rounded-[50px] border-[#ADADAD] border text-[11px] sm:text-[12px] md:text-[16px] font-semibold"
              onClick=""
            >
              Get Started
            </button>
          </div>
          {/* ============================== */}
          {/* 🔚 END CTA */}
          {/* ============================== */}
        </div>
      </div>

      <div>
        <p className="text-xl m-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem voluptates inventore, reiciendis at delectus labore ad
          deleniti nobis molestiae harum!
        </p>
      </div>
    </>
  );
}

export default TestCode;
