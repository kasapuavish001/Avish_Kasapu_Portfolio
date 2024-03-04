import { motion, useScroll } from 'framer-motion';
import React from 'react';
import AnimatedCursor from 'react-animated-cursor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Banner from './component/Banner/Banner';
import Footer from "./component/Footer/Footer";
import Navbar from './component/Navbar/Navbar';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <AnimatedCursor
        innerSize={30}
        outerSize={20}
        color='255, 165, 0'
        outerAlpha={0.2}
        innerScale={1}
        outerScale={5}
      />

      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
