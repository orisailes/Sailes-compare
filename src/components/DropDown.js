import React, { useState,useRef, useEffect } from 'react';
import './css/dropdown.css'

function DD({ title, keys , getCompanyByDropDown}) {
    const [isListOpen, setListOpen] = useState(false);
    const [myTitle, setTitle] = useState(title);
    const [userDidClick,setUserDidClick] = useState(false);
    const ref = useRef();

    const handleChoose = (e) => {
        setUserDidClick(true);
        setTitle(e.target.innerText);
        setListOpen(prev => !prev);
    }

    useEffect(()=>{
       userDidClick && getCompanyByDropDown(myTitle);
    },[myTitle])
    return (
        <div onMouseLeave={()=>setListOpen(false)} ref={ref} className="dd">
            <div className="dd-header">
                <button onClick={() => { setListOpen(prev => !prev) }} className="dd-btn">{isListOpen ? <i className="fas fa-angle-up"></i> : <i className="fas fa-angle-down fa-1x"></i>} {myTitle}  </button>
            </div>
            <button onClick={handleChoose} className={`dd-btn ${!isListOpen && "hide"}`}>הכל</button>
            {keys.map((company)=>{
                return(
                    <button key={company} onClick={handleChoose} className={`dd-btn ${!isListOpen && "hide"}`}>{company}</button>
                )
            })}
        </div>
    )

}

export default DD;