import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Which type of chocolate is your favorite?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          white chocolate {count}
        </button>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          milk chocolate {count}
        </button>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          dark chocolate chocolate {count}
        </button>
        <p>
          Use the buttons to vote!
        </p>
      </div>
      <p className="read-the-docs">
        There's no wrong choice except for white chocolate...
      </p>
    </>
  )
}

export default App
