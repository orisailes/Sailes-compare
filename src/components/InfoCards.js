import React from 'react'
import הראל from '../img/הראל.png'
import אנליסט from '../img/אנליסט.png'
import מגדל from '../img/מגדל.png'
import אלטשולר from '../img/אלטשולר.png'
import מיטב from '../img/מיטב.png'

function Cards({ product, company }) {

    let images = {
        מיטב: מיטב,
        אלטשולר: אלטשולר,
        מגדל: מגדל,
        אנליסט: אנליסט,
        הראל: הראל,
    }

    let userFavoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];
    userFavoriteItems = userFavoriteItems.map(item => item.id)
    const handleSave = (e) => {
        const classes = e.currentTarget.className;
        classes.split(' ').includes('green') ?
            e.currentTarget.classList.remove('green') :
            e.currentTarget.classList.add('green');
        userFavoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];
        if (userFavoriteItems.length) {
            userFavoriteItems = userFavoriteItems.map(item => item.id)
        }
        console.log(product)
        let helper = JSON.parse(localStorage.getItem('favorites')) || [];
        if (!userFavoriteItems.includes(product.id)) helper.push(product)
        else {
            helper = helper.filter((item) => item.id !== product.id)
        }
        localStorage.setItem('favorites', JSON.stringify(helper));
    }
    return (
        <>
            <div className="product-info-card-header-wrapper">
                <h2 className="product-info-card-header">{product.name}</h2>
                <img className="product-info-card-image" src={images[company]} alt={company} />
                <button className={`info-card-add-to-favorite ${userFavoriteItems.includes(product.id) ? "green" : ""}`} onClick={(e) => handleSave(e)}><i className="far fa-heart fa-2x"></i> <i className="fas fa-plus fa-lg"></i></button>
            </div>
            <div className="product-info-card-wrapper">
                <div className="product-info-card">
                    <h4>Total Profits: </h4>
                    <p>5 Years: {product.past5YearsYield}</p>
                    <p>3 Years: {product.past3YearsYield}</p>
                    <p>Year to date: {product.yearToDateYield}</p>
                </div>
                <div className="product-info-card">
                    <h4>Withdraw & Desposits: </h4>
                    <p>Desposits: {product.desposits}</p>
                    <p>Withdraws: {product.withdrawls}</p>
                </div>
                <div className="product-info-card percentage-box">
                    <h4>Stock Exposure: </h4>
                    <p className="big-paragraph">{(product.stockExposure / product.totalAssets * 100).toString().slice(0, 5)}%</p>
                </div>
                <div className="product-info-card percentage-box">
                    <h4>Annual Managment Fees: </h4>
                    <p className="big-paragraph">{product.avgAnnnualManagmentFee}%</p>
                </div>
            </div>
        </>
    )

}

export default Cards