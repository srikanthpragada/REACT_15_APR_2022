import React, { Component } from 'react'

export default class Welcome extends Component {
  title =  "React";
  render() {
    return (
       <h1>Welcome to {this.title}</h1>
    )
  }
}
