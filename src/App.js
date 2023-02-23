import React from 'react';
import ImageComp from './Components/ImageComp';
import Body from './Components/Body';
import Footer from './Components/Footer';
import './App.css'

class App extends React.Component {
    render(){
        return(
            <div className='wrapper'>
                <div className="App">
                    <ImageComp />
                    <Body />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App;