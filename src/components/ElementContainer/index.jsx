import React from 'react';
import './index.css';

import { getElements } from '../../helpers/getData';
import Element from '../Element/index';

const ElementContainer = () => (
  <div className="element-container">
    <div className="element-header">
      <h4>Elements</h4>
    </div>
    <div className="element-body">
      {getElements().map(rooms => {
        return <Element {...rooms} />;
      })}
    </div>
  </div>
);

export default ElementContainer;
