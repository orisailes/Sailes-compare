import React, { useEffect, useState } from 'react'
import './css/favorite.css'
import הראל from '../img/הראל.png'
import אנליסט from '../img/אנליסט.png'
import מגדל from '../img/מגדל.png'
import אלטשולר from '../img/אלטשולר.png'
import מיטב from '../img/מיטב.png'

function Favorite() {

    const [myFav, setMyFav] = useState([]);

    useEffect(() => {
        const temp = JSON.parse(localStorage.getItem('favorites')) || [];
        setMyFav(temp)
    }, [])

    let images = {
        מיטב: מיטב,
        אלטשולר: אלטשולר,
        מגדל: מגדל,
        אנליסט: אנליסט,
        הראל: הראל,
    }

    let sites = {
        מיטב: "https://www.meitavdash.co.il/",
        הראל: "https://www.harel-group.co.il/Pages/default.aspx/",
        מגדל: "https://www.migdal.co.il/",
        אלטשולר: "https://www.as-invest.co.il/",
        אנליסט: "https://www.analyst.co.il/",
    }

    const handleDelete = (id) => {
        let helper = JSON.parse(localStorage.getItem('favorites'));
        helper = helper.filter((item) => {
            if (item.id !== id) {
                return item
            }
        })
        localStorage.setItem('favorites', JSON.stringify(helper));
        setMyFav(helper);
    }
    return (
        <div className="favorites">
            <div className="favorites-content">
                {myFav.length > 0 ?
                    myFav.map((item) => {
                        let company = item.controlledBy.split(' ')[0]
                        if (company === "שלמה") company = "מגדל";
                        return (
                            <>
                                <div key={item.id} className="favorite-card flex">
                                    <button onClick={() => handleDelete(item.id)} className="delete-btn"><i className="fas fa-trash fa-2x"></i>Delete</button>
                                    <div className="flex columns">
                                        <h4>Fund inception: {item.inceptionAt.split(' ')[0]}</h4>
                                        <a href={sites[company]}>More About The Company</a>
                                    </div>
                                    <div className="favorite-card-content">
                                        <h3>{company}</h3>
                                        <h4>{item.name}</h4>
                                    </div>
                                    <a href={sites[company]}><img src={images[company]} alt={company} /></a>
                                </div>
                            </>
                        )
                    })
                    :
                    <div className="no-favorites-found">
                        <h1>no favorites found</h1>
                    </div>}
            </div>
        </div>
    )
}

export default Favorite