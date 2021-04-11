import React from 'react';


function ProductCard({ products,images }) {
    let cards = [] ;
    {products.forEach((item)=>{
                cards.push(
                     <div key={item.id} className="products-card">
                    <img src={images[item[0].company]} alt={item[1]}/>
                    <p>{item[0].name}</p>
                    <p>{item[0].manageBy}</p>
                </div>
                )
            })}
       
    return cards

}

export default ProductCard