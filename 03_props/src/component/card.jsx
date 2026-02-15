import React from 'react'

const card = (props) => {
    console.log(props)
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}</h1>
        <p>{props.age} years old    </p>
        <button>View profile</button>
      </div>
  )
}

export default card
