import React, { useState } from 'react';
import '../styles/ColorInput.css';

const ColorInput = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    skinColor: '',
    eyeColor: '',
    hairColor: '',
    undertone: '',
    preferences: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="color-input-form">
      <label>Skin Color: <input type="text" name="skinColor" placeholder='enter the skincolor' onChange={handleChange} required /></label>
      <label>Eye Color: <input type="text" name="eyeColor" placeholder='enter the eyeColor' onChange={handleChange} required /></label>
      <label>Hair Color: <input type="text" name="hairColor" placeholder='enter the hairColor' onChange={handleChange} required /></label>
      <label>Undertone: <input type="text" name="undertone"  placeholder='enter the undertone(optional)' onChange={handleChange} /></label>
      <label>Preferences: <input type="text" name="preferences"  placeholder='enter the preferences(optional)' onChange={handleChange} /></label>
      <button type="submit">Analyze Colors</button>
    </form>
  );
};

export default ColorInput;
