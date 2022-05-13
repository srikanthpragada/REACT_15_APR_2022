import React from 'react'

export default function Table2(props) {
    return (
        <>
        <h2>Table for {props.number}</h2>
        <table className="table table-bordered">
             <TableRows number={props.number} />
        </table>
        </>
    )
}

function TableRows(props) {
    let length = props.length
    if (!length)
       length = 10;

    let output = "";
    for(let i = 1; i <= length ; i ++)
     {
         output += <tr>
                        <td>{props.number}</td>
                        <td>{i}</td>
                        <td>{i * props.number} </td>
                  </tr>
     }
     return output;
}
