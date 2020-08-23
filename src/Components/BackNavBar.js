import React, { Component } from 'react';

class BackNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="navbar fix-navbar">
        {this.props.label}
      </div>
    );
  }
}

export default BackNavBar;