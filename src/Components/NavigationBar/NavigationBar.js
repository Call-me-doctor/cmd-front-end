import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

class NavigationBar extends React.Component {
    render(){
        return (
            <div className="navbar">
                <div className="logo-menu">
                    <div className="menu">
                        <MenuIcon />
                    </div>
                    <div className="logo">
                        <img src="images/logo_trans.png" alt="logo"/>
                    </div>
                </div>
                <div className="login"> <button> Login </button> </div>
            </div>
        );
    }
}

export default NavigationBar;