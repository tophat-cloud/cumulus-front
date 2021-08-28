import React from "react";
import { Route } from "react-router-dom";

// import Hello from "./Hello";
// import Dashboard from "./dashboard/Dashboard";
import OverviewComponent from "./dashboard/Overview";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-in/SignUp";

function App() {
  return (
    <div>
      <Route path="/" component={OverviewComponent} exact />
      <Route path="/dashboard" component={OverviewComponent} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </div>
  );
}

export default App;
