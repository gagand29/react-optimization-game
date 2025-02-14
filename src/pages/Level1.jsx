import React, { useState, useEffect, memo } from "react";
import "../styles/Level1.css";

// ❌ Unoptimized Counter (Rerenders every time)
function UnoptimizedCounter({ count }) {
  console.log("UnoptimizedCounter Rerendered!");
  return (
    <div className="counter-box unoptimized">
      <h3>Unoptimized ❌</h3>
      <p className="counter">{count}</p>
      <p className="rerender-msg">🔴 Rerendering everything!</p>
    </div>
  );
}

// ✅ Optimized Counter (Only updates when props change)
const OptimizedCounter = memo(({ count }) => {
  console.log("OptimizedCounter Rerendered!");
  return (
    <div className="counter-box optimized">
      <h3>Optimized ✅</h3>
      <p className="counter">{count}</p>
      <p className="rerender-msg">🟢 Only updating number!</p>
    </div>
  );
});

export default function Level1() {
  const [unoptimizedCount, setUnoptimizedCount] = useState(0);
  const [optimizedCount, setOptimizedCount] = useState(0);
  const [flashUnoptimized, setFlashUnoptimized] = useState(false);

  // Flash effect for unoptimized counter
  useEffect(() => {
    if (flashUnoptimized) {
      const timer = setTimeout(() => setFlashUnoptimized(false), 300);
      return () => clearTimeout(timer);
    }
  }, [flashUnoptimized]);

  return (
    <div className="level1-container">
    <h2 className="level-title">Level 1: Understanding Rerenders</h2>
  
    {/* Problem, Solution & Syntax Section */}
    <div className="explanation">
      <h3 className="problem-heading">Problem: Unnecessary Rerenders</h3>
      <p>
        In React, when a <strong>parent component updates</strong>, all its child components
        <strong> rerender</strong>, even if their data hasn't changed.
      </p>
  
      <h3 className="solution-heading">Solution: Use <code>React.memo</code></h3>
      <p>
        Wrapping components with <code>React.memo</code> prevents them from
        rerendering unless their props change.
      </p>
  
      <h3>📌 Syntax:</h3>
      <pre className="syntax-box">
        {`const OptimizedComponent = React.memo(MyComponent);`}
      </pre>
    </div>
  
    {/* Counter UI Showcase */}
    <div className="counter-wrapper">
      {/* Unoptimized Counter */}
      <div className={`counter-box unoptimized ${flashUnoptimized ? "flash" : ""}`}>
        <h3>Unoptimized ❌</h3>
        <p className="counter">{unoptimizedCount}</p>
        <p className="rerender-msg">🔴 Rerendering everything!</p>
        <button
          className="unoptimized-btn"
          onClick={() => {
            setUnoptimizedCount(unoptimizedCount + 1);
            setFlashUnoptimized(true);
          }}
        >
          Increase (Unoptimized)
        </button>
      </div>
  
      {/* Optimized Counter */}
      <div className="counter-box optimized">
        <h3>Optimized ✅</h3>
        <p className="counter">{optimizedCount}</p>
        <p className="rerender-msg">🟢 Only updating number!</p>
        <button
          className="optimized-btn"
          onClick={() => setOptimizedCount(optimizedCount + 1)}
        >
          Increase (Optimized)
        </button>
      </div>
    </div>
  </div>
  
  );
}
