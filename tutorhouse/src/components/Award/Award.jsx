import React from 'react'
import './Award.css'
import line from '../../assets/images/line.svg'
import cl from '../../assets/images/color.png'
const Award = () => {
  return (
    <div className='award'>
        <div className="container">
            <div className="content">
                <img src={line} className='line' alt='line'/>
                <img src={cl} className='rgb-bg' alt='line'/>
                <h2>Award winning online lessons</h2>
                <p>Our virtual experience makes online learning easy and fun. All tutors are trained and qualified to deliver high-quality lessons to you anywhere in the UK. Your online lessons are tailored to your specific requirements, ensuring you meet your expectations and achieve your goals.</p>
            </div>
        </div>
    </div>
  )
}

export default Award
