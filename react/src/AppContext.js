// LanguageContext.js
import React, { createContext, useState } from 'react';

const LanguageContext = createContext();



const LanguageProvider = ({ children }) => {


  // const [language, setLanguage] = useState('FR');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'FR');


  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);

  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageProvider, LanguageContext };
