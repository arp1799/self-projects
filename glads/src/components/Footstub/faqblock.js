import React, { Component } from "react"


export default class  Toggle extends Component {
    state = {
        on :false, 
}

    toggle = () =>{
        this.setState({
            on: !this.state.on
        })
    }
    render(){
        
        return(

        <div>
            
            <div style={{display:`grid`,gridTemplateColumns:`auto auto`,alignContent:`center`,justifyContent:`space-between`}}><h4>{this.props.topichead}</h4>
            <div style={{display:`grid`,alignContent:`center`}}><button style={{maxHeight:`20px`}} onClick={this.toggle}>+</button></div></div>
            
          {this.state.on && (<div>
              <p>{this.props.content}</p>
              <a style={{textDecoration:`none`,color:`#333`}} href={this.props.to}><h5>{this.props.extend}</h5></a>
              </div>
          )}
          
        </div>
        
        
        
        
        
        )}

}