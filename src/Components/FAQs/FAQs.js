import React, {Fragment} from 'react';
import NavBar from '../NavigationBar/NavigationBar';

import {LOREM} from '../../constants';

class FAQs extends React.Component {
    render(){
        return (
            <Fragment>
                <NavBar />
                <div className="content-container">
                    <div className="info">
                        <h1>FAQs</h1>
                        <p> {LOREM}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default FAQs;
