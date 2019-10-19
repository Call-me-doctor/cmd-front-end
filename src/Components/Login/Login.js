import React, {Fragment} from 'react';
import NavBar from '../NavigationBar/NavigationBar';
import {
    InputText1,
    InputPassword1 ,
    InputSubmit1,
} from '../Utils/FormInputs';

class Login extends React.Component {
    render() { 
        return (
            <Fragment>
                <NavBar />
                <div className="content-container">
                    <div className="login">
                        <form>
                            <InputText1 label="Username or Email" />
                            <InputPassword1 label="Password" />
                            <InputSubmit1 label="Login" />
                        </form>
                        <label>Don't have an account? <a href="register">Register here</a></label>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Login;
