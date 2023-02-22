import React from "react"
import './App.css'

class CLassprops extends React.Component {
    styles ={
        color : "purple"
    }
    render(){
        return(
            <div>
                <h1>Hello {this.props.name} ! Welcome to CdeHub</h1>
                <h3 style={this.styles}>{this.props.children}</h3>

            </div>
        )
    }
}
export default CLassprops