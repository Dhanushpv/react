import { useState } from 'react';

function UseStateComponent() {
  console.log("UseStateComponent rendering.....");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1); // Correct way to update the count
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}

export default UseStateComponent;
