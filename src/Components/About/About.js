import React, {Fragment} from 'react';
import NavBar from '../NavigationBar/NavigationBar';

import {LOREM} from '../../constants';

class About extends React.Component {
    render(){
        return (
            <Fragment>
                <NavBar />
                <div className="info">
                    <h1>About</h1>
                    <p> {LOREM}</p>
                </div>
            </Fragment>
        );
    }
}

export default About;