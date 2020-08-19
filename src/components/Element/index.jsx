import React, { Component } from 'react';
import './index.css';

class Element extends Component {
  constructor(props) {
    super(props);
    const { elemName, count } = props;
    this.state = {
      checked: true,
    };
    this.elemName = elemName;
    this.count = count;
    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.props.onElementListChange({ [this.elemName]: !this.state.checked });
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <div className="element-item">
        <input
          type="checkbox"
          id={`${this.elemName}-checkbox`}
          checked={this.state.checked}
          onClick={this.handleCheck}
        />
        <label htmlFor={`${this.elemName}-checkbox`}>{`${this.elemName} (${this.count})`}</label>
      </div>
    );
  }
}

export default Element;
