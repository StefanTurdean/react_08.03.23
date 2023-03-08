import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <p>The count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count * 2)}>Multiply by 2</button>
      <button onClick={() => setCount(count / 2)}>Divide by 2</button>
      <button onClick={() => setCount(0)}>reset</button>
    </React.Fragment>
  );
};



export default Counter;
