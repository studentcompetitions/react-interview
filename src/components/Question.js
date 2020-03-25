import React from "react";
import { QuestionBody } from "./QuestionBody";
import { Alternative } from "./Alternative";

export const Question = ({ question }) => {
  return (
    <div className="flex flex-col justify-center h-screen text-center">
      <QuestionBody>{question.text}</QuestionBody>
      <div>
        {question.alternatives.map(alternative => (
          <Alternative key={alternative.text} alternative={alternative} />
        ))}
      </div>
    </div>
  );
};
