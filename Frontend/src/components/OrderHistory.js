// import axios from 'axios'
// import React, { useState, useEffect } from 'react'
// import { useParams } from 'react-router'

// export const OrderHistory = () => {
//     const [historyproduct,setHistoryproduct]=useState({})
//     const {user_id} = useParams()
//     console.log(user_id)
    

//     useEffect(async ()=>{
//         // getOrderhistory(user_id)
//         const data = await axios.post(`http://localhost:3009/orderhistory/${user_id}`)
//         setHistoryproduct(data.data.products)
//         console.log(data)
//         console.log(historyproduct)
//     },[])

//     // async function getOrderhistory(user_id){
//   return (
//       <>
//     <div>OrderHistory</div>
//     <div className="table-responsive" >
//                  <table className="table" >
//                      <thead>
//                          <tr>
//                             <th>no</th>
//                              <th >Sr.no</th>
//                              <th >Product_Name</th>
//                              <th >product_price</th>
//                              <th>qty</th>

//                          </tr>
//                      </thead>
//                         {/* <tbody>
//                          {
//                              historyproduct.map((product) => (
//                                  <tr >
//                                  <td>{product.user_id}</td>
//                                      <td>{product.product_id}</td>
//                                      <td>{product.product}</td>
//                                      <td>{product.price}</td>
//                                      <td>{product.qty}</td>

//                                  </tr>
//                              )

//                              )
//                          }
//                      </tbody>    */}
//                  </table>
//              </div>
// </>
//   )
  
// }

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
    <div>OrderHistory</div>
    <div className="table-responsive" >
                 <table className="table" >
                     <thead>
                         <tr>
                            <th>no</th>
                             <th >Sr.no</th>
                             <th >Product_Name</th>
                             <th >product_price</th>
                             <th>qty</th>
                            
                             <td>payment status</td>

                         </tr>
                     </thead>
                         <tbody>
                          {
                             data.map((product) => (
                                 <tr >
                                 <td>{product.user_id}</td>
                                     <td>{product.order_id}</td>
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
</>
  )
  
}
