import React from 'react'
import './BrowseTutor.css'
import Btutor from '@mui/material/Button'
import alltut from '../../assets/images/all-tutor.webp'
import  {Link} from "react-router-dom"
const BrowseTutor = () => {
  return (
    <div className='container browse-tutor'>
        <div className="row align-items-center">
            <div className="col-md-8">
                <h2>Exceptional tutors for as little as £20/hr.</h2>
            </div>
            <div className="col-md-4 text-end">
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
                        }}>Browse all tutors</Btutor></Link>
            </div>
            
        </div>
        <img src={alltut} alt={alltut}/>
    </div>
  )
}

export default BrowseTutor
