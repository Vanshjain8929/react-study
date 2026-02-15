import React from 'react'
import Card from './component/card'
const App = () => {
  return (
    <div className='parent'>
      <Card  user="vansh jain" age={20} img = "https://images.unsplash.com/photo-1768475965443-800a23634f0c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card  user="Sarthak Sharma" age={24} img= "https://images.unsplash.com/photo-1769406525803-9ea06bd97577?q=80&w=2081&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    </div>
  )
}

export default App
