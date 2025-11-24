import React, { useState } from "react";
function preprocessExpression(expr) {
  if (!expr) return "";
  expr = expr.replace(/√\(/g, "Math.sqrt(");
  expr = expr.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");
  expr = expr.replace(/\^/g, "**");
  expr = expr.replace(/sin\(([^)]+)\)/g, "Math.sin(($1) * Math.PI/180)");
  expr = expr.replace(/cos\(([^)]+)\)/g, "Math.cos(($1) * Math.PI/180)");
  expr = expr.replace(/tan\(([^)]+)\)/g, "Math.tan(($1) * Math.PI/180)");
  expr = expr.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
  return expr;
}

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const add = (v) => setInput((s) => s + v);

  const backspace = () => setInput((s) => s.slice(0, -1));
  const clear = () => {
    setInput("");
    setResult("");
  };

  const evaluate = () => {
    if (!input.trim()) return;
    try {
      const jsExpr = preprocessExpression(input);
    
      const value = Function(`"use strict"; return (${jsExpr})`)();
      setResult(String(value));
    } catch (e) {
      setResult("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "%", "+"
  ];

  const sciButtons = [
    { label: "(", val: "(" },
    { label: ")", val: ")" },
    { label: "x²", val: "**2" },
    { label: "x³", val: "**3" },
    { label: "^", val: "^" },
    { label: "√", val: "√(" },
    { label: "sin", val: "sin(" },
    { label: "cos", val: "cos(" },
    { label: "tan", val: "tan(" },
    { label: "π", val: String(Math.PI) },
    { label: "e", val: String(Math.E) },
    { label: "←", val: "BACK" },
  ];

  const clearEntry = () => setInput("");


  return (
    <div className="page-wrap">
      <div className="card large">
        <h2>Calculator</h2>

        <div className="display-grid">
            <div className="expression-wrapper">
                <div className="expression">{input || "0"}</div>
                <button className="btn small-btn" onClick={backspace}>⌫</button>
            </div>
            <div className="result-large">{result || "-"}</div>
        </div>

        <div className="expression-wrapper">
            <div className="expression">{input || "0"}</div>
            <div className="top-buttons">
                <button className="btn small-btn" onClick={backspace}>⌫</button>
                <button className="btn small-btn" onClick={clearEntry}>CE</button>
            </div>
        </div>


        <div className="sci-row">
          {sciButtons.map((b, i) => (
            <button
              key={i}
              className="btn sci"
              onClick={() => {
                if (b.val === "BACK") backspace();
                else setInput((s) => s + b.val);
              }}
            >
              {b.label}
            </button>
          ))}
        </div>

        <div className="grid-row">
          {buttons.map((b) => (
            <button key={b} className="btn" onClick={() => add(b)}>{b}</button>
          ))}
        </div>

        <div className="controls">
          <button className="btn action" onClick={clear}>Clear</button>
          <button className="btn action" onClick={() => { setInput((s) => s + "*"); }}>×</button>
          <button className="btn action" onClick={() => { setInput((s) => s + "/"); }}>/</button>
          <button className="btn calc" onClick={evaluate}>=</button>
        </div>
        <footer className="home-footer">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          <div><h3>By Eng. Jad Alromhein</h3></div>
        </footer>
      </div>
    </div>
  );
}
