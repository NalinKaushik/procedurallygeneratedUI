import React, { useState } from "react";
import CategorySelector from "./components/categorySelector";
import InfiniteQuestionFeed from "./components/infiniteQuestionFeed";
import NoiseVisualizer from "./components/noisevisulizer";
import './App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  return (
    <div className="app">
      {!selectedCategory ? (
        <CategorySelector onSelectCategory={setSelectedCategory} />
      ) : (
        <InfiniteQuestionFeed 
          category={selectedCategory} 
          onBack={() => setSelectedCategory(null)}
        />
      )}
        <NoiseVisualizer/>

      </div>
  );
}

export default App;
