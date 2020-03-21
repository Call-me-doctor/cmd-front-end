import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import AuthMenuList from './AuthMenuList';
import {MENU_LIST} from '../../constants';

class AuthNavigationBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: false,
        }
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu,
        })
    }

    menuItem = (title, url) => {
        return (
            <div className="link">
                <a href={url}>{title}</a>
            </div>
        )
    }

    render(){
        return (
            <>
                <div className="navbar fix-navbar">
                    <AuthMenuList showMenu={this.state.showMenu} toggle={this.toggleMenu}/>
                    <div className="logo-menu">
                        <div className="menu" onClick={this.toggleMenu}>
                            <MenuIcon />
                        </div>
                        <div className="logo">
                            <a href="/"><img src={process.env.PUBLIC_URL + "/images/profile.png"} alt="logo"/></a>
                        </div>
                        <div>My Name</div>
                    </div>
                    { this.props.hideLogin ? null:
                        <div className="login">
                            <form>
                                <input type="text" placeholder="email or username"/>
                                <input type="password" placeholder="password" />
                                <button> Logout </button>
                            </form>
                            <button className="mobile-login">
                                <a href="/logout"> Logout </a>
                            </button>
                        </div>
                    }
                </div>
                <div className="navbar"/>
            </>
        );
    }
}

export default AuthNavigationBar;
