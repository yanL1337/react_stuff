import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

export default Counter;
