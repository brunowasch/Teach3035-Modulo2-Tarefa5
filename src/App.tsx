import React from 'react';
import { useTheme } from './contexts/ThemeContext';
import { AppContainer, ToggleButton, GlobalStyle } from './style';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <GlobalStyle themeMode={theme} />
      <AppContainer themeMode={theme}>
        <h1>Modo {theme === 'light' ? 'Claro' : 'Escuro'}</h1>
        <ToggleButton onClick={toggleTheme}>
          Alternar Tema
        </ToggleButton>
      </AppContainer>
    </>
  );
}

export default App;
