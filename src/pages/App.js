import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import MyComponent from '../components/MyComponent';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SplineScene from '../components/SplineScene';

function App() {
  return (
    <div>
      <SplineScene></SplineScene>
      <Navbar />;
      <Hero />;
      <Footer />;
    </div>
  );
}

export default App;
