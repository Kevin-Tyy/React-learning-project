import div from "react";
import Contact from './Contact';
import About from "./About";

class Body extends div.Component {
    render(){
        return(
            <div className="body">
                <Contact />
                <About />
            </div>
        )
    }
}

export default Body;