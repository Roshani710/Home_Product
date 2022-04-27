import React, {useState} from 'react'
import Axios from 'axios'
import { useNavigate} from 'react-router-dom'

export default function ForgotPassword() {
    const [user_email,setUserEmail]=useState("");
    let nevigate=useNavigate()
   
    const forgotPassword=()=>{
        Axios.post('http://localhost:3009/resetPassword',
        {
            user_email:user_email
        }).then(()=>{
            alert("Successfully Sent to Your Email Id, Please Check!")
            nevigate("/resetpassword")
            
        }).catch(error => window.alert("Please Enter Valid Data"))
    }

  return (
    // <section className="vh-100" style={{backgroundColor: "#eee"}}>
    //         <div className="container h-100">
                
    //             <div className="row d-flex justify-content-center align-items-center h-100">
    //                 <div className="col-lg-12 col-xl-11">
    //                     <div className="card text-black" style={{borderRadius: "25px"}}>
    //                         <div className="card-body p-md-5">
    //                             <div className="row justify-content-center">
    //                                 <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    //                                     <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Forgot Password</p>

    //                                     <form className="mx-1 mx-md-4">

    //                                         <div className="d-flex flex-row align-items-center mb-4">
    //                                             <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
    //                                             <div className="form-outline flex-fill mb-0">
    //                                                 <input type="email" id="forgot_email" className="form-control"  onChange={(e) => {setUserEmail(e.target.value) }} required/>
    //                                                 <label className="form-label" htmlFor="forgot_email"><h6>Enter registered Email</h6></label>
    //                                             </div>
    //                                         </div>

                                            

    //                                         <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
    //                                             <button type="button" className="btn btn-primary btn-lg" onClick={forgotPassword}>Send</button>
                                                
    //                                         </div>
                                            
    //                                     </form>

    //                                 </div>
    //                                 <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

    //                                     <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />

    //                                 </div>
                                
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
<section className="login_part section_padding ">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_text text-center">
                        <div className="login_part_text_iner">
                            <h2>Forgot Password</h2>
                            <p>There are advances being made in science and technology
                                everyday, and a good example of this is the</p>
                    
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="login_part_form">
                        <div className="login_part_form_iner">
                            <h3>Forgot Password
                                </h3>
                            <form className="row contact_form">
                                <div className="col-md-12 form-group p_star">
                                    <input type="email" className="form-control" id="email"
                                     onChange={(e) => {setUserEmail(e.target.value) }} required
                                        placeholder="Email"/>
                                </div>
                                
                                <div className="col-md-12 form-group">
                                   
                                    <button type="button" className="btn_3"  onClick={forgotPassword} >
                                        Send
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