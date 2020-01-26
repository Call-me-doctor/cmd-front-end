import React, { Fragment } from 'react';
import NavBar from '../NavigationBar/NavigationBar';

class RegistrationDone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
        setTimeout(() => {
            window.location.href = '/login';
        }, 2000);
    }

    render() { 
        return ( 
            <Fragment>
                <NavBar />
                <div className="home-main">
                    <div className="home-text">
                        <h1>Thank You</h1>
                        <label className="f20">An E-mail with a verification link has been sent.</label>
                        <label className="f12">You will be redirected to the <a href="/login">login</a> page</label>
                    </div>
                </div>
            </Fragment> 
        );
    }
}
 
export default RegistrationDone;