import React from 'react';
import './index.css';

import { Layer } from 'react-konva';
import FloorItem from '../FloorItem/index';
import { transformPoints } from '../../helpers/getData';
import randomColor from 'randomcolor';

const FloorElement = ({ isVisible, elemName, elemList }) => {
  const layerColor = randomColor();
  return (
    <Layer scale={{ x: 2, y: 2 }} visible={isVisible} id={`display-${elemName}`}>
      {elemList.map(pointList => {
        return <FloorItem color={layerColor} points={transformPoints(pointList)} />;
      })}
    </Layer>
  );
};

export default FloorElement;
