import React, { useMemo } from "react";
import {
  generateColorFromNoise,
  generateShadowFromNoise,
  generateAnimationFromNoise,
  generateBorderRadiusFromNoise,
  generatePaddingFromNoise,
  generateTransformFromNoise,
  generateGradientFromNoise,
  generateOpacityFromNoise,
  generateFontSizeFromNoise,
  generateLineHeightFromNoise,
  generateLetterSpacingFromNoise,
  generateBackgroundOpacityFromNoise,
  generateBorderWidthFromNoise,
} from "../utils/noiseGeneratorUi";

function QuestionCard({ question, theme, cardSize, noise, index }) {
  // Generate all procedural card styles
  const proceduralStyles = useMemo(() => {
    const borderColor = generateColorFromNoise(noise, index * 0.1, 0);
    const boxShadow = generateShadowFromNoise(noise, index);
    const animation = generateAnimationFromNoise(noise, index);
    const borderRadius = generateBorderRadiusFromNoise(noise, index);
    const padding = generatePaddingFromNoise(noise, index);
    const transform = generateTransformFromNoise(noise, index);
    const opacity = generateOpacityFromNoise(noise, index);
    const borderWidth = generateBorderWidthFromNoise(noise, index);

    return {
      borderColor: borderColor,
      boxShadow: boxShadow,
      animation: `fadeInCard ${animation.duration} ease-out ${animation.delay}`,
      borderRadius: borderRadius,
      padding: padding,
      // transform: transform,
      opacity: opacity,
      borderWidth: borderWidth,
      borderStyle: "solid",
    };
  }, [noise, index]);

  // Generate procedural text styles
  const textStyles = useMemo(() => {
    const fontSize = generateFontSizeFromNoise(noise, index);
    const lineHeight = generateLineHeightFromNoise(noise, index);
    const letterSpacing = generateLetterSpacingFromNoise(noise, index);

    return {
      fontSize: fontSize,
      lineHeight: lineHeight,
      letterSpacing: letterSpacing,
    };
  }, [noise, index]);

  // Generate procedural header styles
  const headerStyles = useMemo(() => {
    const gradient = generateGradientFromNoise(noise, index);
    const bgOpacity = generateBackgroundOpacityFromNoise(noise, index);

    return {
      background: gradient,
      opacity: bgOpacity,
    };
  }, [noise, index]);

  // Difficulty color mapping
  const difficultyColors = {
    "Easy": "#27ae60",
    "Medium": "#f39c12",
    "Hard": "#e74c3c"
  };

  return (
    <div
      className="question-card"
      style={{
        backgroundColor: theme.cardBg,
        minWidth: `${cardSize}px`,
        ...proceduralStyles,
      }}
    >
      {/* Header with gradient background */}
      <div className="card-header" style={headerStyles}>
        <span 
          className="category-badge" 
          style={{ 
            backgroundColor: theme.primary,
            boxShadow: `0 2px 8px ${theme.primary}40`,
          }}
        >
          {question.category}
        </span>
        <span 
          className="difficulty" 
          style={{ 
            color: difficultyColors[question.difficulty],
            textShadow: `0 1px 2px ${difficultyColors[question.difficulty]}20`
          }}
        >
          {/* {question.difficulty} */}
        </span>
      </div>

      {/* Question text with procedural typography */}
      <div className="card-body">
        <p className="question-text" style={textStyles}>
          {question.text}
        </p>
      </div>

      {/* Footer with solve button */}
      <div className="card-footer">
        <button 
          className="solve-btn" 
          style={{ 
            backgroundColor: theme.primary,
            boxShadow: `0 4px 12px ${theme.primary}40`,
          }}
        >
          Solve →
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;