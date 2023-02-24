import React from 'react';
// import './Dark.css';
import ThemeContextWrapper from './themeContextWrapper';
import { ThemeContext, themes } from './ContextTheme';
import { Button, Container, InputGroup } from 'reactstrap';

function DarkMode(){

        const [darkMode, setDarkMode] = React.useState(true);
        return(

 
    <div className="App">
      <header className="App-header">
        {/* <h1 className="text-warning">Dark/Light mode</h1> */}
        <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button
                className='darkModeButton'
                color="link"
                onClick={() => {    
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >

                <span>Switch mode</span>
              </Button>
            )}
          </ThemeContext.Consumer>
        </InputGroup> 
      </header>
    </div>
        )
    }

export default DarkMode;