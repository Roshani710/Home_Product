import React, { useContext, useRef } from 'react'
import CartP from './CartP'
import { DataContext } from '../context/DataContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
    const nevigate = useNavigate()
    const { cart } = useContext(DataContext)
    console.log(cart)
    return (
        <>
            <div className="cart">
                {
                    !cart.length ? (
                        <>
                            <div className="container">
                                <h2>There is No Items In the Cart</h2>
                                <button className="btn btn-info" onClick={() => nevigate('/viewproduct')}>Continue Shopping</button>
                            </div>

                        </>
                    ) : (
                        <>
                            <div className="container">
                                <section class="breadcrumb_part">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="breadcrumb_iner">
                                                    <h2>cart list</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <div className="row">
                                    {
                                        cart.map((val, ind) => {
                                            return (
                                                <>
                                                    <CartP

                                                        key={ind}
                                                        product_id={val.product_id}
                                                        product_name={val.product_name}
                                                        product_price={val.product_price}
                                                        product_discount={val.product_discount}
                                                        product_photo={val.product_photo}
                                                        qty={val.qty}
                                                    />

                                                </>
                                            )
                                        })
                                    }



                                </div>
                                <div className="row m-5">
                                    <div className="col-12">

                                    </div>
                                </div>

                            </div>

                        </>
                    )
                }


            </div>

        </>
    )
}

export default Cart
