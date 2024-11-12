import React, { useState } from 'react';
import '../styles/ColorPicker.css'
const ColorPicker = ({ label, onColorSelect }) => {
  const [color, setColor] = useState('');

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    onColorSelect(selectedColor);
  };

  return (
    <div className="color-picker-item">
      <label>{label}</label>
      <input
        type="color"
        className='color-selected'
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
