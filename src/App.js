import React from "react";
import { Route } from "react-router-dom";
import axios from 'axios';

import Overview from "./dashboard/Overview/Overview";
import DetailList from "./dashboard/DetailList/DetailList";
import Documents from "./dashboard/Information/Documents";
import SignIn from "./sign-in/SignIn";
import SignUp from "./sign-in/SignUp";
import Landing from './landing';
import Layout from './components/Layout';
import NotFound from './components/NotFound';

axios.defaults.baseURL = 'https://api.cumulus.tophat.cloud';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') ? `Token ${localStorage.getItem('token')}` : '';
axios.defaults.headers.common['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;

const RouteWithLayout = ({ path, component: Component }) => {
  return (
    <Route
      exact
      path={path}
      render={(props) => (
        <Layout>
          <Component {...props}/>
        </Layout>
      )}
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
        {/* <Route component={NotFound} /> */}
      </>
    );
  }

  return (
    <>
      <RouteWithLayout path="/" component={Overview} />
      <RouteWithLayout path="/dashboard/detail" component={DetailList} />
      <RouteWithLayout path="/dashboard/documents" component={Documents} />
      {/* <Route component={NotFound} /> */}
    </>
  );
};
