import React from "react";
import { Switch, Route } from "react-router-dom";
import { Quiz } from "./containers/Quiz";
import { Feedback } from "./containers/Feedback";

export const Router = () => {
  return (
    <Switch>
      <Route component={Feedback} />
      <Route component={Quiz} />
    </Switch>
  );
};
