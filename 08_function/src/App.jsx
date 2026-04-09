import React from 'react'

const App = () => {

  function inputchange(val){
    console.log(val);
  }

  return (
    <div>
      <input onChange={function(e){
        inputchange(e.target.value);
      }} type="text" placeholder='Enter Name' />
    </div>
  )
}

export default App
