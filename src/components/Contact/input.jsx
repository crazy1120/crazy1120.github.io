import React from "react";

const Input = ({ type, pHolder, mailSent, id, icon }) => {
  return (
    <div className="flex pt-9">
      <span className="inline-flex items-center px-3 text-sm border border-r-0  rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
        {icon}
      </span>
      <input
        disabled={mailSent}
        readOnly={mailSent}
        id={id}
        type={type}
        className="rounded-none rounded-r-lg  border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        placeholder={pHolder}
        required
      />
    </div>
  );
};

export default Input;
