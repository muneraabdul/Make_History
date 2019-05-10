import React, { Component } from 'react'
import './index.css'
export default class Nav extends Component {
  state = {}
  handleChange =e=> {
    this.setState({value:e.target.value})
  }
  submit=()=>{
    this.props.search(this.state.value)
  }
  render() {
    return (
      <div>
         
          <nav className="Header" >
          <button onClick={this.submit} className="searchLocation"> Search </button>
        <input onChange={this.handleChange} className="Location" placeholder="Enter Your Location"></input>
        
        
    
          </nav>

           
       
      </div>
    )
  }
}
