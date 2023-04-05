import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);

  const increment = () => {
    setcount(count + 1);
  };
  const decrement = () => {
    setcount(count -1);
  };
  return (
    <div>
      <button onClick={increment}>increment</button>
      {count}
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default Counter;
