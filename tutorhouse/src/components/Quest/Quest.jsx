import React from 'react'
import './Quest.css';
import one from '../../assets/images/one.svg'
import  {Link} from "react-router-dom"
import two from '../../assets/images/two.svg'
import three from '../../assets/images/three.svg'
import Btutor from '@mui/material/Button'
const Quest = () => {
  return (
    <div className='container-fluid qst'>
        <div className="container">
        <h2>How it works</h2>
        <p>Personalized online tutoring to boost grades and confidence
        Improve your grades by 3x with lessons that match your needs and learning goals.</p>
        <div className="row">
            <div className="col-md-4">
                <div className="internal">
                    <img src={one} alt={one}/>
                    <h4>Find your perfect online tutor</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius.</p>
                </div>
            </div>
            <div className="col-md-4">
            <div className="internal">
                    <img src={two} alt={two}/>
                    <h4>Start with a FREE online trial lesson</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius.</p>
                </div>
            </div>
            <div className="col-md-4">
            <div className="internal">
                    <img src={three} alt={three}/>
                    <h4>Become a member and save time and money</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse varius.</p>
                </div>
            </div>
        </div>
        <div className="have-quest">
            <h2>Still have questions?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to={"about-us"} style={{ textDecoration: 'none' }}>
                    <Btutor variant="contained" sx={{ 
                backgroundColor: 'var(--wt-color)', // Primary color
                color: '#364152;',
                textTransform:'capitalize',
                padding: '10px 25px', 
                fontSize: '16px',
                boxShadow: 'none',
                width: 'fit-content',
                borderRadius: '12px',
                border: '2px solid #364152',
                '&:hover': {
                backgroundColor: '#4e0961e0', 
                borderColor: '#4e0961e0',
                color:'#fff',
                boxShadow: 'none',// Darker shade on hover
                },
                        }}>Contact us</Btutor></Link>
        </div>
        </div>
    </div>
  )
}

export default Quest
