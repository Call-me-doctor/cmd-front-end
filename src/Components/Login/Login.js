import React, {Fragment} from 'react';
import NavBar from '../NavigationBar/NavigationBar';
import {
    InputText1,
    InputPassword1 ,
    InputSubmit1,
} from '../Utils/FormInputs';

const mobileLoginForm = "login-mobile";

class Login extends React.Component {
    render() { 
        return (
            <Fragment>
                <NavBar />
                <div className="content-container">
                    <div className="details-form">
                        <form id={mobileLoginForm}>
                            <InputText1 label="Username or Email" formId={mobileLoginForm} />
                            <InputPassword1 label="Password" formId={mobileLoginForm}/>
                            <InputSubmit1 label="Login" formId={mobileLoginForm}/>
                        </form>
                        <label>Don't have an account? <a href="register">Register here</a></label>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Login;
