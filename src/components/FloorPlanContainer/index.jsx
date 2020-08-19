import React from 'react';
import './index.css';

import { Stage } from 'react-konva';
import FloorElement from '../FloorElement/index';
import { getElements, getElementList } from '../../helpers/getData';

const FloorPlanContainer = ({ visibleElemObj }) => (
  <div className="floorplan-container">
    <Stage width={1000} height={1000}>
      {getElements().map(({ elemName }) => (
        <FloorElement
          isVisible={visibleElemObj[elemName]}
          elemName={elemName}
          elemList={getElementList(elemName)}
        />
      ))}
    </Stage>
  </div>
);

export default FloorPlanContainer;
