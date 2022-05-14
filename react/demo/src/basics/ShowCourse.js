import React from 'react'

export default function ShowCourse(props) {
  
  return (
     <div style={{backgroundColor:'gray'}}>
       <h1>{props.title}</h1>
       <h2>{props.trainer}</h2>
       <h3>Topics</h3>
       <ul>
           {
              props.topics.map( (t) => <li>{t}</li> )
           }
       </ul>
     </div>
  )
}
