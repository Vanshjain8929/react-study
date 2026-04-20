import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/Themecontext'

const Navbar = () => {
    
    const [theme] = useContext(ThemeDataContext)

  return (
    <div className={theme}>
      <h2>Vansh</h2>
      <Nav2 />
    </div>
  )
}

export default Navbar
