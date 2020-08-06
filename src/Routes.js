import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import BlogDetail from './pages/BlogDetail';
import PageNotFound from './pages/404';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';


export default function Routes(){
    return (<Router>
        <Switch>
          <ProtectedRoute exact path="/">
            <Home />
          </ProtectedRoute>
          <Route exact path="/about">
            <About />
          </Route>
          <ProtectedRoute exact path="/blog/:id">
            <BlogDetail />
          </ProtectedRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="*">
              <PageNotFound />
          </Route>
        </Switch>
        </Router>);
}