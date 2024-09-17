import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx';
import Programs from './components/Programs/Programs.jsx';
import Title from './components/Title/Title.jsx';
import About from './components/About/About.jsx';
import Campus from './components/Campus/Campus.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import VideoPlayer from './components/VideoPlayer/VideoPlayer.jsx';


const App = () => {

   const [playState, setPlayState] = useState(false); 

return (

    <div>

       <Navbar/> 
       <Hero/>
       <div className="container">
        <Title subTitle='Our PROGRAMS' title='What we offer'/>
       <Programs/>
       <About setPlayState={setPlayState}/>
       <Title subTitle='Gallary' title='Campus Photos'/>
       <Campus/>
       <Title subTitle='TESTIMONIALS' title='Share Your thoughts'/>
       <Testimonials/>
       <Title subTitle='CONTACT US' title='Always connected us'/>
       <Contact/>
       <Footer/>
       </div>
      <VideoPlayer  playState={playState} setPlayState={setPlayState}/>
    </div>
)

}

export default App;