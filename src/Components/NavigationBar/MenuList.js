import React from 'react';

class MenuList extends React.Component {
    
    render(){
        return (
            <div className={`menu-list-container${this.props.showMenu?'':' minimize'
                }`}>
                <div className="menu-list">
                    Menu List
                </div>
                <div className="toggle" onClick={this.props.toggle}>
                    
                </div>
            </div>
        )
    }
}

export default MenuList;
