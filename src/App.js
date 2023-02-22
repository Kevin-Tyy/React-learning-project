import React from 'react';
import './App.css'
import Classprops from './ClassProps.js'
import NewComp from './components/NewComp'


class App extends React.Component{  
    styles={
        fontSize : "bold",
        color: "rgb(28, 174, 223)"    
    }
    
     
    render(){
        return(
            <div className='App'>
                <h1 style={this.styles}>Welcome</h1>
                <NewComp />

                <Classprops name="Kevin">
                    I am from Kigali-Rwanda...
                </Classprops>
                <Classprops name="James">
                    I am from The US...
                </Classprops>
             
            </div>
        )
    }
}


export default App


