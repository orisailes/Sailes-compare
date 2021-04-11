import React from 'react'
import './css/adv.css'
const Adv = ({ setShowAd }) => {
    return (
        <div className="adv-background">
            <div className="adv-content">
                <div className="adv">
                    <button onClick={() => setShowAd(false)}><i className="far fa-times-circle fa-2x"></i></button>
                    <a href="https://www.kfc.co.il"> <img src={'https://cdn.mos.cms.futurecdn.net/wPCwUkGSDrHXtRAw6vQskS-1200-80.jpg'} alt="KFC AD" /></a>
                    <p>Sponsored Content</p>
                </div>
            </div>
        </div>
    )
}

export default Adv
