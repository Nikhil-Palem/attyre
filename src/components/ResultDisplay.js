import React from 'react';
import RecommendedColors from './RecommandedColors';
import ColorsToAvoid from './ColorsToAvoid';
import '../styles/ResultDisplay.css';

const ResultDisplay = ({ result }) => {
  return (
    <div className="result-display">
      <h2>{result.palette_Name}</h2>
      <p>{result.palette_Description}</p>
      <RecommendedColors colors={result.recommended_colors} />
      <ColorsToAvoid colors={result.colors_to_avoid} />
    </div>
  );
};

export default ResultDisplay;
