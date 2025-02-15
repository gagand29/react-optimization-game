import React, { useState } from "react";
import "../styles/Level1.css";

export default function Level1() {
  const [count, setCount] = useState(0);

  console.log("Counter Component Rerendered!");

  return (
    <div className="level1-container">
      <h2 className="level-title">Level 1: Understanding Rerenders</h2>

      {/* Explanation Section */}
      <div className="explanation">
        <h3 className="problem-heading">🔴 Problem: Unnecessary Rerenders</h3>
        <p>Whenever state updates, React **rerenders the entire component**, even if nothing else changed!</p>
      </div>

      {/* Counter Component */}
      <div className="counter-box">
        <h3>Counter Component</h3>
        <p className="counter">{count}</p>
        <button
          className="counter-btn"
          onClick={() => setCount(count + 1)}
        >
          Increase Count 🔄
        </button>
        <p className="rerender-msg">🔴 Rerendering every time!</p>
      </div>

      {/* Navigation */}
      <button className="next-level-button">Next Level ➡️</button>
    </div>
  );
}
