const Slider = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  unit = "px",
}) => {
  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="mb-6">
      {/* Label + Value */}
      <div className="flex justify-between items-center mb-2">
        <label className="text-[11px] font-normal text-slate-500">
          {label}
        </label>
        <span className="text-[11px] font-mono text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded">
          {value}
          {unit}
        </span>
      </div>

      {/* Slider */}
      <div className="relative">
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-slate-200 w-full"
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-black"
          style={{ width: `${percent}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="relative w-full appearance-none bg-transparent cursor-pointer
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:h-3
                     [&::-webkit-slider-thumb]:w-3
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-black
                     [&::-webkit-slider-thumb]:border
                     [&::-webkit-slider-thumb]:border-white
                     [&::-webkit-slider-thumb]:shadow-sm
                     [&::-moz-range-thumb]:h-3
                     [&::-moz-range-thumb]:w-3
                     [&::-moz-range-thumb]:rounded-full
                     [&::-moz-range-thumb]:bg-black"
        />
      </div>
    </div>
  );
};

export default Slider;
