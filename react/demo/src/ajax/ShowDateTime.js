import React, {useState, useEffect} from 'react'

export default function ShowDateTime() {
  const [datetime, setDateTime] = useState('')

  useEffect(() => {
        fetch('http://worldclockapi.com/api/json/utc/now')
         .then ( response =>  response.json())
         .then ( data =>  setDateTime(data.currentDateTime) )
  }, [])

  return (
    <h1>{datetime}</h1>
  )
}
