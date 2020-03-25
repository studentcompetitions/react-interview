import React from "react";
import { CheckIcon, TimesIcon } from "./Icon";

export const AlternativeFeedback = ({ alternative }) => {
  return (
    <div
      className="flex bg-white my-2 rounded items-center"
      key={alternative.feedback}
    >
      <div className="w-12 p-4">
        {alternative.match ? <CheckIcon /> : <TimesIcon />}
      </div>
      <div className="p-2">{alternative.feedback}</div>
    </div>
  );
};
