import React, { useState } from 'react'

const App = () => {

  const [user, setuser] = useState({name:"Vansh Jain",age:20})

  //Method 1
  // const btnClicked = ()=>{
  //   const newUser={...user};
  //   newUser.name = "Aman";
  //   setuser(newUser);
  // }

  //Method 2
  const btnClicked = ()=>{
    setuser(prev => ({...prev,age:30}));
  }
  return (
    <div>
      <h1>{user.name} is {user.age} years old</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App
