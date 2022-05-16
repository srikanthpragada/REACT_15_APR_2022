import React, { useContext } from 'react'

const MyContext = React.createContext();  // 1

export default function ContextDemo() {
    const details = {course : 'React', trainer : 'Srikanth Pragada'} // 2
    return (
        <MyContext.Provider value={details}>
            <h1>Parent</h1>
            <Child />
        </MyContext.Provider>
    )
}

function Child() {
    return (
        <>
            <h2>Child </h2>
            <GrandChild />
        </>
    )
}

function GrandChild() {
    const details = useContext(MyContext)  // consume context
    return (
        <>
            <h2>Grand Child </h2>
            <h3>Course : {details.course} </h3>
            <h3>Trainer : {details.trainer} </h3>
        </>
    )
}