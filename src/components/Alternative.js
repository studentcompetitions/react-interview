import React from "react";

export const Alternative = ({ alternative }) => {
  return (
    <button
      type="button"
      className="block w-full bg-gray-200 p-4 rounded my-2 hover:bg-gray-300"
    >
      {alternative.text}
    </button>
  );
};
