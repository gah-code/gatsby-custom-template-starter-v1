// import React, { useEffect, useContext } from 'react';

// import Context from '../context';

// const useDarkMode = () => {
//   return <div className=''></div>;
// };

// export default useDarkMode;

// import { useEffect, useContext } from 'react';

// import Context from '../context';

// const useDarkMode = () => {
//   const { state, setState } = useContext(Context);

//   useEffect(() => {
//     const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

//     const toggleTheme = (event) => {
//       if (event.matches) {
//         setState({ ...state, darkMode: true });
//       } else {
//         setState({ ...state, darkMode: false });
//       }
//     };

//     if (darkSchemeQuery.matches) {
//       setState({ ...state, darkMode: true });
//     }

//     if (darkSchemeQuery.addEventListener) {
//       darkSchemeQuery.addEventListener('change', toggleTheme);
//       return () => {
//         darkSchemeQuery.removeEventListener('change', toggleTheme);
//       };
//     } else {
//       // backwards compatibility
//       // https://betterprogramming.pub/using-window-matchmedia-in-react-8116eada2588
//       darkSchemeQuery.addListener(toggleTheme);
//       return () => {
//         darkSchemeQuery.removeListener(toggleTheme);
//       };
//     }

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return state.darkMode;
// };

// export default useDarkMode;

// import { useEffect, useContext } from 'react';

// const { state, setState } = useContext(Context);

// const useDarkMode = () => {
//   // const context = useContext(Context);

//   if (!context) {
//     throw new Error('useDarkMode must be used within a Context provider');
//   }

//   const { state, setState } = context;

//   useEffect(() => {
//     const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

//     const toggleTheme = (event) => {
//       setState((prevState) => ({
//         ...prevState,
//         darkMode: event.matches,
//       }));
//     };

//     // Set initial dark mode state
//     setState((prevState) => ({
//       ...prevState,
//       darkMode: darkSchemeQuery.matches,
//     }));

//     // Use addEventListener instead of addListener
//     darkSchemeQuery.addEventListener('change', toggleTheme);

//     // Cleanup with removeEventListener
//     return () => darkSchemeQuery.removeEventListener('change', toggleTheme);
//   }, [setState]);

//   return state.darkMode;
// };

// export default useDarkMode;

// import { useEffect, useContext } from 'react';
// import Context from '../context';

// const useDarkMode = () => {
//   const context = useContext(Context);

//   if (!context) {
//     throw new Error('useDarkMode must be used within a Context provider');
//   }

//   const { state, setState } = context;

//   useEffect(() => {
//     const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

//     const toggleTheme = (event) => {
//       setState((prevState) => ({
//         ...prevState,
//         darkMode: event.matches,
//       }));
//     };

//     // Set initial dark mode state
//     setState((prevState) => ({
//       ...prevState,
//       darkMode: darkSchemeQuery.matches,
//     }));

//     // Use addEventListener instead of addListener
//     darkSchemeQuery.addEventListener('change', toggleTheme);

//     // Cleanup with removeEventListener
//     return () => darkSchemeQuery.removeEventListener('change', toggleTheme);
//   }, []);

//   return state.darkMode;
// };

// export default useDarkMode;

import { useEffect, useContext } from 'react';
import Context from '../context';

const useDarkMode = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useDarkMode must be used within a Context provider');
  }

  const { state, setState } = context;

  useEffect(() => {
    const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const toggleTheme = (event) => {
      setState((prevState) => ({
        ...prevState,
        darkMode: event.matches,
      }));
    };

    // Set initial dark mode state
    setState((prevState) => ({
      ...prevState,
      darkMode: darkSchemeQuery.matches,
    }));

    // Use addEventListener instead of addListener
    darkSchemeQuery.addEventListener('change', toggleTheme);

    // Cleanup with removeEventListener
    return () => darkSchemeQuery.removeEventListener('change', toggleTheme);
  }, []);

  return state.darkMode;
};

export default useDarkMode;
