
import React, { useState } from 'react'

export default function Counter() {
    let [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
        console.log(counter)
    }

    function reset() {
        setCounter(0)
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment}>Increment </button>
            <button onClick={decrement}>Decrement </button>
            <button onClick={reset}>Reset </button>
        </>
    )
}
