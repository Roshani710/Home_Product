
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

const Newadd = () => {
    let nevigate=useNavigate()
    if(!window.localStorage.getItem('token')){
        useEffect(()=>{
        window.alert("You are not Autherized For this")
        nevigate('/')
        },[])
      }
    const [product_name, setProductName] = useState("");
    const [product_description, setProductDescription] = useState("");
    const [product_price, setProductPrice] = useState("");
    const [product_discount, setProductDiscount] = useState("");
    const [product_photo, setProductPhoto] = useState("");
    const [product_category, setProductCategory] = useState("");
    const [user_id, setUserId] = useState(localStorage.getItem("EcomUserId"))

    const addproduct = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('product_name', product_name)
        formData.append('product_description', product_description)
        formData.append('product_price', product_price)
        formData.append('product_discount', product_discount)
        formData.append('product_photo', product_photo)
        formData.append('product_category', product_category)
        
formData.append("user_id", user_id);

        await Axios.post('http://localhost:3009/addProduct', formData,{
            headers: {
                token:window.localStorage.getItem('token')
            }
        }).then(() => {
            alert("Successfully Inserted")
        }).catch(error => window.alert("Please Enter Valid Data"))

    }
  return (
    <>
        <section class="login_part section_padding ">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <div class="login_part_text text-center">
                        <div class="login_part_text_iner">
                            <h2>Add Your Product</h2>
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
                                    <input type="text" class="form-control" id="name" name
                                       onChange={(e) => { setProductName(e.target.value) }} placeholder="Product Name"/>
                                </div>
                                
                                <div className="form-outline flex-fill mb-0">
                                                <label  className="form-label" htmlFor="inputRole">Select Product Category:</label>
                                                <br />
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" 
                                                    onChange={(e) => {setProductCategory(e.target.value);}} />
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Office</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" 
                                                    onChange={(e) => { setProductCategory(e.target.value);}} />
                                                    <label className="form-check-label" htmlFor="inlineRadio2">Living Room</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" 
                                                    onChange={(e) => { setProductCategory(e.target.value);}} />
                                                    <label className="form-check-label" htmlFor="inlineRadio3">Dining</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" 
                                                    onChange={(e) => { setProductCategory(e.target.value);}} />
                                                    <label className="form-check-label" htmlFor="inlineRadio4">Bedroom</label>
                                                </div>
                                            </div>
                                            <label  className="form-label" htmlFor="inputRole">Product Description</label>
                                <div class="col-md-12 form-group p_star">
                                    <textarea type="text" class="form-control" rows={3} id="name" name="name" 
                                       onChange={(e) => { setProductDescription(e.target.value) }} placeholder="Product Description"/>
                                </div>
                                <label  className="form-label" htmlFor="inputRole">Product Price($)</label>
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="name" name="name" 
                                       onChange={(e) => { setProductPrice(e.target.value) }} placeholder="Product Price"/>
                                </div>
                                <label  className="form-label" htmlFor="inputRole">Product Discount</label>
                                <div class="col-md-12 form-group p_star">
                                    <input type="text" class="form-control" id="name" name="name" 
                                       onChange={(e) => { setProductDiscount(e.target.value) }} placeholder="Product Discount"/>
                                </div>
                                <label  className="form-label" htmlFor="inputRole">Product Image</label>
                                <input type="file" id="product image" className="form-control" placeholder="Product Image"
                                                onChange={(e) => { setProductPhoto(e.target.files[0]) }} required />

                                <div class="col-md-12 form-group">
                                    
                                    <button type="submit" value="submit" class="btn_3" onClick={addproduct}>
                                        Publish
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

export default Newadd