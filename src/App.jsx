
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Header from './componant/Header'
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './componant/Footer';
function App() {

  return (
    <>
    <Header/>
         <Routes>
          
        
        <Route path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/certifications" element={<Certifications />} /> */}
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
 <Footer/>
    </>
  )
}

export default App
