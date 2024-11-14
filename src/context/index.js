// import { createContext } from 'react';

// const Context = createContext({
//   isIntroDone: false,
//   setIsIntroDone: () => {},
//   darkMode: true,
//   setDarkMode: () => {},
// });

// export default Context;

import { createContext } from 'react';

const Context = createContext({
  isIntroDone: false,
  darkMode: false,
});

export default Context;
