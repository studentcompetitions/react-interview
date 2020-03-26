import React from "react";
import { prop } from "ramda";
import { api } from "../lib/api";
import { Question } from "../components/Question";
import { Layout } from "../components/Layout";

const getQuestion = prop(0);

export const Quiz = () => {
  const questions = api.getQuestions();
  return (
    <Layout>
      <Question question={getQuestion(questions)} />
    </Layout>
  );
};
