import React from 'react';

const Dropdown = ({
  options = [],
  value,
  handleChange,
  label = 'label',
  isRequired = false,
}) => {
  return (
    <div className="relative">
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
        {isRequired && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={handleChange}
          name={label}
          className="w-full p-4 border border-[#EFF0F6] rounded-4xl shadow-sm text-sm text-gray-700 placeholder-gray-500 focus:outline-[#89A884] focus:ring-2 focus:ring-[#89A884] appearance-none"
          style={{ boxShadow: '0px 2px 6px 0px #13124212' }}
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* Custom arrow icon */}
        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
