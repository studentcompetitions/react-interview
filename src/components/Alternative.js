import React from "react";

export const Alternative = ({ alternative }) => {
  return (
    <button
      type="button"
      className="text-lg block w-full p-4 rounded my-2 hover:bg-gray-400 bg-white"
    >
      {alternative.text}
    </button>
  );
};
