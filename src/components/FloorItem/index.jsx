import React, { Component } from 'react';
import './index.css';

import { Line } from 'react-konva';

class FloorItem extends Component {
  constructor(props) {
    super(props);
    const { elemColor, dimensions } = props;
    this.color = elemColor || 'black';
    this.dimensions = dimensions;
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      clicked: false,
    };
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <Line
        x={20}
        y={20}
        points={[0, 0, 100, 0, 100, 100, 0, 100]}
        stroke={this.color}
        strokeWidth={2}
        onClick={this.handleClick}
        fill={this.state.clicked ? this.color : ''}
        closed
      />
    );
  }
}

export default FloorItem;
