import React, { useContext } from 'react';
import Context from '.';

const ColorSwitcher = () => {
  const { state, toggleDarkMode } = useContext(Context);

  return (
    <button onClick={toggleDarkMode} style={{ margin: '1rem' }}>
      Switch to {state.darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ColorSwitcher;
