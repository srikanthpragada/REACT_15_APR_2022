import React, {useState, useEffect} from 'react'
import $ from 'jquery'

export default function ShowDateTime2() {
  const [datetime, setDateTime] = useState('')

  useEffect(() => {
        $.get('http://worldclockapi.com/api/json/utc/now',
              response => setDateTime(response.currentDateTime) 
        )
  }, [])

  return (
    <h1>{datetime}</h1>
  )
}
