import React, { Component } from 'react';
import './index.css';

import { getElements } from '../../helpers/getData';
import Element from '../Element/index';

class ElementContainer extends Component {
  constructor(props) {
    super(props);
    this.handleElementListChange = this.handleElementListChange.bind(this);
  }

  handleElementListChange(elemChanged) {
    this.props.handleElementListChange(elemChanged);
  }

  render() {
    return (
      <div className="element-container">
        <div className="element-header">
          <h4>Elements</h4>
        </div>
        <div className="element-body">
          {getElements().map(rooms => {
            return <Element onElementListChange={this.handleElementListChange} {...rooms} />;
          })}
        </div>
      </div>
    );
  }
}

export default ElementContainer;
