import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Which type of chocolate is your favorite?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          White chocolate {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Milk chocolate {count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Dark chocolate {count}
        </button>
      </div>
      <p>
        Use the buttons to vote!
      </p>
      <p className="read-the-docs">
        There's no wrong choice except for white chocolate...
      </p>
    </>
  );
}

export default App;
