// Import react
import React, { useState} from 'react';

function App() {
  const [count, setCount] = useState(0); // React counter state

  return (
    <div className="App">
      <div className="container">
        <p className = "count">{count}</p> {/* Displays counter current state */}
        <button className = "button" onClick = {
          () => setCount(count + 1) /* Updates counter each time it the button gets clicked  */
          }>
            +
        </button>
      </div>
    </div>
  );
}
export default App;
