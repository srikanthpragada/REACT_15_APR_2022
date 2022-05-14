
import React from 'react'

export default class Counter2 extends React.Component {
    constructor() {
        super()
        this.state = { counter: 0 }
        // This binding is necessary to make `this` work in the callback
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement() {
        this.setState({ counter: this.state.counter - 1 })
    }

    reset() {
        this.setState({ counter: 0 })
    }

    render() {
        return (
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Increment </button>
                <button onClick={this.decrement}>Decrement </button>
                <button onClick={this.reset}>Reset </button>
            </>
        )
    }
}
