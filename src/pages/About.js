import React from "react";
import Header from "../components/Header"
import logo from '../logo.svg';
import '../App.css';

export default function About(){
    return (
        <div className="wrapper"> 
        <img src={logo} className="App-logo" alt="logo" />
            <Header/>
            <h1>About</h1>
        </div>
    )
}