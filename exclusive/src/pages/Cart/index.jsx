import React from 'react'
import Navbar from '../../components/Navbar'
import { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import './cart.scss'
import { Link } from 'react-router-dom'

function Cart() {
    const { basket, removeItem, totalPrice, increaseCount, decreaseCount } = useContext(BasketContext)
    return (
        <>
            <Navbar></Navbar>
            <div className="basket">
                <h3>Home / Cart</h3>
                <div className="desc">
                    <p>Product</p>
                    <p className='price'>Price</p>
                    <p className='quantity'>Quantity</p>
                </div>
                <ul>
                    {basket.map(basketitem => (
                        <li key={basketitem.id}>
                            <div className="product">
                                <img src={basketitem.images} alt="" />
                                <p className='title'>{basketitem.title}</p>
                            </div>
                            <div className="basketabout">
                                <p>${basketitem.price}</p>
                                <div className="count">
                                    <button onClick={() => decreaseCount(basketitem)}>-</button>
                                    <p>{basketitem.count}</p>
                                    <button onClick={() => increaseCount(basketitem)}>+</button>
                                </div>
                            </div>
                            <i onClick={() => removeItem(basketitem)} className="fa-solid fa-circle-xmark"></i>
                        </li>
                    ))}
                </ul>
                <div className="buttons">
                    <Link to={'/'}><div>Return To Shop</div></Link>
                    <div>Update Cart</div>
                </div>
                <div className="cek">
                    <div className="coupon">
                        <input type="text" placeholder='Counpon Code' />
                        <div>Apply Coupon</div>
                    </div>
                    <div className="total">
                        <h1>Cart Total</h1>
                        <div className="box">
                            <p>Subtotal: </p>
                            <p>${totalPrice}</p>
                        </div>
                        <div className="box">
                            <p>Shipping:</p>
                            <p>Free</p>
                        </div>
                        <div className="totalprice">
                            <p>Total:</p>
                            <p>${totalPrice}</p>
                        </div>
                        <div className="button">Proceed to checkout</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart