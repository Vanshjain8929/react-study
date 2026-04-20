import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        console.log('theme is changing', props.theme)
        props.setTheme(props.theme === 'light' ? 'dark' : 'light')
      
    }
  return (
    <div>
      <button onClick={changeTheme}>Change theme</button>
    </div>
  )
}

export default Navbar
