import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/edusity_assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Education is the transmission of knowledge, skills, and character traits.</h1>
            <p> education is a process of gaining knowledge. Education derived from the Latin word 'educatio' which means 'A breeding, a bringing up, a rearing'</p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  );
}

export default Hero;