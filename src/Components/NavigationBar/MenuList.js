import React from 'react';

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
                    {this.menuItem('About', 'about')}
                    {this.menuItem('FAQs', 'faqs')}
                </div>
                <div className="toggle" onClick={this.props.toggle}>
                    
                </div>
            </div>
        )
    }
}

export default MenuList;
