import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Navbar = () => {
  const {cart}=useContext(DataContext)
  const user_id = localStorage.getItem("EcomUserId")
  function Logout(){
    localStorage.clear()
    navigate(`/`)
  }
  
    return (
        <header className="main_menu home_menu">
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="/homepage"> <img src="assets/img/logo.png" alt="logo"/> </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_icon"><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse main-menu-item" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link className="nav-link" type="text" to="/homepage">Home</Link>
  
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" type="text" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link" type="text" to="/viewproduct">Product</Link>
                                </li> 
                        
                            </ul>
                        </div>
                        
                        <div class="hearer_icon d-flex align-items-center">
                            <Link className='mx-2' to='/cart'>
                                <i class="flaticon-shopping-cart-black-shape"></i>
                                <span style={{ color: "black"}}>{cart.length}</span>
                            </Link>
                            
                            <Link className='mx-2' type="text" style={{ color: "black"}} aria-hidden="true" to={"/orderhistory/"+user_id}>My Orders</Link>
                        </div>



                    </nav>
                </div>
            </div>
        </div>
       
    </header>

    )
}

export default Navbar
