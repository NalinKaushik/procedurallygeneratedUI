const questionTemplate = [
     {
    category: "Array",
    template: "Find the maximum sum of {k} consecutive elements in an array of size {n}.",
    difficulty: "Medium"
  },
  {
    category: "Array",
    template: "Rotate an array of {n} elements by {k} positions to the right.",
    difficulty: "Medium"
  },
  {
    category: "Array",
    template: "Find all pairs in an array that sum to {target}.",
    difficulty: "Medium"
  },
  {
    category: "Array",
    template: "Implement a function to find the {kth} smallest element in {n} unsorted array.",
    difficulty: "Hard"
  },
  {
    category: "Array",
    template: "Merge {n} sorted arrays with a total of {elements} elements.",
    difficulty: "Hard"
  },
  {
    category: "Array",
    template: "Find the longest increasing subsequence in an array of {n} elements.",
    difficulty: "Hard"
  },

  // String Questions
  {
    category: "String",
    template: "Check if string {s} is a rotation of string {t}.",
    difficulty: "Medium"
  },
  {
    category: "String",
    template: "Find the longest palindromic substring in '{s}'.",
    difficulty: "Medium"
  },
  {
    category: "String",
    template: "Implement string compression: 'aabbbcccc' becomes '{compressed}'.",
    difficulty: "Medium"
  },
  {
    category: "String",
    template: "Count the frequency of each character in '{text}'.",
    difficulty: "Easy"
  },
  {
    category: "String",
    template: "Reverse words in a string: '{sentence}' becomes '{reversed}'.",
    difficulty: "Easy"
  },
  {
    category: "String",
    template: "Find all anagrams of '{word}' in a dictionary of {dictSize} words.",
    difficulty: "Hard"
  },

  // System Design Questions
  {
    category: "System Design",
    template: "Design a scalable {component} that handles {qps} requests per second with {latency}ms latency.",
    difficulty: "Hard"
  },
  {
    category: "System Design",
    template: "Design a {system} for {useCase} supporting {users} concurrent users.",
    difficulty: "Hard"
  },
  {
    category: "System Design",
    template: "How would you design a distributed cache for a system with {throughput} ops/sec?",
    difficulty: "Hard"
  },
  {
    category: "System Design",
    template: "Design a {service} with {availability}% availability and {rpo} minute RPO.",
    difficulty: "Hard"
  },
  {
    category: "System Design",
    template: "Implement rate limiting for {qps} requests/sec across {servers} servers.",
    difficulty: "Hard"
  },

  // Backend Questions
  {
    category: "Backend",
    template: "Implement a {dataStructure} with O({timeComplexity}) {operation} time complexity.",
    difficulty: "Hard"
  },
  {
    category: "Backend",
    template: "Design a {cacheType} eviction policy that minimizes cache misses for {workload} workload.",
    difficulty: "Hard"
  },
  {
    category: "Backend",
    template: "Optimize a query that currently takes {time}ms for {records} records.",
    difficulty: "Medium"
  },
  {
    category: "Backend",
    template: "Implement consistent hashing for distributed {system} with {nodes} nodes.",
    difficulty: "Hard"
  },
  {
    category: "Backend",
    template: "Design a {protocol} for reliable message delivery across {services} services.",
    difficulty: "Hard"
  },

  // AI/ML Questions
  {
    category: "AI",
    template: "Optimize a {model} model for {constraint} while maintaining {accuracy}% accuracy.",
    difficulty: "Hard"
  },
  {
    category: "AI",
    template: "Implement {algorithm} with {complexity} time complexity for {task}.",
    difficulty: "Hard"
  },
  {
    category: "AI",
    template: "Design a training pipeline for a {modelType} with {dataSize} GB of data.",
    difficulty: "Hard"
  },
  {
    category: "AI",
    template: "Implement feature engineering for {features} features with {correlation} correlation.",
    difficulty: "Medium"
  },
  {
    category: "AI",
    template: "Optimize inference latency from {currentLatency}ms to {targetLatency}ms.",
    difficulty: "Hard"
  },

  // Database Questions
  {
    category: "Database",
    template: "Design a database schema for {useCase} supporting {throughput} transactions per second.",
    difficulty: "Hard"
  },
  {
    category: "Database",
    template: "Optimize a {query} query that scans {rowCount} rows and returns {resultCount} rows.",
    difficulty: "Medium"
  },
  {
    category: "Database",
    template: "Design a partitioning strategy for a {size} GB table with {recordCount} records.",
    difficulty: "Hard"
  },
  {
    category: "Database",
    template: "Implement {indexType} indexing for {columns} columns to improve query performance.",
    difficulty: "Medium"
  },
  {
    category: "Database",
    template: "Design data replication strategy across {regions} regions with {rpo} minute RPO.",
    difficulty: "Hard"
  },

  // Frontend Questions
  {
    category: "Frontend",
    template: "Build a React component that renders {count} items with {feature} optimization.",
    difficulty: "Medium"
  },
  {
    category: "Frontend",
    template: "Implement {pattern} design pattern in React with {features} features.",
    difficulty: "Medium"
  },
  {
    category: "Frontend",
    template: "Optimize page load time from {currentTime}ms to {targetTime}ms.",
    difficulty: "Hard"
  },
  {
    category: "Frontend",
    template: "Design a {component} component with {states} states and {interactions} interactions.",
    difficulty: "Medium"
  },
  {
    category: "Frontend",
    template: "Implement infinite scroll for {itemCount} items with {batchSize} items per batch.",
    difficulty: "Medium"
  },

  // GameDev Questions
  {
    category: "GameDev",
    template: "Create a procedural {type} generator with {features}.",
    difficulty: "Medium"
  },
  {
    category: "GameDev",
    template: "Implement {algorithm} for {mechanic} in a game with {fps} FPS target.",
    difficulty: "Hard"
  },
  {
    category: "GameDev",
    template: "Design collision detection for {objectCount} objects with {updateRate} Hz update rate.",
    difficulty: "Hard"
  },
  {
    category: "GameDev",
    template: "Optimize rendering for {meshCount} meshes and {textureCount} textures.",
    difficulty: "Hard"
  },
  {
    category: "GameDev",
    template: "Implement {feature} that scales from mobile to PC with {variation}x performance difference.",
    difficulty: "Hard"
  },

  // Dynamic Programming Questions
  {
    category: "Dynamic Programming",
    template: "Solve the {problem} problem with O({complexity}) time complexity.",
    difficulty: "Hard"
  },
  {
    category: "Dynamic Programming",
    template: "Implement bottom-up DP for {problem} with {constraint} constraint.",
    difficulty: "Medium"
  },
  {
    category: "Dynamic Programming",
    template: "Find optimal solution for {problem} problem with {limit} items/weight limit.",
    difficulty: "Hard"
  },

  // Graph Questions
  {
    category: "Graph",
    template: "Implement {algorithm} for a graph with {nodes} nodes and {edges} edges.",
    difficulty: "Hard"
  },
  {
    category: "Graph",
    template: "Find shortest path in graph with {nodes} nodes and {negativeEdges} negative edges.",
    difficulty: "Hard"
  },
  {
    category: "Graph",
    template: "Detect cycle in {graphType} graph with {nodes} nodes.",
    difficulty: "Medium"
  },

  // Concurrency Questions
  {
    category: "Concurrency",
    template: "Implement thread-safe {dataStructure} for {concurrency} concurrent threads.",
    difficulty: "Hard"
  },
  {
    category: "Concurrency",
    template: "Design a deadlock-free solution for {problem} with {threads} threads.",
    difficulty: "Hard"
  },
  {
    category: "Concurrency",
    template: "Implement producer-consumer pattern with {producers} producers and {consumers} consumers.",
    difficulty: "Hard"
  },
]

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const parameterGenerator = {
   k: () => Math.floor(Math.random() * 5) + 2,
  n: () => Math.floor(Math.random() * 50) + 10,
  kth: () => Math.floor(Math.random() * 10) + 1,
  target: () => Math.floor(Math.random() * 100) + 10,
  compressed: () => randomChoice(["a2b3c4", "x5y2z1", "p3q4r2"]),
  text: () => randomChoice(["programming", "algorithm", "database", "network"]),
  sentence: () => randomChoice(["hello world test", "code interview prep", "data structure learning"]),
  reversed: () => randomChoice(["test world hello", "prep interview code", "learning structure data"]),
  dictSize: () => Math.floor(Math.random() * 10000) + 1000,
  
  // System Design parameters
  component: () => randomChoice(["load balancer", "cache layer", "message queue", "API gateway", "search engine"]),
  qps: () => Math.floor(Math.random() * 100000) + 1000,
  latency: () => Math.floor(Math.random() * 500) + 50,
  system: () => randomChoice(["video streaming", "social media", "e-commerce", "real-time chat"]),
  users: () => Math.floor(Math.random() * 10000000) + 100000,
  availability: () => (99 + Math.random() * 0.99).toFixed(2),
  rpo: () => Math.floor(Math.random() * 60) + 1,
  servers: () => Math.floor(Math.random() * 1000) + 10,
  
  // Backend parameters
  dataStructure: () => randomChoice(["Stack", "Queue", "Heap", "Trie", "Graph", "BST", "Segment Tree"]),
  timeComplexity: () => randomChoice(["1", "log n", "n", "n log n", "n^2", "2^n"]),
  operation: () => randomChoice(["insert", "delete", "search", "traverse", "update"]),
  cacheType: () => randomChoice(["LRU", "LFU", "FIFO", "ARC", "W-TinyLFU"]),
  workload: () => randomChoice(["read-heavy", "write-heavy", "balanced", "temporal locality"]),
  time: () => Math.floor(Math.random() * 5000) + 100,
  records: () => Math.floor(Math.random() * 1000000) + 10000,
  nodes: () => Math.floor(Math.random() * 100) + 5,
  protocol: () => randomChoice(["TCP", "gRPC", "Kafka", "RabbitMQ", "MQTT"]),
  services: () => Math.floor(Math.random() * 50) + 5,
  
  // AI/ML parameters
  model: () => randomChoice(["LLM", "Vision Transformer", "CNN", "RNN", "BERT", "GPT"]),
  constraint: () => randomChoice(["mobile inference", "real-time performance", "memory efficiency", "latency", "battery life"]),
  accuracy: () => Math.floor(Math.random() * 15) + 85,
  algorithm: () => randomChoice(["Transformer", "Attention", "Backpropagation", "SGD", "Adam"]),
  complexity: () => randomChoice(["O(n log n)", "O(n^2)", "O(n)", "O(log n)"]),
  task: () => randomChoice(["classification", "regression", "clustering", "NLP", "computer vision"]),
  modelType: () => randomChoice(["CNN", "RNN", "Transformer", "VAE", "GAN"]),
  dataSize: () => Math.floor(Math.random() * 1000) + 10,
  features: () => Math.floor(Math.random() * 1000) + 10,
  correlation: () => (Math.random() * 0.8).toFixed(2),
  currentLatency: () => Math.floor(Math.random() * 1000) + 100,
  targetLatency: () => Math.floor(Math.random() * 100) + 10,
  
  // Database parameters
  useCase: () => randomChoice(["e-commerce", "social media", "analytics", "finance", "healthcare"]),
  throughput: () => Math.floor(Math.random() * 100000) + 5000,
  query: () => randomChoice(["SELECT", "UPDATE", "DELETE", "JOIN", "aggregation"]),
  rowCount: () => Math.floor(Math.random() * 100000000) + 1000000,
  resultCount: () => Math.floor(Math.random() * 10000) + 100,
  size: () => Math.floor(Math.random() * 100) + 10,
  recordCount: () => Math.floor(Math.random() * 1000000000) + 1000000,
  indexType: () => randomChoice(["B-Tree", "Hash", "Bitmap", "Full-text", "Covering"]),
  columns: () => Math.floor(Math.random() * 10) + 1,
  regions: () => Math.floor(Math.random() * 5) + 1,
  
  // Frontend parameters
  count: () => Math.floor(Math.random() * 10000) + 100,
  feature: () => randomChoice(["virtual scrolling", "memoization", "code splitting", "lazy loading", "pagination"]),
  pattern: () => randomChoice(["Observer", "Singleton", "Factory", "Strategy", "Context"]),
  features: () => randomChoice(["animations", "responsiveness", "accessibility", "dark mode"]),
  currentTime: () => Math.floor(Math.random() * 5000) + 500,
  targetTime: () => Math.floor(Math.random() * 500) + 50,
  component: () => randomChoice(["Modal", "Carousel", "DataTable", "Form", "Dropdown"]),
  states: () => Math.floor(Math.random() * 10) + 2,
  interactions: () => Math.floor(Math.random() * 5) + 1,
  itemCount: () => Math.floor(Math.random() * 100000) + 1000,
  batchSize: () => Math.floor(Math.random() * 100) + 10,
  
  // GameDev parameters
  type: () => randomChoice(["terrain", "dungeon", "weapon", "NPC behavior", "map", "quest", "biome"]),
  mechanic: () => randomChoice(["physics", "animation", "pathfinding", "AI", "networking"]),
  fps: () => Math.floor(Math.random() * 60) + 30,
  meshCount: () => Math.floor(Math.random() * 10000) + 100,
  textureCount: () => Math.floor(Math.random() * 1000) + 10,
  updateRate: () => Math.floor(Math.random() * 100) + 30,
  objectCount: () => Math.floor(Math.random() * 10000) + 100,
  variation: () => (Math.random() * 50 + 1).toFixed(1),
  
  // DP/Graph/Concurrency parameters
  problem: () => randomChoice(["Knapsack", "LCS", "Edit Distance", "Coin Change", "Climbing Stairs"]),
  constraint: () => randomChoice(["weight", "time", "space", "capacity"]),
  limit: () => Math.floor(Math.random() * 100) + 10,
  algorithm: () => randomChoice(["DFS", "BFS", "Dijkstra", "Bellman-Ford", "Floyd-Warshall"]),
  graphType: () => randomChoice(["directed", "undirected", "weighted", "DAG"]),
  negativeEdges: () => Math.floor(Math.random() * 10) + 0,
  concurrency: () => Math.floor(Math.random() * 100) + 10,
  threads: () => Math.floor(Math.random() * 50) + 2,
  producers: () => Math.floor(Math.random() * 10) + 1,
  consumers: () => Math.floor(Math.random() * 10) + 1,
  edges: () => Math.floor(Math.random() * 100000) + 1000,
};


function randomchoice(arr){
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}


export function maingenerator(){
    const question = randomchoice(questionTemplate);
    let questiontemplate = question.template;

    const kValue = parameterGenerator.k();
    const nValue = parameterGenerator.n();
    questiontemplate = questiontemplate.replace("{k}", kValue);
    questiontemplate = questiontemplate.replace("{n}", nValue);

    return {
        id: Math.random() + Date.now(),
        question: questiontemplate,
        category: question.category,
        difficulty: question.difficulty
    }
}

export function generatequestions(count){
    return(Array.from({length: count}, () => maingenerator()));
}

