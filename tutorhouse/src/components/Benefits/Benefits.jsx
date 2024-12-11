import React from 'react'
import './Benefits.css';
import red from '../../assets/images/red.svg'
import green from '../../assets/images/green.svg'
import yellow from '../../assets/images/yellow.svg'
import dark from '../../assets/images/dark.svg'
const Beneifts = () => {
  return (
    <div className='benefits'>
        <div className="container">
            <h2>Tutor House Benefits</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="opts">
                        <img src={red} alt={red}/>
                        <div className="cnt">
                            <h5>
                            Trained & experienced tutors
                            </h5>
                            <p>
                            We train our tutors to be more than just teachers. Our training and interview process ensures students get experienced tuition and the educational support they deserve. All tutors are background checked.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="opts">
                        <img src={green}  alt={green}/>
                        <div className="cnt">
                            <h5>
                            Trained & experienced tutors
                            </h5>
                            <p>
                            We train our tutors to be more than just teachers. Our training and interview process ensures students get experienced tuition and the educational support they deserve. All tutors are background checked.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="opts">
                        <img src={dark} alt={dark}/>
                        <div className="cnt">
                            <h5>
                            Trained & experienced tutors
                            </h5>
                            <p>
                            We train our tutors to be more than just teachers. Our training and interview process ensures students get experienced tuition and the educational support they deserve. All tutors are background checked.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="opts">
                        <img src={yellow} alt={yellow}/>
                        <div className="cnt">
                            <h5>
                            Trained & experienced tutors
                            </h5>
                            <p>
                            We train our tutors to be more than just teachers. Our training and interview process ensures students get experienced tuition and the educational support they deserve. All tutors are background checked.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Beneifts
