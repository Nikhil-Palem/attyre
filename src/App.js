import React, { useState } from 'react';
import ColorInput from './components/ColorInput';
import ImageUpload from './components/ImageUploader';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [result, setResult] = useState(null);

  const handleFormSubmit = async (data) => {
    const response = await fetch('https://attyre-xtbx.vercel.app/api/color', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const resultData = await response.json();
    setResult(resultData);
  };

  return (
    <div className="App">
      <ColorInput onSubmit={handleFormSubmit} />
      <ImageUpload onImageSelect={(image) => console.log('Selected image:', image)} />
      {result && <ResultDisplay result={result} />}
    </div>
  );
}

export default App;
