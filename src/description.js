import React, { Component } from 'react'

export default class Description extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.events.summary}</h4> 
      </div>
    )
  }
}
