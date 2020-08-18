import React from 'react';

const Element = ({ roomName, count }) => (
  <div className="element-item">
    <input type="checkbox" id={`${roomName}-checkbox`} />
    <label htmlFor={`${roomName}-checkbox`}>{`${roomName} (${count})`}</label>
  </div>
);

export default Element;
