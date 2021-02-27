import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setcart] = useState([]);

    const handleAddProduct = (product)=>{
        console.log('Product added',product);
        const newCart = [...cart,product];
        setcart(newCart);
    }


    return (
        <div className="shop-container">

            <div className="product-container">

                {
                    products.map(pd =>
                         <Product 
                         handleAddProduct = {handleAddProduct}
                         product={pd} >

                         </Product>)
                }

            </div>
            <div className="card-container">

                <Cart cart={cart}></Cart>
                 {/* <h5>Order summary: {cart.length}</h5> */}


            </div>


        </div>
    );
};

export default Shop;