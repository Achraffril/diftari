import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './router/router';
import {LanguageProvider } from './AppContext';


function App() {
  return (
  <>
    <LanguageProvider>
      <RouterProvider router={router}/>
    </LanguageProvider>
  </>
  );
}

export default App;
