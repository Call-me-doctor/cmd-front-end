import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import MenuList from './MenuList';

class NavigationBar extends React.Component {
    constructor(){
        super();
        this.state = {
            showMenu: false,
        }
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }

    render(){
        return (
            <div className="navbar">
                <MenuList showMenu={this.state.showMenu} toggle={this.toggleMenu}/>
                <div className="logo-menu">
                    <div className="menu" onClick={this.toggleMenu}>
                        <MenuIcon />
                    </div>
                    <div className="logo">
                        <img src="images/logo_trans.png" alt="logo"/>
                    </div>
                </div>
                <div className="login">
                    <form>
                        <input type="text" placeholder="email or username"/>
                        <input type="password" placeholder="password" />
                        <button> Login </button>
                    </form>
                    <button className="mobile-login"> Login </button>
                </div>
            </div>
        );
    }
}

export default NavigationBar;
