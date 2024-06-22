import * as React from 'react';
import { useState } from "react";
import Header from "./header/Header";
import Home from "./home/Home";
import Main from "./aboutMe/Container";
import Project from "./projects/Project";
import ContactMe from "./contact/ContactMe";
import Technical from "./techical/Technical";
import Education from "../components/education/Education"
import WorkExperienceMain from "./workExperience/WorkExperienceMain";
import IconButton from '@mui/material/IconButton'; // Dark light button
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Dark light button
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark light button
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Dark light button

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  
  const [mode, setMode] = React.useState('light');
  const [darkMode, setDarkMode] = useState(false)
  const lightDarkMode = "w-22 h-[30px] z-50 fixed right-0"

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`${darkMode && "dark"} App overflow-hidden`}>
    {/* Light/Dark mode div */}
    <div className={lightDarkMode}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <div className="" onClick={toggleDarkMode}>
          <div className="hidden">{theme.palette.mode} mode </div> {/* Hide text light/dark mode */}
            <IconButton 
              sx={{ ml: 1 }} 
              onClick={colorMode.toggleColorMode} 
              color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon 
              />}
            </IconButton>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
    <Header />
    <Home darkMode={darkMode}/> {/* To Reset Typing component */} 
    <Main />
    <WorkExperienceMain />
    <Project />
    <Technical />
    <Education />
    <ContactMe />
    </div>
  );
}

export default App;
