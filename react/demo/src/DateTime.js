import React from 'react'

export default function DateTime() {
    function showDateTime() {
        alert(new Date())
    }
    return (
        <>
            <h2>Click on the button to get system date and time!</h2>
            <button onClick={showDateTime}>Show DateTime</button>
            
        </>
    )
}
