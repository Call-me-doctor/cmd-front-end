import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

import {MENU_LIST} from '../../constants';

class MenuList extends React.Component {
    
    menuItem = (title, url) => {
        return (
            <div className="link">
                <a href={url}>{title}</a>
            </div>
        )
    }
    render(){
        return (
            <div className={`menu-list-container${this.props.showMenu?'':' minimize'
                }`}>
                <div className="menu-list">
                    <div className="menu-list-header">
                        <div className="menu-close" onClick={this.props.toggle}>
                            <CloseIcon />
                        </div>
                        <div className="logo">
                            <a href="/"><img src="images/logo_badge.png" alt="logo"/></a>
                        </div>
                    </div>
                    {this.menuItem(MENU_LIST.register, 'register')}
                    {this.menuItem(MENU_LIST.about, 'about')}
                    {this.menuItem(MENU_LIST.faqs, 'faqs')}
                    {this.menuItem(MENU_LIST.terms_and_conditions, 'terms_and_conditions')}
                </div>
                <div className="toggle" onClick={this.props.toggle}>
                    
                </div>
            </div>
        )
    }
}

export default MenuList;
