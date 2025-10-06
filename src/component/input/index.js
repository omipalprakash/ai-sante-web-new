import React from 'react';

const Input = ({
  value,
  handleChange,
  type = 'text',
  label = 'label',
  isRequired = false,
}) => {
  return (
    <div>
      <label className="block text-gray-700 text-sm font-medium mb-2">
        {label}
        {isRequired && <span className="text-red-400">*</span>}
      </label>
      <input
        type={type}
        name={label}
        value={value}
        onChange={handleChange}
        placeholder={`Enter ${label}`}
        className="w-full p-4 border border-[#EFF0F6] rounded-4xl shadow-sm text-sm placeholder-gray-500 focus:outline-[#89A884] focus:ring-2 focus:ring-[#89A884]"
        style={{ boxShadow: '0px 2px 6px 0px #13124212' }}
      />
    </div>
  );
};

export default Input;
