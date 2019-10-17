import React from 'react';

class MenuList extends React.Component {
    constructor(){
        super();

        this.state = {
            showMenu: true,
        };
    }
    
    minimizeMenu = ()=>{
        this.setState({
            showMenu: false,
        })
    }
    render(){
        return (
            <div className={`menu-list-container${this.state.showMenu?'':' minimize'
                }`}>
                <div className="menu-list">
                    Menu List
                </div>
                <div className="toggle" onClick={this.minimizeMenu}>
                    
                </div>
            </div>
        )
    }
}

export default MenuList;
