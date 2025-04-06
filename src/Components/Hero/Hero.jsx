import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'> 
        <div className="hero-text">
        <h1>Better Education For Better Future, Better Future For Better Education</h1>
        <p>
        Eloquentia is a trusted name in the education industry. We are known for our innovative and interactive approach 
        to learning, and our commitment to providing high-quality education. Our team of experienced educators and 
        industry experts are dedicated to helping our students achieve their goals and succeed in their chosen fields.
        </p>
       
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero