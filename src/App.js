import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    console.warn(count);
  }, [count == 5]);
  return (
    <div>
      <h1>Hooks in functional Component {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
