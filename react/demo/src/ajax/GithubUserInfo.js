import React, { useState } from 'react'
import $ from 'jquery'

export default function GithubUserInfo() {
  const [userInfo, setUserInfo] = useState({})
  const [done, setDone] = useState(false)
  
  const username = React.createRef()

  function getInfo() {
    let user = username.current.value
    setDone(false)
    $.get(
      {
        url: `https://api.github.com/users/${user}`,
        success: (response) => {
          setUserInfo(response)
          setDone(true)
        },
        error: (error) => {
          setUserInfo(null)
          setDone(true)
        }
      }
    )
  }

  return (
    <>
      <h2>Github User Info</h2>
      Username : <input type="text" ref={username}
        defaultValue="srikanthpragada" />
      <button onClick={getInfo}>Get Info</button>
      <p></p>
      {done && userInfo ? <ShowDetails info={userInfo} /> :
       <ShowError done={done}/> }
    </>
  )
}

function ShowError(props) {
   return props.done? <h4>Sorry! User not found!</h4> : null;
}

function ShowDetails(props) {
  return (
    <>
      {props.info.name}
      <p></p>
      {props.info.company}
      <p></p>
      <img src={props.info.avatar_url} alt="" style={{widht:'200px', height:'200px'}}/>
    </>
  )
}
