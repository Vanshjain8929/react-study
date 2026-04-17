import React from 'react'

const App = () => {
  localStorage.clear();
  const user = {
    name: 'Vansh Jain',
    email: 'vanshj9971@gmail.com'
  };
  localStorage.setItem('user' , JSON.stringify(user));
  return (
    <div>
      App
    </div>
  )
}

export default App
