
import React, {useState} from 'react'

export default function Clock() {
  const [time, setTime] = useState( new Date().toLocaleTimeString())

  setInterval(changeTime, 1000)

  function changeTime() {
      setTime(new Date().toLocaleTimeString())
  }

  return (
     <h1>{time}</h1>
  )
}
