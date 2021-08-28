import React from "react";
import { Route } from "react-router-dom";

// import Hello from "./Hello";
// import Dashboard from "./dashboard/Dashboard";
import OverviewComponent from "./dashboard/Overview/Overview";
import Information from "./dashboard/Information/Information";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-in/SignUp";

function App() {
  return (
    <div>
      <Route path="/" component={OverviewComponent} exact />
      <Route path="/dashboard" component={OverviewComponent} exact />
      <Route path="/dashboard/overview" component={OverviewComponent} />
      <Route path="/dashboard/information" component={Information} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
