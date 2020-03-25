import React from "react";

export const QuestionBody = ({ children }) => {
  return (
    <div
      className="text-2xl text-white mb-6 p-4 rounded"
      style={{ background: "rgba(0,0,0,0.2)" }}
    >
      {children}
    </div>
  );
};
