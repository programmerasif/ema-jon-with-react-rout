import React from 'react';
import AddToCard from '../../AddToCard/AddToCard';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData()
   
    return (
        <div className='shopContainer'>
            <div className="product">
                <h4>Order Quantity :{cart.length}</h4>
            </div>
            <div className="card">
                    <AddToCard  cart={cart}/>
                </div>
        </div>
    );
};

export default Orders;