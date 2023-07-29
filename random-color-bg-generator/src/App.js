import React, { useState } from 'react';
import './App.css';


function App() {

  const [hex, setHex] = useState("#ffffff");

  function randomHex() {
    const randomhex = "#" + Math.floor(Math.random() * 16777721).toString(16);

    setHex(randomhex);
  }

  return (
    <div className="App" style={{ backgroundColor: `${hex}` }}>
      <h1>{hex}</h1>

      <button onClick={randomHex}>click for new Background</button>

      <button onClick={() => navigator.clipboard.writeText(hex)}>Copy the hex Value</button>

      <h4><a href='https://github.com/fdnakn' target="_blank">Visit my Github Profile</a></h4>

    </div>
  );
}

export default App;