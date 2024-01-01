import { useState } from 'react'
import NavbarComponent from './components/Navbar'
import Landing from './components/Landing'
import './App.css';
import './index.css'
import Slides from './components/Slides';
import Statistic from './components/Statistic';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

function App() {

  return (
    <>
    <NavbarComponent />
    <Landing />
    <Slides />
    <Statistic />
    <FaqSection />
    <Footer />
    </>
  )
}

export default App
