import React, { useState } from "react";
import { prop } from "ramda";
import { api } from "../lib/api";
import { Question } from "../components/Question";
import { Layout } from "../components/Layout";

const getQuestion = prop(0);

export const Quiz = () => {
  const [questions, setQuestions] = useState(null);
  api.getQuestions().then(setQuestions);
  if (!questions) return <div>Loading</div>;
  return (
    <Layout>
      <Question question={getQuestion(questions)} />
    </Layout>
  );
};
