import React, { Component } from 'react';
import './index.css';

import { Line } from 'react-konva';
import PropTypes from 'prop-types';

class FloorItem extends Component {
  constructor(props) {
    super(props);
    const { color, points } = props;
    this.color = color || 'black';
    this.points = points.flat();
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
        x={0}
        y={0}
        points={this.points}
        stroke={this.color}
        strokeWidth={0.8}
        onClick={this.handleClick}
        fill={this.state.clicked ? this.color : ''}
        closed
      />
    );
  }
}

FloorItem.propTypes = {
  color: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.number),
};

export default FloorItem;
