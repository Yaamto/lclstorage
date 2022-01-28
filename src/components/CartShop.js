import React, { useEffect, useState } from 'react';
import { CartState } from '../context/Context';
import product_card from '../data';
import  {MdDelete} from 'react-icons/md'

const CartShop = () => {
    
    
    const {state: { cart }, dispatch} = CartState()
    console.log(dispatch)

    const [total, setTotal] = useState()
   
   

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr) => acc+ Number(curr.price) * curr.qty, 0))
    }, [cart])
    return (
        <div>
              <h1>Voici votre panier</h1>
              <h2> {cart.length>0?(
                  <div className='cart-container'>
                  <div className='product-container'>
                    <ul className='list-items'>
                    {
                        cart.map((product) => (
                            <li key={product.id} className="card">
                            <img src={product.path}></img>
                            <h1>{product.product_name}</h1>
                            <p className="price">{product.price}€</p>
                            <p>{product.description}</p>
                            <p><button className="delete-cartItem"onClick={() => {
                                dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload:product,
                                })
                            }}> <MdDelete /></button></p>
                            <div class="Quantity">
                                <label>Quantity :</label>
                                <input class="qty-input" onChange={(e) => dispatch({
                                    type: "CHANGE_CART_QTY",
                                    payload: {
                                        id: product.id,
                                        qty: e.target.value
                                    }
                                })}></input>
                                
                                
                            </div>
                        </li>
                        ))
                    }
                    </ul>
                  </div>
                  <div className='cart-details'>
                    <h1>Total Items ({cart.length})</h1>
                    <p>Total : {total} €</p>
                    <button class="paiement">Paiment</button>
                  </div>
                  </div>
              ):( <span>Cart is Empty ! </span>)}</h2>
        </div>
    );
};

export default CartShop;