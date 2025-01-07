import React from 'react'

function UserGreeting(props) {

    const msg1 = <h2> Welcome {props.username}</h2>
    const msg2 = <h2> You need to Login </h2>

    return (props.isLoggedIn 
    ? msg1
    : msg2 )
   
    
    
  }

  UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest"

  }


export default UserGreeting