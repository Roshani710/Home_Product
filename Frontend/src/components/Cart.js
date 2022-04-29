import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

const Cart = () => {
    const [data,setData]=useState([])
    
    const {product_id} = useParams()
    
    useEffect(()=>{
        getData()
    },[])

    localStorage.getItem("product_photo");
    localStorage.getItem("product");
    localStorage.getItem("qty");
    localStorage.getItem("Total");

    const getData=async ()=>{

        const data = {
            
        }

        const res = await axios.post(`http://localhost:3009/viewCart`)
        setData(data.datas)
        
        console.log("data1 data.data.products===>",data.datas)
        //console.log("data2 data.data===>",data.datas)
        console.log("data3 data===>",data)
    }

    // async function getOrderhistory(user_id){
  return (
      <>
    <section className="breadcrumb_part my-2">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="breadcrumb_iner">
                                                    <h2>My Cart</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
            </section>
             <section className="cart_area section_padding my-2">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">&#9;</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                             data.map((product) => (
                                 <tr >
                                     <td>{product.product_photo}</td>
                                     <td>{product.product}</td>
                                     <td>{product.price}</td>
                                     <td>{product.qty}</td>
                                     <td>{product.total}</td>
                                 </tr>
                             )
                             )
                         } 
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

</>
  )
}

export default Cart
