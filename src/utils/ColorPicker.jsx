const ColorPicker = ({
  label,
  value,
  opacity,
  onChange,
  onOpacityChange,
  showOpacity = false,
}) => (
  <div className="mb-5">
    <label className="block text-[11px] font-normal text-slate-500 mb-3">
      {label}
    </label>
    <div className="flex gap-3 items-center">
      <div className="relative w-12 h-12 shrink-0">
        <input
          type="color"
          value={value}
          onChange={onChange}
          className="absolute inset-0 w-full h-full rounded-full cursor-pointer border-4 border-white shadow-lg hover:scale-110 transition-transform"
          style={{
            outline: "2px solid #e2e8f0",
            padding: 0,
            WebkitAppearance: "none",
            MozAppearance: "none",
            appearance: "none",
          }}
        />
        <style>{`
          input[type="color"]::-webkit-color-swatch-wrapper {
            padding: 0;
          }
          input[type="color"]::-webkit-color-swatch {
            border: none;
            border-radius: 9999px;
          }
          input[type="color"]::-moz-color-swatch {
            border: none;
            border-radius: 9999px;
          }
          
          .custom-opacity-slider {
            -webkit-appearance: none;
            appearance: none;
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: linear-gradient(to right, #1e293b 0%, #cbd5e1 100%);
            outline: none;
            cursor: pointer;
          }
          
          .custom-opacity-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: white;
            border: 2px solid #64748b;
            cursor: pointer;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          }
          
          .custom-opacity-slider::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: white;
            border: 2px solid #64748b;
            cursor: pointer;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          }
        `}</style>
      </div>
      <div className="flex-1 border border-slate-200 rounded-lg px-3 py-2">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="w-full text-sm font-mono focus:outline-none mb-1"
        />

        {showOpacity && (
          <>
            <hr className="my-3 border-slate-200" />
            <div className="flex items-center gap-2 mt-1">
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={opacity}
                onChange={onOpacityChange}
                className="custom-opacity-slider flex-1"
              />
              <span className="text-xs font-mono text-slate-600 w-10 text-right">
                {Math.round(opacity * 100)}%
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);

export default ColorPicker;
