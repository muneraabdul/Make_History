import React, { Component } from 'react';
import './App.css';
import Boxes from './boxes'
import Nav from './nav'
import Have from './have'



class App extends Component {
  state = {
    eventDisplay : [] 
  }
   handleSearch= (input) => {
    const url = `https://www.eventbriteapi.com/v3/events/search/?token=DFTMFBD6GCIGDFBMNS3U&location.address=${input}`
  fetch(url).then(response =>{
    response.json().then(data => {

      console.log(data.events)
      this.setState({eventDisplay : data.events})
    })
  }
  )}

  componentDidMount=()=> {
    const url = `https://www.eventbriteapi.com/v3/events/search/?token=DFTMFBD6GCIGDFBMNS3U`
    fetch(url).then(response =>{
      response.json().then(data => {
  
        console.log(data.events)
        this.setState({eventDisplay : data.events})
      })
    }
    )}


  render() {

const events= this.state.eventDisplay.map(event=>{
  return <Boxes events ={event} />
} )

    return (
      <div className="App">


<Nav search ={this.handleSearch}/>
<Have/>
{events}

    
     
      </div>
    );
  }
}

export default App;
