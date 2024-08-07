import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import About from '../components/About';
import SplineScene from '../components/SplineScene';

function App() {
  return (
    <div>
      <SplineScene></SplineScene>
      <Navbar />;
      <Hero />;
      <About />
      <Footer />;
    </div>
  );
}

export default App;
