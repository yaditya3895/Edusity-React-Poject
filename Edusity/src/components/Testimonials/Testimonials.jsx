import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import user_1 from '../../assets/edusity_assets/user-1.png'
import user_2 from '../../assets/edusity_assets/user-2.png'
import user_3 from '../../assets/edusity_assets/user-3.png'
import user_4 from '../../assets/edusity_assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () =>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = () =>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Swati 1</h3>
                                <span>Edusity, Lucknow</span>
                            </div>
                        </div>
                        <p>Institute of Engineering and Technology, Lucknow is a state government-funded technical institute in Lucknow, Uttar Pradesh, India. It is a constituent college of Dr. A.P.J. Abdul Kalam Technical University. It is popularly known as "Engineering College" in Lucknow.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Kanishk 2</h3>
                                <span>Edusity, Agra</span>
                            </div>
                        </div>
                        <p>Institute of Engineering and Technology, Lucknow is a state government-funded technical institute in Lucknow, Uttar Pradesh, India. It is a constituent college of Dr. A.P.J. Abdul Kalam Technical University. It is popularly known as "Engineering College" in Lucknow.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Archie 3</h3>
                                <span>Edusity, Kanpur</span>
                            </div>
                        </div>
                        <p>Institute of Engineering and Technology, Lucknow is a state government-funded technical institute in Lucknow, Uttar Pradesh, India. It is a constituent college of Dr. A.P.J. Abdul Kalam Technical University. It is popularly known as "Engineering College" in Lucknow.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Aditya 4</h3>
                                <span>Edusity, Prayagraj</span>
                            </div>
                        </div>
                        <p>Institute of Engineering and Technology, Lucknow is a state government-funded technical institute in Lucknow, Uttar Pradesh, India. It is a constituent college of Dr. A.P.J. Abdul Kalam Technical University. It is popularly known as "Engineering College" in Lucknow.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials