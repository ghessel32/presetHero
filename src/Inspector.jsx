import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, Code, Eye } from "lucide-react";
import { useNavbarStore } from "./store/navstyleStore";
import NavbarSettings from "./settings/navbar/NavbarSettings";
import BgSettings from "./settings/background/BgSettings";
import TextSettings from "./settings/text/TextSettings";
import { inspectorRef } from "./refs";
import ButtonSettings from "./settings/button/ButtonSettings";
import { useButtonStore } from "./store/buttonstyleStore";
import HeroLayout from "./settings/heroLayout/HeroLayout";
import ActionSettings from "./settings/actionSection/ActionSettings";

export default function Inspector() {
  const navigateTo = useNavigate();
  const selected = useNavbarStore((state) => state.selected);
  const setSelected = useNavbarStore((state) => state.setSelected);
  const setActiveButton = useButtonStore((state) => state.setActiveButton);

  if (!selected) {
    return (
      <div
        ref={inspectorRef}
        className="w-80 bg-linear-to-br from-slate-50 to-slate-100 p-6 border-l border-slate-200"
      >
        <div className="flex items-center justify-center h-64 text-center">
          <div>
            <div className="grid">
              <button
                onClick={() => {
                  setSelected("navbar");
                  setActiveButton("btn-2");
                }}
                className="bg-cyan-600 border border-slate-200 p-2 m-2 rounded-lg cursor-pointer text-amber-50 hover:border-black hover:bg-white hover:text-gray-800"
              >
                Navbar
              </button>
              <button
                onClick={() => setSelected("background")}
                className="bg-cyan-600 border border-slate-200 p-2 m-2 rounded-lg cursor-pointer text-amber-50 hover:border-black hover:bg-white hover:text-gray-800"
              >
                Background
              </button>

              <button
                onClick={() => setSelected("heroLayout")}
                className="bg-cyan-600 border border-slate-200 p-2 m-2 rounded-lg cursor-pointer text-amber-50 hover:border-black hover:bg-white hover:text-gray-800"
              >
                Hero Layout
              </button>

              <button
                onClick={() => setSelected("text")}
                className="bg-cyan-600 border border-slate-200 p-2 m-2 rounded-lg cursor-pointer text-amber-50 hover:border-black hover:bg-white hover:text-gray-800"
              >
                content
              </button>

              <button
                onClick={() => {
                  setSelected("action");
                  setActiveButton("btn-1");
                }}
                className="bg-cyan-600 border border-slate-200 p-2 m-2 rounded-lg cursor-pointer text-amber-50 hover:border-black hover:bg-white hover:text-gray-800"
              >
                Action
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={inspectorRef}
      className="w-80 bg-linear-to-br from-slate-50 to-slate-100 border-l border-slate-200 overflow-y-auto"
    >
      <div className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-slate-200 z-10 p-5">
        <h3 className="text-xl font-bold text-slate-800 capitalize flex items-center gap-2 mb-3">
          <ChevronLeft
            onClick={() => setSelected("")}
            className="w-6 h-6 bg-slate-100 rounded cursor-pointer"
          />
          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
          {selected} Settings
        </h3>

        <div className="flex w-full justify-end gap-1">
          <button
            onClick={() => navigateTo("/code")}
            className="bg-cyan-600 border border-slate-200 p-1 rounded-lg cursor-pointe hover:border-black hover:bg-white cursor-pointer hover:text-gray-600 text-white "
          >
            <Code className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigateTo("/preview")}
            className="bg-cyan-600 border border-slate-200 p-1 rounded-lg cursor-pointe hover:border-black hover:bg-white cursor-pointer hover:text-gray-600 text-white "
          >
            <Eye className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="">
        {selected === "navbar" && (
          <>
            <NavbarSettings />
          </>
        )}

        {selected === "background" && (
          <>
            <BgSettings />
          </>
        )}

        {selected === "heroLayout" && (
          <>
            <HeroLayout />
          </>
        )}

        {selected === "text" && (
          <>
            <TextSettings />
          </>
        )}

        {selected === "action" && (
          <>
            <ActionSettings />
          </>
        )}
      </div>
    </div>
  );
}
