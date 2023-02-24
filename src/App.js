import React , {Component}from 'react';
import ImageComp from './Components/ImageComp';
import Body from './Components/Body';
import Footer from './Components/Footer';
import DarkMode from './Components/Darkmode';
import './App.css'

class App extends Component {
    render(){
        return(
            <div className='wrapper'>
                <div className="App">
                    <DarkMode />
                    <ImageComp />
                    <Body />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;

    