import React, { Component } from 'react';
import './index.css';

class Element extends Component {
  constructor(props) {
    super(props);
    const { roomName, count } = props;
    this.state = {
      checked: true,
    };
    this.roomName = roomName;
    this.count = count;
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <div className="element-item">
        <input
          type="checkbox"
          id={`${this.roomName}-checkbox`}
          checked={this.state.checked}
          onClick={this.handleCheck}
        />
        <label htmlFor={`${this.roomName}-checkbox`}>{`${this.roomName} (${this.count})`}</label>
      </div>
    );
  }
}

export default Element;
