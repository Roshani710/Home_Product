import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

const ViewUsers = () => {
  const [products, setProducts] = useState([])
  const vendor_id=localStorage.getItem("EcomUserId")
  //const vendor_id = useParams()
  //console.log(product_id)
  useEffect(() => {
    //console.log("test")
    getProductsData()
}, [])

async function getProductsData() {
  
    const { data } = await axios.get(`http://localhost:3009/viewusers/${vendor_id}`,{
        headers: {
            token:window.localStorage.getItem('token')
        }
    })
    setProducts(data.products.reverse())
  }

  return (
   <div>
    <section className="cart_area section_padding">
                <div className="container">
                    <div className="cart_inner">
                    <div className="checkout_btn_inner float-right">
                    <Link className="nav-link" to="/newadd">
                                <button className="btn_1 mx-2" >Add Product</button></Link>
                                {/* <button className="btn_1 mx-2" onClick={()=>nevigate('/payment')}>Proceed to checkout</button> */}
                                <Link className="nav-link" to="/viewusers/{vendor_id}">
                                <button className="btn_1 mx-2" >View Users</button></Link>       
                            </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">User Name</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Product Price</th>
                                        <th scope="col">Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                  products.map((product)=>(
                                    <tr>
                                    <td>
                                            <h5>{product.user_name}</h5>
                                        </td>
                                        
                                        <td >
                                        <div className="media-body">
                                            <h5>{product.product_name}</h5>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>{product.product_qty}</h5>
                                        </td>
                                        <td>
                                            <h5>{product.product_price}</h5>
                                        </td>
                                        <td>
                                            <h5>{product.payment_status}</h5>
                                        </td>
                        
                                    </tr>
                                  ))
                                }
                                   
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </div>
            </section>
   </div>

  )
}

export default ViewUsers