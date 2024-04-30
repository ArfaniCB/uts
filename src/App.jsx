import { useState } from 'react'
import './App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="home-container">
      <h1>Welcome to Home Page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment count: {count}
        </button>
      </div>
    </div>
  )
}

export default Home
