import React from 'react';
import '../styles/ColorsToAvoid.css';

const ColorsToAvoid = ({ colors }) => {
  return (
    <div className="colors-to-avoid">
      <h3>Colors to Avoid</h3>
      <div className="color-list">
        {colors.map((color, index) => (
          <div key={index} className="color-swatch-container">
            <div className="color-swatch" style={{ backgroundColor: color.hex_code }}></div>
            <div className="color-info">
              <p className='color-name'>{color.color_name}</p>
              <p className='color-reason'>{color.reason}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorsToAvoid;
