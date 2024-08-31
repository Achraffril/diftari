import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/router';
import { LanguageProvider } from './AppContext';
import { ContextProvider } from './context/ContextProvider';




function App() {
  return (
  <>
    <LanguageProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </LanguageProvider>
  </>
  );
}

export default App;