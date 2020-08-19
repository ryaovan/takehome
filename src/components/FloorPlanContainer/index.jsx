import React from 'react';
import './index.css';

import { Stage, Layer } from 'react-konva';
import FloorItem from '../FloorItem/index';
import FloorElement from '../FloorElement/index';
import { getElements, getElementList } from '../../helpers/getData';

const FloorPlanContainer = () => (
  <div className="floorplan-container">
    <Stage width={700} height={700}>
      {getElements().map(({ elemName }) => (
        <FloorElement />
      ))}
      <Layer visible={true}>
        <FloorItem />
      </Layer>
    </Stage>
  </div>
);

export default FloorPlanContainer;
