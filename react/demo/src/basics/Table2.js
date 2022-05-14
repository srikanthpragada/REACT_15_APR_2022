import React from 'react'

export default function Table2(props) {
    return (
        <>
            <h2>Table for {props.number}</h2>
            <table className="table table-bordered"
                 dangerouslySetInnerHTML =
                    { {__html : tableRows(props.number, props.length) }}>
            </table>
        </>
    )
}

function tableRows(number, length) {
    if (!length)
        length = 10;

    let output = "";
    for (let i = 1; i <= length; i++) {
        output += `<tr><td>${number}</td><td>${i}</td><td>${i * number}</td></tr>`
    }
    return output;
}
