import React, {useState} from 'react'
import $ from 'jquery'

export default function GithubUserInfo() {
  const[userInfo, setUserInfo] = useState({})
  const username = React.createRef()

  function getInfo() {
      let user = username.current.value
      console.log(user)
  }
  
  return (
    <>
    <h2>Github User Info</h2>
    Username : <input type="text" ref={username} />
    <button onClick={getInfo}>Get Info</button>
    </>
  )
}
