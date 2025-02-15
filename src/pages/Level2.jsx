import React, { useState, memo } from "react";
import "../styles/Level2.css";

// ❌ Unoptimized Child (Rerenders Every Time Parent Updates)
function UnoptimizedStudent({ subject }) {
  console.log("Unoptimized Student Rerendered!");
  return (
    <div className="child-box unoptimized">
      <h3>Unoptimized Student ❌</h3>
      <p className="subject">Subject: {subject}</p>
      <p className="rerender-msg">🔴 I'm rewriting my notebook every time!</p>
    </div>
  );
}

// ✅ Optimized Child (Only Updates When Props Change)
const OptimizedStudent = memo(({ subject }) => {
  console.log("Optimized Student Rerendered!");
  return (
    <div className="child-box optimized">
      <h3>Optimized Student ✅</h3>
      <p className="subject">Subject: {subject}</p>
      <p className="rerender-msg">🟢 I only update when needed!</p>
    </div>
  );
});

export default function Level2() {
  const [unoptimizedSubject, setUnoptimizedSubject] = useState("Math");
  const [optimizedSubject, setOptimizedSubject] = useState("Math");
  const [flashUnoptimized, setFlashUnoptimized] = useState(false);

  // Flash effect to show unnecessary rerendering
  const triggerUnoptimizedRerender = () => {
    setUnoptimizedSubject(unoptimizedSubject === "Math" ? "Science" : "Math");
    setFlashUnoptimized(true);
    setTimeout(() => setFlashUnoptimized(false), 300);
  };

  return (
    <div className="level2-container">
      <h1 className="game-title">React Optimization Game</h1>

      <h2 className="level-title">Level 2: Optimizing Parent-Child Rerenders</h2>

      {/* Explanation Section */}
      <div className="explanation">
        <h3 className="problem-heading">🔴 Problem: Parent Updates Cause Unnecessary Rerenders</h3>
        <p>
          Imagine a teacher updating the board in class. Every student **rewrites their notebooks** even if their subject didn’t change. 
          That’s unnecessary work!
        </p>

        <h3 className="solution-heading">🟢 Solution: Use <code>React.memo</code> for Child Components</h3>
        <p>
          What if students **only updated their notebooks if their subject changed**?  
          <br />**React.memo helps React remember** which student needs an update and which doesn’t!
        </p>

        <h3>📌 Syntax:</h3>
        <pre className="syntax-box">
          {`const OptimizedStudent = React.memo(MyComponent);`}
        </pre>
      </div>

      {/* Parent Section */}
      <div className="parent-container">
        <div className="parent-box">
          <h3>Teacher (Parent Component)</h3>
          <p>Subject: {unoptimizedSubject}</p>
          <button onClick={triggerUnoptimizedRerender} className="unoptimized-btn">
            Update Subject (Unoptimized) 🔴
          </button>
        </div>

        <div className="parent-box">
          <h3>Teacher (Parent Component)</h3>
          <p>Subject: {optimizedSubject}</p>
          <button onClick={() => setOptimizedSubject(optimizedSubject === "Math" ? "Science" : "Math")} className="optimized-btn">
            Update Subject (Optimized) 🟢
          </button>
        </div>
      </div>

      {/* Students Section */}
      <div className="children-wrapper">
        <div className={`child-box unoptimized ${flashUnoptimized ? "flash" : ""}`}>
          <UnoptimizedStudent subject={unoptimizedSubject} />
        </div>
        <div className="child-box optimized">
          <OptimizedStudent subject={optimizedSubject} />
        </div>
      </div>

      {/* Navigation */}
      <button className="next-level-button">Next Level ➡️</button>
    </div>
  );
}
