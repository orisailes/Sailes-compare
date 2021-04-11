import React from 'react'
import { Link } from 'react-router-dom'
import './css/not-found.css'
import MainImg from '../img/navImg.png'
function LandingPage() {


    return (
        <div className="not-found">
            <div className="not-found-content">
                <Link to="/"><img src={MainImg} alt="Sailes Compare" /></Link>
                <div className="text">
                    <h2 className="not-found-header">Oops! page not found.</h2>
                    <p className="not-found-p">Looks like you trying to get to a not exist
                <br></br> page.</p>
                    <Link to="/"><button className="btn">Home page</button></Link>
                </div>
            </div>
        </div>)
}

export default LandingPage