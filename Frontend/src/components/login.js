import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import {  useNavigate } from 'react-router-dom';


export default function Login() {
    const [user_email,setEmail]=useState("");
    const [user_password,setPassword]=useState("");
    let navigate=useNavigate()

        const login= async (e)=>{
            e.preventDefault();  
            const response= await fetch("http://localhost:3009/login",{
                method:'POST',
                headers:{ 
                    'content-type':'application/json',
                },
                body : JSON.stringify({user_email:user_email,user_password:user_password})
            });
            const json=await response.json()
            console.log(json)
    
            if(json.status)
            { 
                window.localStorage.setItem('token',json.token)
                //console.log(localStorage.getItem('token'));
                window.localStorage.setItem("EcomEmail",json.user_email)
                window.localStorage.setItem("EcomUserId",json.user_id)
                window.localStorage.setItem("EcomUser",json.user)
                if(json.role==="User")
                {
                    navigate("/homepage")
                }
                else{
                    navigate("/vendor")
                }
               

            }else{
                alert("Invalid Credentials")
            }
            /* console.log((await response).status)
            if((await response).status==200){
                //localStorage.setItem('token',response.data)
                navigate("/homepage")
            }
            else{
                alert("Please enter valid data")
            } */
            
        }
    
    return (
        // <section classNameName="vh-100" style={{ backgroundColor: "#eee" }}>
        //     <div classNameName="container h-100"> 
        //         <div classNameName="row d-flex justify-content-center align-items-center h-100">
        //             <div classNameName="col-lg-12 col-xl-11">
        //                 <div classNameName="card text-black" style={{ borderRadius: "25px" }}>
        //                     <div classNameName="card-body p-md-5">
        //                         <div classNameName="row justify-content-center">
        //                             <div classNameName="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

        //                                 <p classNameName="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

        //                                 <form classNameName="mx-1 mx-md-4">

                                            

        //                                     <div classNameName="d-flex flex-row align-items-center mb-4">
        //                                         <i classNameName="fas fa-envelope fa-lg me-3 fa-fw"></i>
        //                                         <div classNameName="form-outline flex-fill mb-0">
        //                                             <input type="email" id="inputEmail" value={user_email} classNameName="form-control" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
        //                                               onChange={(e) => {setEmail(e.target.value) }} required/>
        //                                             <label classNameName="form-label" htmlFor="inputEmail">Your Email</label>
        //                                         </div>
        //                                     </div>

        //                                     <div classNameName="d-flex flex-row align-items-center mb-4">
        //                                         <i classNameName="fas fa-lock fa-lg me-3 fa-fw"></i>
        //                                         <div classNameName="form-outline flex-fill mb-0">
        //                                             <input type="password" id="inputPassword" value={user_password} classNameName="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
        //                                              onChange={(e) => {setPassword(e.target.value) }} required/>
        //                                             <label classNameName="form-label" htmlFor="inputPassword">Password</label>
        //                                         </div>
        //                                     </div>

        //                                     <div classNameName="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        //                                     <Link to="/forgotpassword">Forget Password</Link>
        //                                     </div>
                                            

                                        
        //                                     <div classNameName="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        //                                      <button type='button' classNameName="btn btn-primary btn-lg" onClick={login} to = "/homepage">login</button> 
        //                                        </div>

                                            
        //                                     <div classNameName="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
        //                                     <Link to="/register">Create Account</Link>
        //                                     </div>

        //                                 </form>

        //                             </div>
        //                             <div classNameName="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

        //                                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" classNameName="img-fluid" alt="Sample image" />

        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section className="login_part section_padding ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_text text-center">
                        <div className="login_part_text_iner">
                            <h2>New to our Shop?</h2>
                            <p>There are advances being made in science and technology
                                everyday, and a good example of this is the</p>
                                <Link to="/register"className="btn_3">Create Account</Link>
                            
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_form">
                        <div className="login_part_form_iner">
                            <h3>Welcome Back ! <br/>
                                Please Sign in now</h3>
                            <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                                <div className="col-md-12 form-group p_star">
                                    <input type="email" className="form-control" id="email" name="name" value={user_email}  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    onChange={(e) => {setEmail(e.target.value) }} required
                                        placeholder="Email"/>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <input type="password" className="form-control" id="password" name="password" value={user_password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                  onChange={(e) => {setPassword(e.target.value) }} required
                                        placeholder="Password"/>
                                </div>
                                <div className="col-md-12 form-group">
                                   
                                    <button type="submit" value="submit" className="btn_3" onClick={login} to = "/homepage">
                                        log in
                                    </button>
                                    <Link className="lost_pass" to="/forgotpassword">forget password?</Link>
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