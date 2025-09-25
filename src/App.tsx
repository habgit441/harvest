import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CountdownTimer from './components/CountdownTimer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Donations from './components/Donations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <div className="relative">
                <Hero />
                {/* Positioned timer that overlaps Hero and About sections */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 w-full flex justify-center pointer-events-none">
                  <div className="pointer-events-auto w-full max-w-3xl px-4">
                    <div className="-mt-8">
                      <CountdownTimer />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-24">
                <About />
              </div>
              <Services />
              <Donations />
              <Contact />
            </>
          } />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;