import React from 'react'
import './Banner.css';
import  {Link} from "react-router-dom"
import one from '../../assets/images/one.webp'
import two from '../../assets/images/two.webp'
import three from '../../assets/images/three.webp'
import four from '../../assets/images/four.webp'
import Button from '@mui/material/Button';
const Banner = () => {
  return (
    <div className='container-fluid banner'>
        <div className='container'>
        <div className="row text-center flex-row flex-wrap">
        <h1>
        Your Path to Success Starts Here
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
        <Link to={"about-us"} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" sx={{ 
                backgroundColor: '#4E0961', // Primary color
                color: '#fff',
                margin: '16px auto 0px',
                padding: '10px 25px', 
                fontSize: '16px',
                boxShadow: 'none',
                width: 'fit-content',
                borderRadius: '12px',
                '&:hover': {
                backgroundColor: '#4e0961e0', 
                boxShadow: 'none',// Darker shade on hover
                },
                        }}>Get Started</Button></Link>
        <div className='container grp-img d-flex justify-content-center'>
            <img src={one} alt={one}/>
            <img src={two} alt={two}/>
            <img src={three} alt={three}/>
            <img src={four} alt={four}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Banner
