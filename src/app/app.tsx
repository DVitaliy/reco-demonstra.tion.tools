import { useState } from "react"
import Dashboard from "@/features/dashboard"
import { Button } from "@/shared/ui/kit/button"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <Dashboard />
      </div>
    </>
  )
}

export default App
