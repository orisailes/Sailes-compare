import React from 'react'
import {Link} from 'react-router-dom'
import SideNav from './SideNav'
import Img from '../img/logo4.png'
import './css/header.css'

function Header() {
    return (
        <>
            <SideNav />
            <div className="header">
                <Link to="/"><img className="sailes-compare-logo" src={Img} alt="logo" /></Link>
                <Link to="/favorite"><button className="header-favorite-btn"> <i className="fas fa-heart fa-lg"></i><span>Favorites</span></button></Link>
            </div>
        </>
    )
}

export default Header