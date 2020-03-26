import React from "react";
import { render } from "@testing-library/react";
import { Quiz } from "./containers/Quiz";

test("renders first question", async () => {
  const { getByText } = render(<Quiz />);
  const questionBody = getByText("What is your level of education?");
  expect(questionBody).toBeInTheDocument();
});
