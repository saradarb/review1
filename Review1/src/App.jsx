import React from 'react'
import Student from './Student'




function App() {
  return (
    <>
    <Student name="Spongebob" age={30} isStudent={false} />
    <Student name="Zion" age={13} isStudent={true} />
    <Student />


    </>
  )
}

export default App
