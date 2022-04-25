import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const CartP = ({ product_name, product_id, product_price, product_photo, qty ,product_discount}) => {
    const nevigate=useNavigate()
    const { cart, setCart } = useContext(DataContext)
    const deleteProduct = (product_id) => {
        const exist = cart.find((x) => x.product_id === product_id)
        if (exist) {
            setCart(
                cart.filter((x) => x.product_id !== product_id)
            )
            // console.log(`pre ${id}`)
        }

    }
    console.log(product_discount)
    return (
        <>
            {/*  <div classNameName="col-lg-4 col-md-6 col-12  mb-3">
                        <div classNameName="card">
                        <img src={'http://localhost:3009/' + product_photo} classNameName="img-fluid cart-img" />
                            <div classNameName="p-3">
                                <div classNameName="cartbox">
                                    <div>
                                        <p>{product_name}</p>
                                        <p>$.({product_price}.00) * ({qty})</p>
                                       
                                             
                                    </div>
                                    <div>
                                        <br />
                                        <p>$.{product_price*qty}.00</p>
                                    </div>

                                </div>
                                <div classNameName="text-right">
                                <button classNameName="btn btn-info"onClick={()=>deleteProduct(product_id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
            <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src={'http://localhost:3009/' + product_photo} alt="" />
                                                </div>
                                                <div className="media-body">
                                                    <p>{product_name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>${product_price}</h5>
                                        </td>
                                        <td>
                                            <h5>{qty}</h5>
                                        </td>
                                        <td>
                                            <h5>$.{product_price*qty}.00</h5>
                                        </td>
                                    </tr>
                                   
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>$.{product_price}.00</h5>
                                        </td>
                                    </tr>
                
                                </tbody>
                            </table>
                            <div className="checkout_btn_inner float-right">
        
                                <button className="btn_1 mx-2"onClick={()=>deleteProduct(product_id)}>Delete</button>
                                <button className="btn_1 mx-2" onClick={()=>nevigate('/payment')}>Proceed to checkout</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CartP
