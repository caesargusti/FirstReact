import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Header.css';


export default function Header(){
    const history = useHistory();

    function doLogout(){
        window.localStorage.removeItem("token");
        history.push("/login")
    }
    return (
        <div className="header"> 
            <ul>
                <li>
                    <NavLink to ="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to ="/about">About Us</NavLink>
                </li>
                <li>
                    <NavLink to ="/blog/:id">Detail</NavLink>
                </li>
                <li>
                    <NavLink to ="/login">Login</NavLink>
                </li>
                <li>
                    <button onClick={doLogout}> Logout</button>
                </li>   
            </ul>
        </div>
    );
}