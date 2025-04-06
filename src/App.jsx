import React, { useState } from 'react'
import Navbar from './Components/Navbvar/Navbar';
import Hero from './Components/Hero/Hero';
import Programmes from './Components/Programmes/Programmes';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';

const App = () => {
   const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subtitle="OVER PROGRAMMES" title="WHAT WE OFFER"/>
      <Programmes/>
      {/* <Title subtitle="OUR COLLEGE" title="About our college"/> */}
      <About setShowVideo={setShowVideo}/>
      <Title subtitle="GALLERY" title="Campus Photos"/>
      <Campus/>
      <Title subtitle="TESTIMONIALS" title="WHAT OUR STUDENTS SAY"/>
      <Testimonials/>
      <Title subtitle="CONTACT US" title="GET IN TOUCH WITH US "/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer showVideo={showVideo} setShowVideo={setShowVideo}/>
    </div>
  )
}

export default App