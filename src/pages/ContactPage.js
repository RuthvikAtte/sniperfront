import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import SplineScene from '../components/SplineScene';

export default function ContactPage() {
    return (
      <div>
       <SplineScene></SplineScene>
       <Navbar />
       <Contact />
       <Footer />
      </div>
    );
}
  