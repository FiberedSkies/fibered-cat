import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Twitter } from 'lucide-react';

// The lil' star pixel
const PixelStar = ({ x, y, size, delay }) => {
  return (
    <div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animation: `twinkle ${2 + Math.random() * 2}s infinite ${delay}s`,
      }}
    >
      <div
        className="bg-white"
        style={{
          width: size,
          height: size,
          boxShadow: `0 0 ${size / 2}px rgba(255, 255, 255, 0.8)`,
        }}
      />
    </div>
  );
};

// The background starfield
const StarField = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const starCount = 50;
    const newStars = Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 3,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <PixelStar key={star.id} {...star} />
      ))}
    </div>
  );
};

// Basic "terminal-like" container with the colored dots
const TerminalWrapper = ({ children }) => (
  <div className="max-w-3xl mx-auto relative">
    <div className="bg-black bg-opacity-90 border border-green-500 rounded-lg p-4 m-4">
      <div className="flex items-center mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <div className="font-mono text-green-500 whitespace-pre-wrap">{children}</div>
    </div>
  </div>
);

// Navigation as though typed into a terminal
const TerminalNav = () => {
  return (
    <div className="mb-4 border-b border-green-500 pb-2 px-2">
      <Link to="/" className="text-green-500 hover:text-green-400 mr-4">
        > home
      </Link>
      <Link to="/about" className="text-green-500 hover:text-green-400 mr-4">
        > about
      </Link>
      <Link to="/blurb" className="text-green-500 hover:text-green-400">
        > blurb
      </Link>
    </div>
  );
};

// Home page with quick summary, social links
const Home = () => {
  return (
    <TerminalWrapper>
      <TerminalNav />
      <pre>
{`visitor@terminal:~$ whoami
sushi 🍣 - Automation Researcher | Applied Mathematics

visitor@terminal:~$ echo "Quick Summary"
Currently working on:
- Malware Automation Research
- Applied Mathematics
- Some fun side projects in Geometric Deep Learning
`}
      </pre>
      <div className="mt-4 flex space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-green-500 hover:text-green-400"
        >
          <Github size={20} />
          <span>GitHub</span>
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-green-500 hover:text-green-400"
        >
          <Twitter size={20} />
          <span>Twitter</span>
        </a>
      </div>
    </TerminalWrapper>
  );
};

// About page
const About = () => {
  return (
    <TerminalWrapper>
      <TerminalNav />
      <pre>
{`visitor@terminal:~$ cat about.txt
Currently focused on malware automation research.
Background in applied mathematics with ongoing interests in:
- Computational Algebraic Geometry
- Geometric Deep Learning
- More weird math stuff
`}
      </pre>
    </TerminalWrapper>
  );
};

// Blurb page (just a random text or "blog" post kind of info)
const Blurb = () => {
  return (
    <TerminalWrapper>
      <TerminalNav />
      <pre>
{`visitor@terminal:~$ cat blurb.txt
"It's not just about the code. It's about the idea that behind every line, there's a mind that loves to solve problems."
- Sushi 🍣
`}
      </pre>
    </TerminalWrapper>
  );
};

// Main App
const App = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <style jsx global>{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
        body {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <StarField />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blurb" element={<Blurb />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
