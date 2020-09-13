import React, { Component } from 'react';

const verticalLine = {
  height: '100%',
  width: '1px'
}

const horizontalLine = {
  width: '100%',
  height: '1px'
}
class Divider extends Component {
  constructor() {
    super();
  }

  render() {
    const type = this.props.vertical ? verticalLine : horizontalLine;
    const color = this.props.color ? this.props.color : '#828282';
    return (
      <div style={{ ...type, backgroundColor: color }}> </div>
    );
  }
}

export default Divider;