import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import navImg from '../img/navImg.png'
import './css/sidenav.css'
import { Twirl as Hamburger } from 'hamburger-react'

function SideNav() {
    const [checked, setChecked] = useState(null);
    const navRef = useRef();



    return (
        <React.Fragment>
            {checked && <div className="hide-all"></div>}
            <nav ref={navRef} className={`side-nav ${checked ? "show-nav" : checked !== null ? "hide" : ""}`}>
                <Link onClick={() => setChecked(prev => !prev)} to="/"><img className="nav-img" src={navImg} alt="navImg" /></Link>
                <div className="opt"><Link onClick={() => setChecked(prev => !prev)} to="/"><i className="fas fa-home fa-lg"></i> Home</Link></div>
                <div className="opt"><Link onClick={() => setChecked(prev => !prev)} to="/table"><i className="fas fa-table fa-lg"></i> Table</Link></div>
                <div className="opt"><Link onClick={() => setChecked(prev => !prev)} to="/compare"><i className="fas fa-chart-bar fa-lg"></i> Compare</Link></div>
                <div className="opt"><Link onClick={() => setChecked(prev => !prev)} to="/favorite"><i className="fas fa-heart fa-lg"></i> Watch List</Link></div>
                <footer>
                    All right are save to Ori Sailes &#169;. Every usage have to be approved.
                </footer>
            </nav>
            <div className={`btn-wrapper ${checked ? "show-nav" : checked !== null ? "hide" : ""}`}>
                <Hamburger toggled={checked} toggle={setChecked} />

            </div>
        </React.Fragment>

    )
}

export default SideNav;