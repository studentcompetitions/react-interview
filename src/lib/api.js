const questions = [
  { text: "Question?", alternatives: [{ text: "yes" }, { text: "no" }] }
];

export const api = {
  getQuestions: () => new Promise(resolve => resolve(questions))
};
