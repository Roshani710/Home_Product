import React, { useState, useEffect } from 'react'
import {  useParams,useNavigate } from "react-router-dom";
import axios from 'axios';

const NewUpdate = () => {
    const { id } = useParams()
    let nevigate=useNavigate()
    //alert(id)
    const [product, setProduct] = useState([])
    const [product_id,setProductId]=useState(id)
    const [product_name, setProductName] = useState("");
    //const [product_category, setProductCategory] = useState("");
    const [product_description, setProductDescription] = useState("");
    const [product_price, setProductPrice] = useState(0);
    const [product_discount, setProductDiscount] = useState(0);
    //const [product_photo, setProductPhoto] = useState("");

    useEffect(async() => {
        const loadProduct = async () => {
            const result = await axios.get(`http://localhost:3009/viewproduct/${id}`);
            console.log(result.data)
            
            setProduct(result.data.products[0]) //main part
            //setProduct(result)
            setProductName(result.data.product_name)
            //setProductCategory(result.data.product_category)
            setProductDescription(result.data.product_description)
            setProductPrice(result.data.product_price)
            setProductDiscount(result.data.product_discount)
            //setProductPhoto(result.data.product_photo)
            setProductId(product_id)
            
            //setProduct(result.data)
            
        
        }
        loadProduct()
    }, [])
          
    
     function onSubmit( )  {
      //alert(product_id)
        console.log("enter",product_id)
        console.log("1")
        axios.put(`http://localhost:3009/updateProduct/${product_id}`,
       {
         product_id:product_id,
         product_name:product_name,
         //product_category:product_category,
         product_description:product_description,
         product_price:product_price,
         product_discount:product_discount,
         //product_photo:product_photo
  
       }).then(() => {
          console.log("hello")
         alert("Successfully Inserted")
         nevigate("/newpage")
        
     }).catch(error => console.log("error===>",error))
  
      // .then(res =>{
      //   res.data()
      // })
       //navigate("/viewproduct")
      //alert(id)
  }
  return (
    <>
       <section class="login_part section_padding ">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <div class="login_part_text text-center">
                        <div class="login_part_text_iner">
                            <h2>Update Your Product </h2>
                            <p>There are advances being made in science and technology
                                everyday, and a good example of this is the</p>
                            {/* <a href="#" class="btn_3">Create an Account</a> */}
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="login_part_form">
                        <div class="login_part_form_iner">
                            
                            <form class="row contact_form">
                            <label  className="form-label" htmlFor="inputRole">Product Name</label>
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="name" 
                                       defaultValue={product.product_name}  onChange={(e) => { setProductName(e.target.value) }} placeholder="Product Name"/>
                                </div>
                                
                        
                                            <label  className="form-label" htmlFor="inputRole">Product Description</label>
                                <div class="col-md-12 form-group p_star">
                                    <textarea type="text" class="form-control" rows={3} id="name" 
                                       defaultValue={product.product_description}  onChange={(e) => { setProductDescription(e.target.value) }} placeholder="Product Description"/>
                                </div>
                                <label  className="form-label" htmlFor="inputRole">Product Price($)</label>
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="name" 
                                        defaultValue={product.product_price}onChange={(e) => { setProductPrice(e.target.value) }} placeholder="Product Price"/>
                                </div>
                                <label  className="form-label" htmlFor="inputRole">Product Discount</label>
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="name" 
                                       defaultValue={product.product_discount} onChange={(e) => { setProductDiscount(e.target.value) }} placeholder="Product Discount"/>
                                </div>
                               

                                <div class="col-md-12 form-group">
                                    
                                    <button type="button"  class="btn_3" onClick={() => onSubmit(product_id)}>
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default NewUpdate