import React from "react";

const TABS = [
  { key: "layout", label: "Layout" },
  { key: "heading", label: "Head.." },
  { key: "subHeading", label: "Subhead.." },
  { key: "paragraph", label: "Para.." },
];

function SubTextTabs({ value, onChange }) {
  return (
    <div className="mb-6 flex gap-1 rounded-xl bg-slate-100 p-1">
      {TABS.map((tab) => {
        const active = value === tab.key;

        return (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`
              flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition cursor-pointer
              ${
                active
                  ? "bg-white text-slate-900 shadow"
                  : "text-slate-500 hover:text-slate-800"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

export default SubTextTabs;
