import React, { useState } from 'react';
import '../styles/ImageUpload.css';
import ColorPicker from './ColorPicker'; // We'll create this component below
import BadgeSelector from './BadgeSelector'; // We'll create this component below

const ImageUpload = ({ onImageSelect }) => {
  const [image, setImage] = useState(null);
  const [selectedColors, setSelectedColors] = useState({
    skinColor: '',
    eyeColor: '',
    hairColor: ''
  });
  const [badges, setBadges] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      onImageSelect(file); // Optional: pass image to parent if needed
    }
  };

  const handleColorSelect = (color, type) => {
    setSelectedColors((prevColors) => ({
      ...prevColors,
      [type]: color
    }));
  };

  const handleBadgeSelect = (badge) => {
    setBadges((prevBadges) => {
      if (prevBadges.includes(badge)) {
        return prevBadges.filter((item) => item !== badge);
      } else {
        return [...prevBadges, badge];
      }
    });
  };

  return (
    <div className="image-upload-container">
      {!image && <div className="image-upload">
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>}

      {image && <img src={image} alt="Uploaded"  className="uploaded-image" />}

      {/* Color Picker Section */}
      <div className="color-picker">
        <h4>Select Colors</h4>
        <div className="color-selector">
          <ColorPicker label="Skin Color" onColorSelect={(color) => handleColorSelect(color, 'skinColor')} />
          <ColorPicker label="Eye Color" onColorSelect={(color) => handleColorSelect(color, 'eyeColor')} />
          <ColorPicker label="Hair Color" onColorSelect={(color) => handleColorSelect(color, 'hairColor')} />
        </div>
      </div>

      {/* Badges Section */}
      <BadgeSelector badges={badges} onBadgeSelect={handleBadgeSelect} />
    </div>
  );
};

export default ImageUpload;
