import { createNoise2D } from 'simplex-noise';

export function noiseGenerator(seed = 0) {
  // Create noise generator (simplex-noise handles seeding internally)
  const noise = createNoise2D(); 
  return noise;
}

function noiseToRange(noiseValue, min, max) {
  const normalized = (noiseValue + 1) / 2;
  return min + normalized * (max - min);
}

export function generateBackgroundPatternFromNoise(noise, x, y, scale = 0.02) {
  const pattern = noise(x * scale, y * scale);
  const normalized = (pattern + 1) / 2; // 0 to 1
  return normalized;
}

export function generateBackgroundColorFromNoise(noise, categoryIndex) {
  const baseHue = noise(categoryIndex * 0.1, 30);
  const saturation = noise(categoryIndex * 0.1, 31);
  const lightness = noise(categoryIndex * 0.1, 32);

  const hue = noiseToRange(baseHue, 200, 280); // Blue to purple range
  const sat = noiseToRange(saturation, 20, 40);
  const light = noiseToRange(lightness, 92, 98);

  return `hsl(${Math.round(hue)}, ${Math.round(sat)}%, ${Math.round(light)}%)`;
}

export function generateBackgroundGradientFromNoise(noise, categoryIndex) {
  const hue1Noise = noise(categoryIndex * 0.1, 33);
  const hue2Noise = noise(categoryIndex * 0.1, 34);
  const angleNoise = noise(categoryIndex * 0.1, 35);

  const hue1 = noiseToRange(hue1Noise, 0, 280);
  const hue2 = noiseToRange(hue2Noise, 0, 280);
  const angle = noiseToRange(angleNoise, 0, 360);

  console.log('Gradient:', hue1, hue2, angle);
  return `linear-gradient(${Math.round(angle)}deg, 
    hsl(${Math.round(hue1)}, 30%, 50%), 
    hsl(${Math.round(hue2)}, 25%, 50%))`;
}

export function generateBackgroundBlurFromNoise(noise, categoryIndex) {
  const blurNoise = noise(categoryIndex * 0.1, 36);
  const blur = noiseToRange(blurNoise, 0, 1);
  return blur.toFixed(2);
}

export function generateBackgroundOpacityFromNoise(noise, index) {
  const bgOpacityNoise = noise(index * 0.1, 25);
  const bgOpacity = noiseToRange(bgOpacityNoise, 0.5, 1);
  return bgOpacity.toFixed(2);
}

export function generateBorderWidthFromNoise(noise, index) {
  const borderNoise = noise(index * 0.1, 26);
  const borderWidth = noiseToRange(borderNoise, 1, 5);
  return `${Math.round(borderWidth)}px`;
}

export function generateShadowFromNoise(noise, index) {
  const offsetNoise = noise(index * 0.1, 6);
  const blurNoise = noise(index * 0.1, 7);
  const opacityNoise = noise(index * 0.1, 8);

  const offsetX = noiseToRange(offsetNoise, -5, 5);
  const offsetY = noiseToRange(offsetNoise, 2, 10);
  const blur = noiseToRange(blurNoise, 5, 20);
  const opacity = noiseToRange(opacityNoise, 0.05, 0.3);

  return `${Math.round(offsetX)}px ${Math.round(offsetY)}px ${Math.round(blur)}px rgba(0,0,0,${opacity.toFixed(2)})`;
}

export function generateAnimationFromNoise(noise, index) {
  const durationNoise = noise(index * 0.1, 9);
  const delayNoise = noise(index * 0.1, 10);

  const duration = noiseToRange(durationNoise, 0.3, 1.5);
  const delay = noiseToRange(delayNoise, 0, 0.5);

  return { 
    duration: `${duration.toFixed(2)}s`, 
    delay: `${delay.toFixed(2)}s` 
  };
}

export function generateColorFromNoise(noise, x, y) {
  const hueNoise = noise(x * 0.5, y * 0.5);
  const saturationNoise = noise(x * 0.3, y * 0.7);
  const lightnessNoise = noise(x * 0.7, y * 0.3);

  const hue = noiseToRange(hueNoise, 0, 360);
  const saturation = noiseToRange(saturationNoise, 40, 100);
  const lightness = noiseToRange(lightnessNoise, 40, 60);

  return `hsl(${Math.round(hue)}, ${Math.round(saturation)}%, ${Math.round(lightness)}%)`;
}





export function generatelayoutnoise(noise, categoryIndex, screenWidth) {
  const baseNoise = noise(categoryIndex * 0.1, 0);
  const columns = Math.floor(noiseToRange(baseNoise, 1, 3.99));
  
  const spacingNoise = noise(categoryIndex * 0.2, 1);
  const spacing = noiseToRange(spacingNoise, 10, 30);

  // Calculate responsive card size based on screenWidth
  const sizeNoise = noise(categoryIndex * 0.15, 2);
  const availableWidth = screenWidth - (spacing * (columns + 1));
  const baseCardSize = availableWidth / columns;
  const cardSize = noiseToRange(sizeNoise, baseCardSize * 0.8, baseCardSize * 1.1);

  return { columns, spacing, cardSize };
}

export function generateBorderRadiusFromNoise(noise, index) {
  const radiusNoise = noise(index * 0.1, 14);
  const radius = noiseToRange(radiusNoise, 4, 16);
  return `${Math.round(radius)}px`;
}

export function generatePaddingFromNoise(noise, index) {
  const paddingNoise = noise(index * 0.1, 15);
  const padding = noiseToRange(paddingNoise, 12, 24);
  return `${Math.round(padding)}px`;
}

export function generateTransformFromNoise(noise, index) {
  const rotateNoise = noise(index * 0.1, 16);
  const scaleNoise = noise(index * 0.1, 17);
  
  const rotate = noiseToRange(rotateNoise, -2, 2);
  const scale = noiseToRange(scaleNoise, 0.98, 1.02);
  
  return `rotate(${rotate.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
}



export function generateThemeFromNoise(noise, categoryIndex) {
  const primaryColorNoise = noise(categoryIndex * 0.1, 11);
  const secondaryColorNoise = noise(categoryIndex * 0.1, 12);
  const bgColorNoise = noise(categoryIndex * 0.1, 13);

  const primaryHue = noiseToRange(primaryColorNoise, 0, 360);
  const secondaryHue = noiseToRange(secondaryColorNoise, 0, 360);
  const bgLightness = noiseToRange(bgColorNoise, 92, 98);

  return {
    primary: `hsl(${Math.round(primaryHue)}, 70%, 50%)`,
    secondary: `hsl(${Math.round(secondaryHue)}, 60%, 45%)`,
    background: `hsl(0, 0%, ${Math.round(bgLightness)}%)`,
    text: '#222',
    cardBg: '#fff',
  };
}

export function generateGradientFromNoise(noise, index) {
  const color1Hue = noise(index * 0.1, 18);
  const color2Hue = noise(index * 0.1, 19);
  const angleNoise = noise(index * 0.1, 20);
  
  const hue1 = noiseToRange(color1Hue, 0, 360);
  const hue2 = noiseToRange(color2Hue, 0, 360);
  const angle = noiseToRange(angleNoise, 0, 360);
  
  return `linear-gradient(${Math.round(angle)}deg, hsl(${Math.round(hue1)}, 70%, 80%), hsl(${Math.round(hue2)}, 70%, 90%))`;
}

export function generateOpacityFromNoise(noise, index) {
  const opacityNoise = noise(index * 0.1, 21);
  const opacity = noiseToRange(opacityNoise, 0.8, 1);
  return opacity.toFixed(2);
}

export function generateFontSizeFromNoise(noise, index) {
  const sizeNoise = noise(index * 0.1, 22);
  const size = noiseToRange(sizeNoise, 14, 18);
  return `${Math.round(size)}px`;
}

export function generateLineHeightFromNoise(noise, index) {
  const lineNoise = noise(index * 0.1, 23);
  const lineHeight = noiseToRange(lineNoise, 1.4, 1.8);
  return lineHeight.toFixed(2);
}

export function generateLetterSpacingFromNoise(noise, index) {
  const spacingNoise = noise(index * 0.1, 24);
  const spacing = noiseToRange(spacingNoise, -1, 2);
  return `${spacing.toFixed(1)}px`;
}