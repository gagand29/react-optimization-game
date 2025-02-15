import React, { useState, memo, useCallback, useEffect } from "react";
import "../styles/Level3.css";

// ❌ Unoptimized Student (Rerenders every time function changes)
function UnoptimizedStudent({ subject, giveHomework }) {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    setFlash(true);
    const timer = setTimeout(() => setFlash(false), 500);
    return () => clearTimeout(timer);
  }, [giveHomework]); // Triggers flash when function changes

  console.log("Unoptimized Student Rerendered!");
  
  return (
    <div className={`child-box unoptimized ${flash ? "flash" : ""}`}>
      <h3>Unoptimized Student ❌</h3>
      <p className="subject">Subject: {subject}</p>
      <p className="rerender-msg">🔴 I rerender every time because my function prop changes!</p>
      <button className="homework-btn" onClick={giveHomework}>Do Homework</button>
    </div>
  );
}

// ✅ Optimized Student (Only Updates When Needed)
const OptimizedStudent = memo(({ subject, giveHomework }) => {
  console.log("Optimized Student Rerendered!");
  return (
    <div className="child-box optimized">
      <h3>Optimized Student ✅</h3>
      <p className="subject">Subject: {subject}</p>
      <p className="rerender-msg">🟢 I only rerender when my props change!</p>
      <button className="homework-btn" onClick={giveHomework}>Do Homework</button>
    </div>
  );
});

export default function Level3() {
  const [subject, setSubject] = useState("Math");
  const [count, setCount] = useState(0);

  // ❌ Unoptimized Function (Recreated on Every Render)
  const unoptimizedGiveHomework = () => {
    console.log(`Unoptimized: Homework assigned for ${subject}`);
  };

  // ✅ Optimized Function (Stable Reference with useCallback)
  const optimizedGiveHomework = useCallback(() => {
    console.log(`Optimized: Homework assigned for ${subject}`);
  }, [subject]); // Function only changes if subject changes

  return (
    <div className="level3-container">
      <h1 className="game-title">React Optimization Game</h1>
      <h2 className="level-title">Level 3: Optimizing Functions with useCallback</h2>

      {/* Explanation Section */}
      <div className="explanation">
        <h3 className="problem-heading">🔴 Problem: Functions Are Recreated on Every Render</h3>
        <p>
          Whenever the parent re-renders, the function **giveHomework** is recreated.  
          Even if nothing changes, React thinks it’s a new function!  
          This causes **child components to rerender unnecessarily**.
        </p>

        <h3 className="solution-heading">🟢 Solution: Use <code>useCallback</code></h3>
        <p>
          <strong>useCallback</strong> ensures that the function reference **remains the same**  
          unless its dependencies (like subject) change.
        </p>
      </div>

      {/* Parent Section */}
      <div className="parent-container">
        <div className="parent-box">
          <h3>Teacher (Parent Component)</h3>
          <p>Subject: {subject}</p>
          <button onClick={() => setSubject(subject === "Math" ? "Science" : "Math")} className="subject-btn">
            Change Subject
          </button>
          <button onClick={() => setCount(count + 1)} className="count-btn">
            Increase Count ({count})
          </button>
        </div>
      </div>

      {/* Students Section */}
      <div className="children-wrapper">
        <UnoptimizedStudent subject={subject} giveHomework={unoptimizedGiveHomework} />
        <OptimizedStudent subject={subject} giveHomework={optimizedGiveHomework} />
      </div>

      {/* Navigation */}
      <button className="next-level-button">Next Level ➡️</button>
    </div>
  );
}
