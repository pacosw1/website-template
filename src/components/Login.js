import React, { Component } from 'react';

 export const Login = props => {
    return (
        <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="username"/>
        <br/>
        <input type="password" placeholder="password"/>
        <br/>
        <br/>
        <button>Log in</button>
        </div>
    )
}

