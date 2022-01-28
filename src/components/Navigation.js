import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartState } from '../context/Context';
const Navigation = () => {

    const {state : {cart}} = CartState()
    return (
        <div className='Navigation'>
            <NavLink exact to="/">
                Accueil
            </NavLink>
            <NavLink exact to="/cart">
                <AiOutlineShoppingCart />
                {cart.length}
            </NavLink>
        </div>
    );
};

export default Navigation;