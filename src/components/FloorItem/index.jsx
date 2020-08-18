import React, { Component } from 'react';
import './index.css';

class FloorItem extends Component {
  constructor(props) {
    super(props);
    const { elemColor, dimensions } = props;
    this.color = elemColor;
    this.dimensions = dimensions;
    this.clicked = false;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }

  render() {
    return (
      <div
        className="floor-item"
        style={{ backgroundColor: this.state.clicked ? 'white' : this.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default FloorItem;
