import React from 'react';
import './index.css';

import { Layer } from 'react-konva';
import FloorItem from '../FloorItem/index';
import { transformPoints } from '../../helpers/getData';

const FloorElement = ({ isVisible, elemName, elemList }) => {
  return (
    <Layer visible={isVisible} id={`display-${elemName}`}>
      {elemList.map(pointList => {
        return <FloorItem color={'black'} points={transformPoints(pointList)} />;
      })}
    </Layer>
  );
};

export default FloorElement;
