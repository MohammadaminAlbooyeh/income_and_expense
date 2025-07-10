
import React, { useState } from "react";
import "./CounterBoxes.css";

const CounterBoxes = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center", justifyContent: "center", marginTop: 40 }}>
      {/* Box 1 */}
      <div className="counter-box">
        <div className="counter-value">{count1}</div>
        <div className="counter-actions">
          <button className="plus-btn" onClick={() => setCount1(count1 + 1)}>+</button>
          <button className="minus-btn" onClick={() => setCount1(count1 - 1)}>-</button>
        </div>
      </div>
      {/* Box 2 */}
      <div className="counter-box">
        <div className="counter-value">{count2}</div>
        <div className="counter-actions">
          <button className="plus-btn" onClick={() => setCount2(count2 + 1)}>+</button>
          <button className="minus-btn" onClick={() => setCount2(count2 - 1)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CounterBoxes;
