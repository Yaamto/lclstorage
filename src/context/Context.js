import React, { createContext, useContext, useReducer } from 'react';
import { cartReducer } from './Reducers';


const Cart = createContext()

const Context = ({children}) => {

    const products = [
        {
            id: 1,
            product_name:"Produit 1",
            price: 14.5,
            description:"Ordinateur",
            path:'images/computer.png'
        },
        {
            id: 2,
            product_name:"Produit 2",
            price: 12,
            description:"Ecran",
            path:'images/ecran.png'
    
        },
        {
            id: 3,
            product_name:"Produit 3",
            price: 4,
            description:"Clavier",
            path:'images/clavier.png'
        }
    ]

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []

    })
    return (
        <Cart.Provider value={{ state, dispatch}}>
            {children}
        </Cart.Provider>
    );
};

export default Context;

export const CartState = () => {
    return useContext(Cart)
}