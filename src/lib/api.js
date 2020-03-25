const questions = [
  {
    text: "What is your level of education?",
    alternatives: [
      {
        text: "High school",
        match: false,
        feedback: "You will need a bachelor's degree for this programme."
      },
      {
        text: "Bachelor",
        match: true,
        feedback: "Great, you have just the right level of education!"
      },
      {
        text: "Master",
        match: false,
        feedback: "This programme is primarily for bachelor students."
      }
    ]
  },
  {
    text: "What is your field of study?",
    alternatives: [
      {
        text: "Business",
        match: true,
        feedback: "Great! This is a business programme."
      },
      {
        text: "Computer science",
        match: false,
        feedback: "You will need a business degree for this programme."
      },
      {
        text: "Other",
        match: false,
        feedback: "You will need a business degree for this programme."
      }
    ]
  },
  {
    text: "What is your field of study?",
    alternatives: [
      {
        text: "Business",
        match: true,
        feedback: "Great! This is a business programme."
      },
      {
        text: "Computer science",
        match: false,
        feedback: "You will need a business degree for this programme."
      },
      {
        text: "Other",
        match: false,
        feedback: "You will need a business degree for this programme."
      }
    ]
  },
  {
    text: "Do you have proof of English proficiency?",
    alternatives: [
      {
        text: "Yes",
        match: true,
        feedback: "English proficiency shouldn't be a problem for you."
      },
      {
        text: "No, I'm a native or bilingual speaker",
        match: false,
        feedback: "English proficiency shouldn't be a problem for you."
      },
      {
        text: "No",
        match: false,
        feedback:
          "You need to provide proof of english proficiency for this programme."
      }
    ]
  }
];

export const api = {
  getQuestions: () => new Promise(resolve => resolve(questions))
};
