import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/uni.jpg'
import play_icon from '../../assets/edusity_assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Education is the best policy</h2>

            <p>Going to university isn't just about studying – but you have to learn to balance your work-life ratio. You'll have time to study, and time to take up other activities. Every university will have sports teams and societies that you can get involved with.</p>

            <p>What is a university? A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study.</p>
            
            <p>University can help students to build their self-confidence and independence. Students will have plenty of opportunities to make new friends from different countries and backgrounds. Living independently can also nurture an increased level of responsibility.</p>
        </div>
    </div>
  )
}

export default About