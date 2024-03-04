import { motion, useScroll } from "framer-motion";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Banner from './component/Banner/Banner';
import Footer from "./component/Footer/Footer";
import Navbar from './component/Navbar/Navbar';
import Projectpage from "./component/ProjectPage/Projectpage";
function App() {
    const { scrollYProgress } = useScroll();
  return (
    < >
        <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Banner/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Projectpage/>} />
      </Routes>
    </BrowserRouter>
       <Footer/>
    </>
  );
}

export default App;
