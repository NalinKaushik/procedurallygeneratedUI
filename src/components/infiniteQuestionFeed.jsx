import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import QuestionCard from "./questionCard";
import { maingenerator } from "../utils/questionGenerator";
import { generatelayoutnoise, generateThemeFromNoise, noiseGenerator,
    generateBackgroundGradientFromNoise,
    generateBackgroundBlurFromNoise,
    generateBackgroundPatternFromNoise } from "../utils/noiseGeneratorUi";

function InfiniteQuestionFeed({ category, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);

  // Create seeded noise generator
  const noise = useMemo(() => {
    const seed = category.charCodeAt(0) + category.charCodeAt(1);
    return noiseGenerator(seed);
  }, [category]);

  // Generate layout and theme from noise
  const layout = useMemo(() => {
    return generatelayoutnoise(noise, category.charCodeAt(0), window.innerWidth - 40);
  }, [noise, category]);

  const theme = useMemo(() => {
    return generateThemeFromNoise(noise, category.charCodeAt(0));
  }, [noise, category]);

    // Generate questions
    const generateQuestions = useCallback((count) => {
    const newQuestions = [];
    for (let i = 0; i < count; i++) {
      const question = maingenerator(category);
        newQuestions.push(question);
    }
    return newQuestions;
  }, [category]);
    const background = useMemo(() => {
    const gradient = generateBackgroundGradientFromNoise(noise, category.charCodeAt(0));
    const blur = generateBackgroundBlurFromNoise(noise, category.charCodeAt(0));
    const patternValue = generateBackgroundPatternFromNoise(noise, category.charCodeAt(0), category.charCodeAt(1));
    const patternOpacity = (patternValue * 0.1).toFixed(2);
    return {
      gradient,
      blur,
      patternOpacity,
    };
  }, [noise, category]);
  
  
    // Load more questions function
  const loadMoreQuestions = useCallback((count) => {
    setIsLoading(true);
    setTimeout(() => {
      const newQuestions = generateQuestions(count);
      setQuestions((prev) => [...prev, ...newQuestions]);
      setIsLoading(false);
    }, 200);
  }, []);

  // Load initial questions
  useEffect(() => {
    setQuestions([]);
    loadMoreQuestions(8);
  }, [category, loadMoreQuestions]);

  // Infinite scroll listener
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 300 && !isLoading) {
        loadMoreQuestions(5);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [isLoading, loadMoreQuestions]);

  return (
    <div
      ref={containerRef}
      className="infinite-feed"
      style={{
        background: background.gradient,
        backdropFilter: `blur(${background.blur}px)`,
        position: "relative",
      }}
    >
      <div className="feed-header">
        <button className="back-button" onClick={onBack}>← Back</button>
        <div className="header-content">
          <h2>Questions</h2>
          <p>Procedurally generated • Layout: {layout.columns}col • Never repeats</p>
        </div>
      </div>

      <div
        className="questions-grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${layout.columns}, 1fr)`,
          gap: `${layout.spacing}px`,
          padding: "20px",
        }}
      >
        {questions && questions.length > 0 ? (
          questions.map((q, idx) => (
            <QuestionCard
              key={q.id}
              question={q}
              theme={theme}
              cardSize={layout.cardSize}
              noise={noise}
              index={idx}
            />
          ))
        ) : (
          <p>Loading questions...</p>
        )}
      </div>

      {isLoading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Generating questions...</p>
        </div>
      )}
    </div>
  
  );
}

export default InfiniteQuestionFeed;
