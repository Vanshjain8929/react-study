import React from 'react'

const App = () => {

  const submithandler = () =>{
    console.log("Form Submitted");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        submithandler();
      }}>
        <input type="text" placeholder='Enter your Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
