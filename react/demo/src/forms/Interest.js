
import React, { useState } from 'react'

export default function Interest() {
    const [data, setData] = useState({ amount: 0, rate: 10 , result : 0 })

    function changeAmount(e) {
        // console.log(e)
        let value = e.target.value;
        setData({ ...data,  amount: value })
        console.log(data)
    }

    function changeRate(e) {
        let value = e.target.value;
        setData({ ...data,  rate: value })
    }

    function calculate(e) {
       e.preventDefault()
       let interest =  data.amount * data.rate / 100;
       setData( {...data, result : interest})
    }

    return (
        <>
            <h1>Interest Calculation</h1>
            <form onSubmit={calculate}>
                Amount <br />
                <input type="number" value={data.amount} onChange={changeAmount} />
                <p></p>
                Interest Rate <br />
                <input type="number" value={data.rate} onChange={changeRate} />
                <p></p>
                <button>Calculate</button>
            </form>
            <h2>{data.result}</h2>
        </>
    )
}
