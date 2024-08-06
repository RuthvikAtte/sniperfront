import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import SplineScene from '../components/SplineScene';

export default function AboutPage() {
    return (
      <div>
       <SplineScene></SplineScene>
       <Navbar />
       <About />
       <Footer />
      </div>
    );
}
  