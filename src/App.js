import React from "react";
import { Redirect, Route, Switch, Router } from "react-router-dom";

import axios from "axios";

import Overview from "./dashboard/Overview/Overview";
import DetailList from "./dashboard/DetailList/DetailList";
import Documents from "./dashboard/Information/Documents";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-in/SignUp";
import Landing from "./landing";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

axios.defaults.baseURL = "https://api.cumulus.tophat.cloud";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token")
  ? `Token ${localStorage.getItem("token")}`
  : "";
axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.withCredentials = false;

const RouteWithLayout = ({ path, component: Component }) => {
  return (
    <Route
      exact
      path={path}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default () => {
  if (!localStorage.getItem("token")) {
    return (
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route component={NotFound} /> */}

        <Route path="*">{<Redirect to="/" />}</Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <RouteWithLayout exact path="/" component={Overview} />
      <RouteWithLayout exact path="/dashboard/detail" component={DetailList} />
      <RouteWithLayout
        exact
        path="/dashboard/documents"
        component={Documents}
      />
      {/* <Route component={NotFound} /> */}

      <Route path="*">{<Redirect to="/" />}</Route>
    </Switch>
  );
};
