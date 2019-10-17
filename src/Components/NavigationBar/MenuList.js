import React from 'react';
import {MENU_LIST} from '../../constants';

class MenuList extends React.Component {
    
    menuItem = (title, url) => {
        return (
            <div>
                <a href={url}>{title}</a>
            </div>
        )
    }
    render(){
        return (
            <div className={`menu-list-container${this.props.showMenu?'':' minimize'
                }`}>
                <div className="menu-list">
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
