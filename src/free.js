import React, { Component } from 'react'
import './index.css'
export default class Free extends Component {
  render() {
    return (
      <div className="Free">
        <h6>{this.props.events.is_free === true ? `Free` : `Not Free` } </h6>
      </div>
    )
  }
}
