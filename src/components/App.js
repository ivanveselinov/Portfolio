import * as React from 'react';
import { useState, useMemo, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Header from './header/Header';
import Home from './home/Home';
import Main from './aboutMe/Container';
import Project from './projects/Project';
import ContactMe from './contact/ContactMe';
import Technical from './techical/Technical';
import Education from '../components/education/Education';
import WorkExperienceMain from './workExperience/WorkExperienceMain';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

// Code is making Light/Dark mode automatically by windows settings
function App() {
  const [mode, setMode] = useState(
    localStorage.getItem('theme') || 
    (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
  ); // 'light' or 'dark'

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (mode === 'light' && mediaQuery.matches) {
        setMode('dark');
      } else if (mode === 'dark' && !mediaQuery.matches) {
        setMode('light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <div className={`App overflow-hidden ${mode === 'dark' ? 'dark' : ''}`}>
          <div className="w-22 h-[30px] z-50 fixed right-0">
            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleColorMode}
              color="inherit"
            >
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
          <Header />
          <Home darkMode={mode === 'dark'} />
          <Main />
          <WorkExperienceMain />
          <Project />
          <Technical />
          <Education />
          <ContactMe />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
