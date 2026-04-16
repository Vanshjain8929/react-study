import React, { useState } from 'react'

const App = () => {
  
  const [title, settitle] = useState("")
  const submithandler = () =>{
    console.log("Form Submitted by,",title);
    settitle("");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        submithandler();
      }}>
        <input type="text" placeholder='Enter your Name'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
          // console.log(title);
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
