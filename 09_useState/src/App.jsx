import React, { useState } from 'react'


const App = () => {
  const [num, setNum] = useState(0);

  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }
  function jumpBy5() {
    setNum(num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jumpBy5}>Jump by 5</button>
    </div>
  )
}

export default App

