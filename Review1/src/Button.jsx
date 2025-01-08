import React from 'react'

function Button() {

    

    const handleclick = (e) => e.target.style.display = "none";




  return (
    <button onClick={(e) =>handleclick(e)} > Click me to hide me </button>
  )
}

export default Button