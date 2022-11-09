import { useState } from "react";

const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Add</button>
    </div>
  );
};

export default Button;
