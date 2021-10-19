import React from "react";
import { Route } from "react-router-dom";
import axios from 'axios';

// import Hello from "./Hello";
// import Dashboard from "./dashboard/Dashboard";
import Overview from "./dashboard/Overview/Overview";
import DetailList from "./dashboard/DetailList/DetailList";
import Documents from "./dashboard/Information/Documents";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-in/SignUp";
import Landing from './landing';
import Layout from './components/Layout';

axios.defaults.baseURL = 'https://api.cumulus.tophat.cloud';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') || '';
axios.defaults.headers.common['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

const RouteWithLayout = ({ path, component: Component }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        <Layout>
          <Component {...props}/>
        </Layout>
      )}
      exact
    />
  );
};

export default () => {
  if (!localStorage.getItem('token')) {
    return (
      <>
        <Route path="/" component={Landing} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </>
    );
  }

  return (
    <>
      <RouteWithLayout path="/" component={Overview} />
      <RouteWithLayout path="/dashboard" component={Overview} />
      <RouteWithLayout path="/dashboard/overview" component={Overview} />
      <RouteWithLayout path="/dashboard/detail" component={DetailList} />
      <RouteWithLayout path="/dashboard/documents" component={Documents} />
    </>
  );
};
