import React from 'react'
import { useState } from 'react';


//Create a component with a button that toggles the text between "Light ON" and "Light OFF" when clicked

function counter() {


 
    const [change, setChange] = useState("Light ON")


    const changeButton = () => {
        setChange((theChange) => {
             return theChange === "Light ON" ? "Light OFF" : "Light ON";
    })



    };

    


  return (
    <div>
    <button onClick={changeButton} > {change} </button>
   
    </div>
  )
}

export default counter