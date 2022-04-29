import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export const OrderHistory = () => {
    const [data,setData]=useState([])
    
    const {user_id} = useParams()
    console.log(user_id)
    

    useEffect(()=>{
        getData()
    },[])
    const getData=async ()=>{
        // getOrderhistory(user_id)
        const {data} = await axios.get(`http://localhost:3009/orderhistory/${user_id}`)
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
                                                    <h2>Order Details</h2>
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
                                        <th scope="col">Name</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Qty</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                             data.map((product) => (
                                 <tr >
                            
                                     <td>{product.product}</td>
                                     <td>{product.price}</td>
                                     <td>{product.qty}</td>
                                     <td>{product.payment_status}</td>

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
