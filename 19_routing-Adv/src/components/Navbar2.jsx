import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
    <div className='py-2 px-5 bg-cyan-800'>
      <button 
        className=' font-medium bg-amber-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' onClick={()=>{
        navigate('/')
        }}>
        Return to Home Page
     </button>
      <button
        className=' font-medium bg-amber-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' onClick={()=>{
        navigate(-1)
        }}>
        Back
     </button>
        <button
        className=' font-medium bg-amber-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95' onClick={()=>{
        navigate(+1)
        }}>
        Forward
     </button>
    </div>
  )
}

export default Navbar2
