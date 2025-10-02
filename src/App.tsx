import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CountdownTimer from './components/CountdownTimer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Ministers from './components/Ministers';
import Donations from './components/Donations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Wrap Hero + Timer in a relative container */}
                <div className="relative">
                  <Hero />

                  {/* Timer overlaps bottom of Hero and top of About */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2 w-full flex justify-center">
                    <div className="w-full max-w-3xl px-4">
                      <CountdownTimer />
                    </div>
                  </div>
                </div>

                {/* Add padding so About doesn't clash with timer */}
                <div className="pt-32">
                  <About />
                </div>

                <Services />
                <Donations />
                <Contact />
              </>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Ministers" element={<Ministers />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
