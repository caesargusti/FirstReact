import React from 'react';
import {
    Route,
    Redirect
  } from "react-router-dom";

export default function ProtectedRoute(props){
    const {children, ...rest} = props
    if(!window.localStorage.getItem("token")){
        return <Redirect to="/login" />;
    }
    return <Route {...rest}> {children}</Route>;

}
