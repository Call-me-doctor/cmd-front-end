import React, {Fragment} from 'react';
import NavBar from '../NavigationBar/NavigationBar';
import RegisterForm from './RegisterForm';

class Register extends React.Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div className="content-container">
                    <div className="details-form">
                        <RegisterForm selected={ parseInt(this.props.match.params.user_type)}/>
                        <label>Already have an account? <a href="login">Login here</a></label>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default Register;
