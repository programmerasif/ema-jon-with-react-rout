import React from 'react';
import './Card.css'

const Card = (props) => {
   
    const {img,name,price,seller,ratings} = props.sProduct
    const handelAddToCard = props.handelAddToCard
    return (
        <div className='cardArea'>
                <div className='card'>
            <div className='s_Card'>
            <img className='img' src={img} alt="" />
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>Manufacturer :{seller}</p>
        <p>Rating :{ratings}</p>
        <div className='addcard' onClick={() => handelAddToCard(props.sProduct)}>Add to Card</div>
            </div>
           
        </div>
        </div>
    );
};

export default Card;