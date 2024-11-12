import React from 'react';
import '../styles/BadgeSelector.css'
const BadgeSelector = ({ badges, onBadgeSelect }) => {
  const badgeOptions = ['Undertone', 'Preferences'];

  return (
    <div className="badge-selector">
      <h4>Select Badges</h4>
      <div className="badge-container">
        {badgeOptions.map((badge) => (
          <button
            key={badge}
            className={`badge ${badges.includes(badge) ? 'selected' : ''}`}
            onClick={() => onBadgeSelect(badge)}
          >
            {badge}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BadgeSelector;
