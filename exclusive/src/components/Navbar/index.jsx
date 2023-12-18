import React from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav>
                <Link to={"/"}><h1>Exclusive</h1></Link>
                <div className="menu">
                    <Link to={"/"}><p>Home</p></Link>
                    <p>Contact</p>
                    <p>About</p>
                    <p>Sign Up</p>
                </div>
                <div className="cart">
                    <input type="text" placeholder='What are you looking for?' />
                    <i className="fa-regular fa-heart"></i>
                    <Link to={"/cart"}><i className="fa-solid fa-cart-shopping"></i></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar