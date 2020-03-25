import React, { useState } from "react";
import { api } from "../lib/api";
import { pipe, pluck, flatten } from "ramda";
import { Layout } from "../components/Layout";
import { AlternativeFeedback } from "../components/AlternativeFeedback";

const getAlternatives = pipe(pluck("alternatives"), flatten);

export const Feedback = () => {
  const [questions, setQuestions] = useState(null);
  api.getQuestions().then(setQuestions);
  if (!questions) return <div>Loading</div>;
  const alternatives = getAlternatives(questions);
  console.log(alternatives);
  return (
    <Layout>
      <div className="flex flex-col justify-center h-screen text-center">
        {alternatives.map(alternative => (
          <AlternativeFeedback alternative={alternative} />
        ))}
      </div>
    </Layout>
  );
};
