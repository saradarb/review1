import React from 'react'
import { useState } from 'react'


//Make a button that counts how many times it has been clicked. Display the count on the screen.

function Problem2() {


    const [number, setNumber] = useState(0)

    const funclick = () => {
        setNumber(number + 1)
    }



  return (
    <div>
        <button onClick={funclick} > You clicked me {number}</button>






    </div>
  )
}

export default Problem2