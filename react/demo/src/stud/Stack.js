import React, { useState } from 'react'

export default function Stack() {
    let [names, setNames] = useState([]);
    const [name, setName] = useState("")

    function changeName(e) {
        setName(e.target.value)
    }

    function addName() {
        setNames([...names, name]);
        setName("")
    }

    function removeName() {
        setNames([...names.slice(0, names.length - 1)])
    }
    
    return (
        <>
            <div>
                <label>Name:</label>
                <input type="text" id="name" value={name}
                    onChange={changeName} />
            </div>
            <p></p>
            <div>
                <button onClick={addName}>Push</button>
                <button onClick={removeName}>Pop</button>
            </div>
            <p></p>
            {names.length > 0 ? <ListNames names={names} /> : null}
        </>
    )
}

function ListNames(props) {
    return (
        <>
            <h3>Names List</h3>
            {props.names.length} names
            <ul>
                {props.names.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>

        </>
    )
}