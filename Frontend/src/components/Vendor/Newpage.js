import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Newpage = () => {
  const [products, setProducts] = useState([])
const u_id=localStorage.getItem("EcomUserId")
const vendor_id=localStorage.getItem("EcomUserId")
  useEffect(() => {
    //console.log("test")
    getProductsData()
}, [])

/* async function getProductsData() {
  const { data } = await axios.get('http://localhost:3009/viewProduct',{
      headers: {
          token:window.localStorage.getItem('token')
      }
  })
  setProducts(data.products.reverse())
} */
async function getProductsData() {
    const { data } = await axios.get(`http://localhost:3009/viewProductt/${u_id}`,{
        headers: {
            token:window.localStorage.getItem('token')
        }
    })
    setProducts(data.products.reverse())
  }

async function deleteOperation(id) {
  //alert(id)
  let result = await fetch('http://localhost:3009/deleteProduct/' + id, {
      method: 'DELETE'
  })
  getProductsData()
  result = await result.json();
  console.log(result)
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
                                <Link className="nav-link" to={"/viewusers/"+vendor_id}>
                                <button className="btn_1 mx-2" >view users</button></Link>          
                            </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">Product Id</th>
                                        <th scope="col">Product Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Product Description</th>
                                        <th scope="col">Product Price</th>
                                        <th scope="col">Product Discount</th>
                                        <th scope="col">Product Update</th>
                                        <th scope="col">Product Delete</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                  products.map((product)=>(
                                    <tr>
                                    <td>
                                            <h5>{product.product_id}</h5>
                                        </td>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img src={'http://localhost:3009/' + product.product_photo} alt="image" />
                                                </div>
                                                {/* <div className="media-body">
                                                    <p>{product.product_name}</p>
                                                </div> */}
                                            </div>
                                        </td>
                                        <td >
                                        <div className="media-body">
                                            <h5>{product.product_name}</h5>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>{product.product_description}</h5>
                                        </td>
                                        <td>
                                            <h5>{product.product_price}</h5>
                                        </td>
                                        <td>
                                            <h5>{product.product_discount}</h5>
                                        </td>
                                        <td>
                                        <Link  to={`/newupdate/${product.product_id}`}>
                                        <i className="fas fa-edit"></i>
                                        </Link>
                                        </td>
                                        <td>
                                        <i onClick={() => deleteOperation(product.product_id)} className="fas fa-trash"></i>
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

export default Newpage