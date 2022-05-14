import React from 'react'

export default function DateTime() {
    let info  ='';

    function showDateTime() {
        info = new Date().toString();
    }
    return (
        <>
            <h2>Click on the button to get system date and time!</h2>
            <button onClick={showDateTime}>Show DateTime</button>
            <h2>{info}</h2>
            
        </>
    )
}
