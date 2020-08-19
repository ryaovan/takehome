import React, { Component } from 'react';
import './index.css';

import ElementContainer from '../ElementContainer/index';
import FloorPlanContainer from '../FloorPlanContainer/index';
import { getElements } from '../../utils/getData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elemObj: getElements().reduce((elemObj, elem) => {
        return { ...elemObj, [elem.elemName]: true };
      }, {}),
    };
    this.handleElementListChange = this.handleElementListChange.bind(this);
  }

  handleElementListChange(elemChanged) {
    this.setState({
      elemObj: { ...this.state.elemObj, ...elemChanged },
    });
  }

  render() {
    return (
      <div className="App">
        <ElementContainer handleElementListChange={this.handleElementListChange} />
        <FloorPlanContainer visibleElemObj={this.state.elemObj} />
      </div>
    );
  }
}

export default App;
