import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, useMediaQuery } from '@mui/material';
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

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState('light');

  // Load theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setMode(storedTheme);
    } else {
      setMode(systemPrefersDark ? 'dark' : 'light');
    }
  }, [systemPrefersDark]);

  const toggleColorMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
  };

  // Memoize theme to avoid unnecessary re-renders
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode, // use state, not systemPrefersDark
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Apply MUI base styles */}
        <div className={`App overflow-hidden ${mode === 'dark' ? 'dark' : ''}`}>
          {/* Dark mode toggle button */}
          <div className="w-22 h-[30px] z-50 fixed right-0">
            <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
              {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>

          {/* Main content */}
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
