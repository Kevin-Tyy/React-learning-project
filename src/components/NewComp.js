import React, { Component } from 'react';
import '../App.css'
import bellA  from './bell-icons-16608.png'
import bellB from './pngkey.com-crossed-out-png-9592711.png'

class NewComp extends Component{
    styles={
        color: "purple",
                 
    }
    
    constructor(props){
        super(props);

        this.state ={
            message : "Subscribe to CodeHub...",
            sub: "Subscribe",
            image: bellA
        }
    }
    buttonChange =()=>{
        this.setState({
            message : "Hit the Bell Icon to neve miss an Update...",
            sub: "Subscribed"

        });   
    }
    imageChange =()=>{
        this.setState({
            image : bellB,
            message : "Thank you!  for subscribing to CodeHub..."
        })
    }
    render(){
        return(
            <div>
                <h3 style={this.styles}>{this.state.message}</h3>
                <button onClick={this.buttonChange}>{this.state.sub}</button>
                <p/>
                <img src={this.state.image} onClick={this.imageChange} alt=""/>
            </div>
        )
    }
}

export default NewComp