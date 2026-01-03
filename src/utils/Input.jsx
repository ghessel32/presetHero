const Input = ({
  label,
  value,
  type,
  onChange,
  unit = "px",
  min,
  max,
  step = 1,
}) => {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block text-[11px] font-normal text-slate-500 mb-3">
      {label}
    </label>
      )}
      <div className="relative flex items-center gap-2">
        <input
          type={type}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
        {unit && (
          <span className="text-xs font-medium text-gray-500 min-w-[30px]">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
