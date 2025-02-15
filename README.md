# 🚀 React Optimization Game

An interactive React game that visually demonstrates component re-renders and optimization techniques using **React.memo, useCallback, and useMemo**.

## 📌 What is This?
This project is designed to **teach beginners and advanced developers** how to **reduce unnecessary re-renders** in React applications. It provides:

✅ A visual representation of **how components re-render**  
✅ Interactive buttons to **see optimization in action**  
✅ Real-world examples of using **React.memo, useCallback, and useMemo**  
✅ A fun way to **learn performance optimizations**  

## 🎯 Features
- **Unoptimized vs. Optimized Components** side by side
- **Flashing indicators** for unnecessary re-renders
- **Clear explanations** and **real-world examples**
- **Interactive learning** for beginners & experts
- **Step-by-step levels** to progress from basic to advanced concepts
- **Code Examples & Syntax Hints** for easy understanding

## 🛠 Tech Stack
- **React + Vite** for fast development  
- **Tailwind CSS** for styling  
- **JavaScript (ES6+)** for logic  
- **React.memo, useCallback, useMemo** for optimizations  

## 📌 Levels Overview
### **Level 1: Understanding Rerenders**
- 🔴 **Problem:** Every state update causes a **full component re-render**
- 🟢 **Solution:** Identify when unnecessary renders occur
- ✨ **Visualization:** Counter component flashes to show re-renders

### **Level 2: Optimizing Parent-Child Renders**
- 🔴 **Problem:** Child components re-render even if props don’t change
- 🟢 **Solution:** Use **React.memo** to optimize child components
- ✨ **Visualization:** Side-by-side comparison of unoptimized vs. optimized children

### **Level 3: Optimizing Function Props**
- 🔴 **Problem:** Functions passed as props cause child components to re-render
- 🟢 **Solution:** Use **useCallback** to stabilize function references
- ✨ **Visualization:** Compare performance with function memoization

### **Level 4 (Coming Soon!): Optimizing Derived State & useMemo**
- 🔴 **Problem:** Expensive calculations run on every render
- 🟢 **Solution:** Use **useMemo** to cache computed values
- ✨ **Visualization:** Show optimized vs. unoptimized computation

## 🚀 Getting Started
### 📌 **Install & Run Locally**
```sh
git clone https://github.com/gagand29/react-optimization-game.git
cd react-optimization-game
npm install
npm run dev
```

### 🛠 **Folder Structure**
```
/react-optimization-game
│── /src
│   ├── /components       # Reusable components
│   ├── /levels           # Different levels of optimization
│   ├── /styles           # CSS and Tailwind files
│   ├── App.js            # Main entry point
│   ├── index.js          # ReactDOM rendering
│── /public               # Static assets
│── package.json          # Dependencies
│── README.md             # Documentation
```

## 🤝 Contributing
Contributions are welcome! Feel free to submit a PR or open an issue.

## 📜 License
This project is licensed under the MIT License.

---
🚀 **Happy Coding!**
