
import React from 'react'

export default function Table(props) {
    let num = props.number
    let length = 10 
    let results = []
    for(let i = 1; i <= length ; i ++)
       results.push(i)
    
    return (
        <>
        <h2>Table for {num}</h2>
        <table className="table table-bordered">
            {
                results.map( (r) =>
                   <tr>
                        <td>{num}</td>
                        <td>{r}</td>
                        <td>{r * num} </td>
                  </tr>
                )
            }
        </table>
        </>
    )
}
