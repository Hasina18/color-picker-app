import React, { useState } from "react";
import "./ColorPicker.css"; // Import the CSS file

const ColorPicker = () => {
  const [color, setColor] = useState("#ff0000");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="color-picker-container" style={{ backgroundColor: color }}>
      <h2>🎨 React Color Picker</h2>
      <input type="color" value={color} onChange={handleChange} />
      <div className="color-values">
        <p><strong>HEX:</strong> {color}</p>
        <p><strong>RGB:</strong> {hexToRgb(color)}</p>
      </div>
    </div>
  );
};

// Function to convert HEX to RGB
const hexToRgb = (hex) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
};

export default ColorPicker;

