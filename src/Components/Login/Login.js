import React, {Fragment} from 'react';
import NavBar from '../NavigationBar/NavigationBar';

class Login extends React.Component {
    render() { 
        return (
            <Fragment>
                <NavBar />
                <div className="content-container">
                    Login
                </div>
            </Fragment>
        );
    }
}
 
export default Login;
