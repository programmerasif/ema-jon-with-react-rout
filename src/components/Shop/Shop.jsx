import React, { useEffect, useState } from 'react';
import AddToCard from '../../AddToCard/AddToCard';
import Card from '../../Card/Card';
import { addToDb, getShoppingCart } from '../../fakeData/fakedb';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([])
    const [cart , setCart] = useState([])
    useEffect( () =>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        .then( res => res.json())
        .then( data => setProduct(data))
    } ,[])

    useEffect( () =>{
        const storedCard = getShoppingCart()
        let savedCard = []
        for (const id in storedCard) {
            const addedproduct = product.find(product => product.id === id)
            
            if (addedproduct) {
                const quantity = storedCard[id]
                addedproduct.quantity = quantity
                savedCard.push(addedproduct)
            }
            setCart(savedCard)
            console.log(addedproduct ,'added');
        }
    },[product])


    const handelAddToCard = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart)
        console.log(product);
        addToDb(product.id)
    }
    return (
        <div>
            <div className='shopContainer'>
                <div className="product">
                    {
                        product.map(singleProduct => <Card 
                            sProduct={singleProduct} 
                            key={singleProduct.id}
                            handelAddToCard={handelAddToCard}
                            />)
                    }
                </div>
                <div className="card">
                    <AddToCard  cart={cart}/>
                </div>
            </div>
        </div>
    );
};

export default Shop;