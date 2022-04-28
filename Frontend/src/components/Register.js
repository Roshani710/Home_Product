import React, { useState } from 'react'
import Axios from 'axios'
import { Link ,useNavigate} from 'react-router-dom'

export default function Register() {
    let nevigate=useNavigate()
    
    const [user_name,setUserName]=useState("");
    const [user_email,setUserEmail]=useState("")
    const [user_password,setUserPassword]=useState("")
    const [user_contact,setUserContact]=useState("")
    const [user_address,setUserAddress]=useState("")
    const [user_role,setUserRole]=useState("")


    const submitDetails=()=>{
        Axios.post('http://localhost:3009/register',
        {
            user_name:user_name,
            user_email:user_email,
            user_password:user_password,
            user_contact:user_contact,
            user_address:user_address,
            user_role:user_role
        }).then(()=>{
            alert("Successfully Inserted")
            nevigate("/homepage")
        }).catch(error => window.alert("Please Enter Valid Data"))

        //console.log(setUserName, setUserEmail, setUserAddress, setUserContact, setUserRole);
    }
    return (
      /*   <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="inputName" value={user_name} className="form-control" 
                                                    onChange={(e) => {setUserName(e.target.value)}} required/>
                                             <label className="form-label" htmlFor="inputName">Your Full Name</label>
                                                       </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="inputEmail" value={user_email} className="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                                                    onChange={(e) => {setUserEmail(e.target.value)}} required/>
                                                    <label className="form-label" htmlFor="inputEmail">Your Email</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="inputPassword" value={user_password} className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                                    onChange={(e) => {setUserPassword(e.target.value);}} required/>
                                                    <label className="form-label" htmlFor="inputPassword">Password</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="tel" id="inputNumber" value={user_contact} className="form-control" pattern='[6-9]{1}[0-9]{9}' 
                                                    onChange={(e) => {setUserContact(e.target.value);}} required/>
                                                    <label className="form-label" htmlFor="inputNumber">Contact No</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="inputAddress" value={user_address} className="form-control" onChange={(e) => {
                                                        setUserAddress(e.target.value);
                                                    }} required/>
                                                    <label className="form-label" htmlFor="inputAddress">Address</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                <label value={user_role} className="form-label" htmlFor="inputRole">Select Role:</label>
                                                <br/>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="User" onChange={(e) => {
                                                        setUserRole(e.target.value);
                                                    }}/>
                                                        <label className="form-check-label" htmlFor="inlineRadio1">User</label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Vendor" onChange={(e) => {
                                                        setUserRole(e.target.value);
                                                    }} />
                                                        <label className="form-check-label" htmlFor="inlineRadio2">Vendor</label>
                                                    </div>
                                                </div>
                                            </div>

                                            

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg" onClick={submitDetails}>Register</button>
                                            </div>

                                            
                                            <Link to="/">Already have an account!</Link>

                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

 */  

        <section className="login_part section_padding ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_text text-center">
                        <div className="login_part_text_iner">
                            <h2>New to our Shop?</h2>
                            <p>A room should never allow the eye settle in one place.
                                It should settle at you and create fantacy.
                            </p>
                                <Link to="/"className="btn_3">Login</Link>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_form">
                        <div className="login_part_form_iner">
                            <h3>Sign up</h3>
                            <form className="row contact_form">
                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" id="name" name="name" value={user_name}
                                     onChange={(e) => {setUserName(e.target.value)}} required
                                        placeholder="Full Name"/>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="email" className="form-control" id="email" name="name" value={user_email}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    onChange={(e) => {setUserEmail(e.target.value) }} required
                                        placeholder="Email"/>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="password" className="form-control" id="password" name="password" value={user_password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                  onChange={(e) => {setUserPassword(e.target.value) }} required
                                        placeholder="Password"/>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" id="name" name="contact_no" value={user_contact}
                                     onChange={(e) => {setUserContact(e.target.value)}} required
                                        placeholder="Contact No."/>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="text" className="form-control" id="name" name="address" value={user_address}
                                     onChange={(e) => {setUserAddress(e.target.value)}} required
                                        placeholder="Address"/>
                                </div>
                               
                                <div className="single-element-widget mt-30" >
                                                
                                                <div className="switch-wrap d-flex justify-content-between">
                                                <label value={user_role} htmlFor="inputRole">Select Role:</label>
                                                <br/>
                                                    <div className="primary-radio">
                                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="User" onChange={(e) => {
                                                        setUserRole(e.target.value);
                                                    }}/>
                                                        <label htmlFor="inlineRadio1">User</label>
                                                    </div>
                                                    <div className="primary-radio" >
                                                        <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Vendor" onChange={(e) => {
                                                        setUserRole(e.target.value);
                                                    }} />
                                                        <label htmlFor="inlineRadio2">Vendor</label>
                                                    </div>
                                                </div>
                                            </div>
                                <div className="col-md-12 form-group">
                                   
                                    <button type="submit" value="submit" className="btn_3" onClick={submitDetails} to ="/homepage">
                                        Register 
                                    </button>
                        
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   )
}
