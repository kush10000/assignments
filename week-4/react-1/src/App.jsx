import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //this is how you define state variables in react.react calls document lib functions and does dom manipulation under the hood
  return (
    <div>
      
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
         
    </div>
  )
}

export default App
