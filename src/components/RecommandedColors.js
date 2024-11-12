import React from 'react';
import '../styles/RecommendedColors.css';

const RecommendedColors = ({ colors }) => {
  return (
    <div className="recommended-colors">
      <h3>Recommended Colors</h3>
      <div className="color-list">
        {colors.map((color, index) => (
          <div key={index} className="color-swatch-container">
            <div 
              className="color-swatch" 
              style={{ backgroundColor: color.hex_code }}
            >
              {/* Empty <p> to keep swatch space intact */}
            </div>
            <div className="color-info">
              <p className="color-name">{color.color_name}</p>
              <p className="color-usage">{color.usage}</p>
              <p className="color-description">{color.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedColors;
