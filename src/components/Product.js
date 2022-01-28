import React, { useEffect, useState } from 'react';
import { CartState } from '../context/Context';
import product_card from '../data'

const Product = () => {
    

   


   const {state} = CartState();

   /*console.log(state)*/
   

   const {state: { cart }, dispatch} = CartState()
   console.log(cart)

   
    return (
        <ul className='list-items'>
           {product_card.map((product) => (
               
                   <li key={product.id} className="card">
                       <img src={product.path}></img>
                       <h1>{product.product_name}</h1>
                       <p className="price">{product.price}€</p>
                       <p>{product.description}</p>

                       {
                           cart.some(p => p.id === product.id) ? (
                               <button onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload:product,
                                })
                            }}>Remove from Cart</button>
                           ): (<button onClick={() => {
                            dispatch({
                                type: "ADD_TO_CART",
                                payload:product,
                            })
                        }}>Add to Cart</button>)
                       }
                       
                    </li>
               
           ))}
        </ul>
    );
};

export default Product;