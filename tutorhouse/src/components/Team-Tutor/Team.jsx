import React from 'react'
import './Team.css';
import  {Link} from "react-router-dom"
import Btutor from '@mui/material/Button'
import tut1 from '../../assets/images/tut1.jpeg'
import tut2 from '../../assets/images/tut2.jpg'
import tut3 from '../../assets/images/tut3.jpeg'
const Team = () => {
  return (
    <div className='team'>
        <div className="container">
        <div className="row">
            <div className="col-md-5">
                <h2>Meet some of our tutors with 100+ lessons</h2>
                <ul>
                    <li>
                        Sed ut perspiciatis unde omnis iste natus error
                    </li>
                    <li>
                        Sed ut perspiciatis unde omnis iste natus error
                    </li>
                    <li>
                        Sed ut perspiciatis unde omnis iste natus error
                    </li>
                </ul>
                <Link to={"about-us"} style={{ textDecoration: 'none' }}>
                    <Btutor variant="contained" sx={{ 
                backgroundColor: '#4E0961', // Primary color
                color: '#fff',
                textTransform:'capitalize',
                padding: '10px 25px', 
                fontSize: '16px',
                boxShadow: 'none',
                width: 'fit-content',
                borderRadius: '12px',
                '&:hover': {
                backgroundColor: '#4e0961e0', 
                boxShadow: 'none',// Darker shade on hover
                },
                        }}>Find a tutor</Btutor></Link>
            </div>
            <div className="col-md-6">
                <div className="tutor-inf">
                    <img src={tut1}  alt={tut1}/>
                    <img src={tut2}  alt={tut1}/>
                    <img src={tut3}  alt={tut1}/>
                    <img src={tut1}  alt={tut1}/>
                    <img src={tut2}  alt={tut1}/>
                    <img src={tut3}  alt={tut1}/>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Team
