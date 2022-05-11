import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import Header from './Header'
import axios from 'axios'




function VendorviewCard({ product_id, product_name, product_description, product_price, product_discount, product_photo }) {

    const [products, setProducts] = useState([])
const navigate =useNavigate()
    useEffect(() => {
        //console.log("test")
        getProductsData()
    }, [])


    async function getProductsData() {
        const { data } = await axios.get('http://localhost:3009/viewProduct',{
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
        window.location.reload()
    }

    function nextpage(product_id){
        // alert(product_id)
        navigate(`/updateproduct/${product_id}`)
    }



 


  return (
    <>
      {/* <Header /> */}




{/* 
      <div class="col-lg-4 col-md-6 text-center strawberry" style={{height: "50px"}}>
        <div className="single-product-item">
          <div class="product-image">
            <a><img className="imgs" src={'http://localhost:3009/' + product_photo} alt="" /></a>
          </div>
        
          <p class="product-price">{product_name}</p>
          <h3><p class="product-price">Rate: $ {product_price}<span>Discount: $ {product_discount}</span></p></h3>
          <p class="excerpt">{product_description}</p>
       
          <a class="cart-btn mx-2" onClick={() => nextpage(product_id)}><i class="fas fa-edit"> Edit</i> </a>
          <a class="cart-btn mx-2" onClick={() => deleteOperation(product_id)}><i class="fas fa-trash"> Delete</i></a>
        </div>
      </div>
  */}
  <div class="cart-section mt-150 mb-150">
        <div class="container">
          <div class="row">
              <center>
            <div class="col-lg-8 col-md-12">
              <div class="cart-table-wrap">
                <table class="cart-table">
                  <thead class="cart-table-head">
                    <tr class="table-head-row">
                      {/* <th class="product-remove"></th> */}
                      {/* <th class="product_id">#</th> */}
                      <th class="product-image">Product Image</th>
                      <th class="product-price">Product Name</th>
                      <th class="product-total">Product Price</th>
                      <th class="product-total">Update</th>
                      <th class="product-total">Delete</th>
                    
                    </tr>
                  </thead>
                  <tbody>
                  
                    <tr>
                    <td class="product-image"><img src={'http://localhost:3009/' + product_photo} alt="" /></td>
                    <td class="product-name">{product_name}</td>
                     <td class="product-price">{product_price}</td>
                  
<td><a class="cart-btn mx-2" onClick={() => nextpage(product_id)}><i class="fas fa-edit"> Edit</i> </a>   </td>
          <td><a class="cart-btn mx-2" onClick={() => deleteOperation(product_id)}><i class="fas fa-trash"> Delete</i></a></td>
     
            
                    </tr>
                
                  </tbody>
                </table>
              </div>
            </div>
            </center>
          </div>
        </div>
      </div>





    </>
  )
}

export default VendorviewCard
