import { useState } from "react";
import Dashboard from "@/features/dashboard/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Dashboard />
      </div>
    </>
  );
}

export default App;
