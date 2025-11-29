
<h1>Procedural Question Generator with Perlin Noise UI</h1>
An infinite interview question generator where every UI element is procedurally generated using Perlin noise algorithms.

🎨 Live Demo(Not yet Active) | 🐙 GitHub
<img width="1020" height="635" alt="proceduralnoisetoUi" src="https://github.com/user-attachments/assets/dfcc62ab-7c99-41bb-bc03-c72023b7bd6d" />
<img width="403" height="432" alt="perlinnoisebeforeweb" src="https://github.com/user-attachments/assets/c9a8e627-c761-42d4-ae39-eb7df89a998a" />

<h2>🌟 What Makes This Special></h2>

Instead of hand-crafting UI variations, this project uses Perlin noise to algorithmically generate:

Responsive Layouts - Grid columns (1-3), spacing, card sizes

Visual Design - Border colors, shadows, border radius, padding

Typography - Font sizes, line heights, letter spacing

Animations - Fade-in durations and delays (staggered)

Background Styling - Gradients, blur effects, opacity

Everything stays coherent and on-brand

Result: Infinite visual variety from one algorithm. Every visit is unique.

<h2>🚀 Key Features</h2>
<h3>1. Procedural UI Generation</h3>
27 noise functions that map to UI properties

Each function samples Perlin noise at different "dimensions"

Same algorithm, infinitely different outputs

Seeded by category for consistency

<h3>2. Infinite Question Generation</h3>
40+ question templates across 11 categories

Parameterized with procedural values

Never generates the same question twice

Categories: Array, String, System Design, Backend, AI, Database, Frontend, GameDev, Dynamic Programming, Graph, Concurrency

<h3>3. Responsive & Beautiful</h3>
Mobile-friendly infinite scroll

Glassmorphic effects with procedural blur

Smooth animations and transitions

Professional color schemes

<h3>4. Interactive Noise Visualizer</h3>
See the raw Perlin noise that drives everything

Educational breakdown of noise → UI mapping

Beautiful canvas-based visualization

<h2>📦 Tech Stack</h2>

<h3>Frontend:</h3>
├── React 18+ (hooks, useMemo, useCallback)
├── Simplex Noise (procedural generation)
├── CSS3 (gradients, animations, flexbox/grid)
└── React Router (navigation)

<h3>Utilities:</h3>
├── Perlin/Simplex noise for procedural values
├── HSL color generation
├── Responsive layout calculations
└── Algorithmic animation timing

<h2>🎯 Installation</h2>
Prerequisites
Node.js 14+

npm or yarn

<h3>Setup</h3>
bash
# Clone repository
git clone https://github.com/your-username/procedural-question-generator.git
cd procedural-question-generator

# Install dependencies
npm install

# Install noise library
npm install simplex-noise

# Start development server
npm start
App runs on http://localhost:3000

<h2>📁 Project Structure</h2>

src/
├── components/
│   ├── CategorySelector.jsx      # Category buttons
│   ├── InfiniteQuestionFeed.jsx   # Main feed with infinite scroll
│   ├── QuestionCard.jsx          # Individual card with procedural styling
│   └── NoiseVisualizer.jsx       # Perlin noise visualization
│
├── utils/
│   ├── noiseUIGenerator.js       # 27 procedural generation functions
│   └── questionGenerator.js      # Question template + parameters
│
|
│── App.css                   # Component styles + animations
│
└── App.jsx                        # Main app component


<h2>🎨 How Procedural Generation Works</h2>
The Algorithm
Every UI property is generated from Perlin noise using this pattern:

javascript
// Generic formula
value = noise(index * 0.1, propertyDimension)
mappedValue = map(value, [-1, 1], [minRange, maxRange])

// Example: Border radius
borderRadius = noise(cardIndex * 0.1, 14)  // Dimension 14
borderRadiusPx = map(borderRadius, [-1, 1], [4, 16])  // Result: 4-16px

// Example: Animation duration
duration = noise(cardIndex * 0.1, 9)       // Dimension 9
durationSeconds = map(duration, [-1, 1], [0.3, 1.5])  // Result: 0.3-1.5s
Dimensions (Noise Sampling Coordinates)
Each dimension produces a different value:

Dimension	Property	Range
0-2	Layout (columns, spacing, size)	Varies
6-8	Shadow (offset, blur, opacity)	Varies
9-10	Animation (duration, delay)	0.3-1.5s
11-13	Theme (colors)	0-360° hue
14	Border radius	4-16px
15	Padding	12-24px
16-17	Transform (rotate, scale)	-2 to 2°
18-20	Gradient (colors, angle)	Varies
21	Opacity	0.8-1
22	Font size	14-18px
23	Line height	1.4-1.8
24	Letter spacing	-1 to 2px
30-36	Background (color, gradient, blur)	Varies


<h2>💡 Key Concepts</h2>

<h3>Perlin Noise</h3>
Smooth, organic randomness not pure random

Seeded - same input = same output

Scalable - infinite zoom levels

Natural-looking - no jarring transitions

<h3>Procedural Design</h3>
Algorithmic instead of manual

Parametric - change ranges, get different outputs

Composable - combine multiple noise samples

Scalable - infinite variations, constant code

<h3>Infinite Scroll</h3>
Lazy loads questions as user scrolls

Generates new questions on-demand

8 initial questions, 5 per batch

No duplicate questions (procedurally unique IDs)

<h2>🎮 Usage</h2>
View Questions by Category
Open the app at http://localhost:3000

Click any category button (Array, String, System Design, etc.)

See procedurally generated questions with unique layouts

Scroll down to load more questions

Customize Procedural Parameters
Edit src/utils/noiseUIGenerator.js to change ranges:

javascript
// Example: Make shadows more dramatic
export function generateShadowFromNoise(noise, index) {
  const offsetY = noiseToRange(offsetNoise, 2, 10);  // Change range
  const blur = noiseToRange(blurNoise, 5, 20);       // Change range
  // ...
}

// Example: Make fonts larger
export function generateFontSizeFromNoise(noise, index) {
  const size = noiseToRange(sizeNoise, 16, 24);      // Was 14-18px, now 16-24px
  return `${Math.round(size)}px`;
}



<h2>📊 Features Explained</h2>
1. Category-Based Seeding
Each category gets a unique personality from seeded noise:

javascript
const seed = category.charCodeAt(0) + category.charCodeAt(1);
const noise = createNoiseGenerator(seed);
Array category → blue-ish theme
System Design category → purple-ish theme
GameDev category → green-ish theme

2. Question Templates with Parameters
40+ templates with placeholders that get filled procedurally:

javascript
{
  category: "System Design",
  template: "Design a scalable {component} that handles {qps} requests per second",
  difficulty: "Hard"
}

// Generates:
// "Design a scalable load balancer that handles 45000 requests per second"
// "Design a scalable message queue that handles 82000 requests per second"
// (every time, different values)
3. Infinite Scroll with Lazy Loading
javascript
// Load initial questions
useEffect(() => {
  loadMoreQuestions(8);
}, [category]);

// Load more on scroll
const handleScroll = () => {
  if (scrollTop + clientHeight >= scrollHeight - 300) {
    loadMoreQuestions(5);
  }
};
4. Staggered Animations
Each card fades in with procedurally unique timing:

javascript
const animation = generateAnimationFromNoise(noise, index);
// Card 1: fade in for 0.45s with 0.1s delay
// Card 2: fade in for 0.82s with 0.3s delay
// Card 3: fade in for 0.61s with 0.05s delay



<h2>🎨 Design System</h2>
Built with a procedural color palette:

css
--color-primary: hsl(h, 70%, 50%)     /* Generated per category */
--color-bg: hsl(0, 0%, 94-98%)        /* Generated per category */
--color-text: #222
--color-focus-ring: rgba(102, 126, 234, 0.4)
All colors procedurally generated from Perlin noise, ensuring harmony.

<h2>📈 Performance</h2>
React Hooks for efficient re-renders

useMemo for expensive calculations

Lazy component loading for infinite scroll

Canvas-based noise visualization (not WebGL)

Mobile optimized responsive grid


<h2>📚 Learning Resources</h2>

<h3>Perlin/Simplex Noise:</h3>

Ken Perlin's Original Paper

The Noise Handbook

<h3>Procedural Generation:</h3>

Procedural Content Generation Wiki

Game Dev Procedural Generation

<h3>React Patterns:</h3>

React Hooks Documentation

Performance Optimization

<h2>🔄 Future Enhancements</h2>
 Custom difficulty filters

 User solution submissions

 Leaderboard & statistics

 Dark mode (procedurally themed)

 Export questions as PDF

 Integration with LeetCode/HackerRank APIs

 Browser extension for on-demand questions

 More question categories

 Community-submitted questions

 AI-generated hint system

<h2>🤝 Contributing</h2>
Contributions welcome! Areas to improve:

Add more question templates

Optimize noise generation performance

Improve mobile responsiveness

Add more procedural properties

Bug fixes and optimizations

bash
# Fork the repo
# Create feature branch: git checkout -b feature/amazing-feature
# Commit changes: git commit -m 'Add amazing feature'
# Push to branch: git push origin feature/amazing-feature
# Open Pull Request
📝 License
MIT License - feel free to use for personal or commercial projects.

<h2>🙋 FAQ</h2>
Q: How is this different from a regular question generator?
A: Every UI element is procedurally generated. The layout, colors, shadows, animations, typography—everything varies algorithmically while staying cohesive.

Q: Can I use this for interview prep?
A: Yes! 40+ templates across 11 categories provide realistic interview questions. Use it to practice system design, coding problems, and more.

Q: How do I customize the procedural generation?
A: Edit the ranges in src/utils/noiseUIGenerator.js. Change noiseToRange(noise, 4, 16) to noiseToRange(noise, 8, 20) and border radius will be larger.

Q: What if I want static questions?
A: Modify generateQuestions() in questionGenerator.js to use fixed values instead of procedural ones. Or use a database of pre-written questions.

Q: Can I add dark mode?
A: Yes! Create a procedural dark theme by adjusting HSL ranges. Currently supports system preference detection.

<h2>👨‍💻 Author</h2>
Built by Nalin Kaushik

🔗 LinkedIn:(https://www.linkedin.com/in/nalin-kaushik-245a52230/)

🐙 Github:(https://github.com/NalinKaushik)

🌐 Portfoli:(https://iamdev.my-style.in)

<h2>📞 Support</h2>
Have questions? Issues? Feature requests?

Open an Issue on GitHub

Email: nalinkaushik4184@gmail.com


<h2>⭐ Show Your Support</h2>
If this project helped you or you find it interesting, please give it a ⭐ on GitHub!

<h2>🎓 What I Learned</h2>
Building this project taught me:

✅ Advanced React patterns and performance optimization

✅ Perlin noise algorithms and procedural generation

✅ Algorithmic UI design and systems thinking

✅ Infinite scroll architecture

✅ Canvas-based data visualization

✅ Responsive web design at scale

✅ Project structure and code organization
