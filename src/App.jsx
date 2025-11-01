import React, { useState } from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import NewHeader from './components/NewHeader'
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CoreValues from './components/CoreValues';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0);
  const { t, i18n } = useTranslation();
  // console.log("hello world")
  return (
    <>
      <NewHeader />
      <Hero />
      <About />
      <Services />
      <CoreValues />
      <Contact />
      <h1 className='text-black font-bold text-4xl'>{t('Welcome')}</h1>
    </>
  )
}

export default App
