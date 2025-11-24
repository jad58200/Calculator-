import React, { useState } from "react";

function toFixedSafe(n) {
  if (Number.isFinite(n)) return Number(n.toFixed(4)).toString();
  return "NaN";
}

export default function Converter() {
  const [mode, setMode] = useState("bmi");
  const [a, setA] = useState(""); 
  const [b, setB] = useState(""); 
  const [out, setOut] = useState("");

  const run = () => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

if (mode === "bmi") {
  const weight = parseFloat(a.toString().trim());
  let height = parseFloat(b.toString().trim()); 

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    setOut("Enter valid weight (kg) and height (cm)");
    return;
  }

  height = height / 100;

  const bmi = weight / (height * height);

  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  setOut(`${bmi.toFixed(2)} (BMI) — ${category}`);
  return;
}




    if (mode === "kg-lb") {
      if (isNaN(numA)) { setOut("Enter a number"); return; }
      setOut(`${toFixedSafe(numA * 2.2046226218)} lb`);
      return;
    }

    if (mode === "lb-kg") {
      if (isNaN(numA)) { setOut("Enter a number"); return; }
      setOut(`${toFixedSafe(numA / 2.2046226218)} kg`);
      return;
    }

    if (mode === "m-ft") {
      if (isNaN(numA)) { setOut("Enter a number"); return; }
      setOut(`${toFixedSafe(numA * 3.28084)} ft`);
      return;
    }

    if (mode === "ft-m") {
      if (isNaN(numA)) { setOut("Enter a number"); return; }
      setOut(`${toFixedSafe(numA / 3.28084)} m`);
      return;
    }

    if (mode === "c-f") {
      if (isNaN(numA)) { setOut("Enter a number"); return; }
      setOut(`${toFixedSafe((numA * 9) / 5 + 32)} °F`);
      return;
    }

    if (mode === "f-c") {
      if (isNaN(numA)) { setOut("Enter a number"); return; }
      setOut(`${toFixedSafe(((numA - 32) * 5) / 9)} °C`);
      return;
    }

    setOut("Mode not implemented");
  };

  return (
    <div className="page-wrap">
      <div className="card medium">
        <h2>Converter</h2>

        <div className="converter-controls">
          <select value={mode} onChange={(e) => { setMode(e.target.value); setOut(""); setA(""); setB(""); }}>
            <option value="bmi">BMI (weight kg, height m)</option>
            <option value="kg-lb">Mass: kg → lb</option>
            <option value="lb-kg">Mass: lb → kg</option>
            <option value="m-ft">Length: m → ft</option>
            <option value="ft-m">Length: ft → m</option>
            <option value="c-f">Temperature: °C → °F</option>
            <option value="f-c">Temperature: °F → °C</option>
          </select>

          <input
            type="text"
            placeholder={mode === "bmi" ? "Weight (kg)" : "Value"}
            value={a}
            onChange={(e) => setA(e.target.value)}
          />

          {mode === "bmi" && (
            <input
              type="text"
              placeholder="Height (m)"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
          )}

          <button onClick={run} className="btn convert-btn">Convert</button>

          <div className="result-block">
            <strong>Result:</strong>
            <div className="result-value">{out || "-"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
