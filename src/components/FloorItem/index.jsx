import React, { Component } from 'react';
import './index.css';

import { Line } from 'react-konva';

class FloorItem extends Component {
  constructor(props) {
    super(props);
    const { color, points } = props;
    this.color = color || 'black';
    this.points = points;
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
    console.log(`points: ${this.points}`);
    return (
      <Line
        x={20}
        y={20}
        points={[50, 50, 150, 50, 150, 150, 50, 150]}
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
