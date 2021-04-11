import React from 'react'
import { Link } from 'react-router-dom'
import './css/landing.css'
import MainImg from '../img/navImg.png'
function LandingPage() {
    return (
        <div className="landing">
            <div className="landing-content">
                <Link to="/"><img src={MainImg} alt="Sailes Compare"/></Link>
                <div className="text">
                <h2 className="landing-header">Build your next finance thinking.</h2>
                <p className="landing-p">Welcome to Sailes compare! <br></br><br></br>
                We offer a compare system that help you find what product fits you.<br></br> <br></br>
                You can chose which products to compare via our table page.</p>
                </div>
                <div className="landing-btn-wrapper">
                <Link to="/compare"><button className="btn">Compare</button></Link>
                <Link to="/table"><button className="btn">Table page</button></Link>
                <Link to="/favorite"><button className="btn">My favorites</button></Link>
                </div>
            </div>
        </div>)
}

export default LandingPage