import React from "react";
import { Switch, Route } from "react-router-dom";
import { Quiz } from "./containers/Quiz";

export const Router = () => {
  return (
    <Switch>
      <Route component={Quiz} />
    </Switch>
  );
};
