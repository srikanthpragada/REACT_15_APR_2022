import React from 'react'

export default function Course() {
  let title = "React Programming"
  let trainer = "Srikanth Pragada"
  let topics = ["Components", "State Management", "Forms", "AJAX", "Routing"]

  return (
     <div style={{backgroundColor:'gray'}}>
       <h1>{title}</h1>
       <h2>{trainer}</h2>
       <h3>Topics</h3>
       <ul>
           {
              topics.map( (t) => <li>{t}</li> )
           }
       </ul>
     </div>
  )
}
