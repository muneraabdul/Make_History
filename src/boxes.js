import React, { Component } from 'react';
import './index.css'


class Boxes extends Component {
   
    render() {
        const date = this.props.events.start.local.split('T')
        const datetow = this.props.events.end.local.split('T')
console.log(date);

        return (



            <div class="flip-card">

  <div class="flip-card-inner">

         <div class="flip-card-front">

             <div class="image">
                 <img src={this.props.events.logo.original.url} width="345px" height="200"/>
                {this.props.events.is_free === true ? <h6 className="test">Free</h6> : <h6></h6>} 
             </div>

             <h5 className="nameE">{this.props.events.name.text.length <30 ? `${this.props.events.name.text}`: `${this.props.events.name.text.substring(0,40)}...`}</h5>
             <h6 className="location">{this.props.events.start.timezone}</h6> 
             {/* <h6> click to Description</h6> */}
        </div>

    <div class="flip-card-back">
        <h5>{this.props.events.name.text.length <50 ? `${this.props.events.name.text}`: `${this.props.events.name.text.substring(0,60)}...`}</h5>
        <h4 className="color"> Description : </h4>
        <h5 className="desc">{this.props.events.summary}</h5> 
        <h6 className="start">Start :<h6 className="white">{date[0]}</h6></h6> 
        <h6 className="end"> End : <h6 className="white">{datetow[0]}</h6></h6> 
    </div>

  </div>

</div>



        )
    }
}

export default Boxes