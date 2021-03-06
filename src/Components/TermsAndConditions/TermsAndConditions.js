import React, {Fragment} from 'react';
import NavBar from '../NavigationBar/NavigationBar';

import {LOREM} from '../../constants';

class TermsAndConditions extends React.Component {
    render(){
        return (
            <Fragment>
                <NavBar />
                <div className="content-container">
                    <div className="info">
                        <h1>Terms and Conditions</h1>
                        <p> {LOREM}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TermsAndConditions;
