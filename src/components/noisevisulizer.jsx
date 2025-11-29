import React, { useEffect, useRef } from "react";
import { noiseGenerator } from "../utils/noiseGeneratorUi";

function NoiseVisualizer() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;

    // Create noise generator
    const noise = noiseGenerator();

    // Generate noise visualization
    const scale = 0.25; // Zoom level (lower = more zoomed in, more detail)

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        // Get noise value at this pixel
        const noiseValue = noise(x * scale, y * scale);
        
        // Convert noise (-1 to 1) to grayscale (0 to 255)
        const normalized = ((noiseValue + 1) / 2) * 255;

        const index = (y * width + x) *4;
        data[index] = normalized;     // Red
        data[index + 1] = normalized; // Green
        data[index + 2] = normalized; // Blue
        data[index + 3] = 255;        // Alpha
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <div className="noise-visualizer">
      <h3>Perlin Noise Visualization</h3>
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={400}
        style={{
          border: "2px solid #667eea",
          borderRadius: "8px",
          backgroundColor: "#f5f5f5"
        }}
      />
      <p>This shows the raw Perlin noise values used for procedural generation</p>
    </div>
  );
}

export default NoiseVisualizer;
