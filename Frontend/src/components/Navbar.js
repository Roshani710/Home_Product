import React, { useContext } from 'react'

import { Link ,useNavigate} from 'react-router-dom'
import { DataContext } from '../context/DataContext'

const Navbar = () => {
  const {cart}=useContext(DataContext)
  let navigate=useNavigate()
  // console.log(cart)
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
                        <a className="navbar-brand" href="index.html"> <img src="assets/img/logo.png" alt="logo"/> </a>
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
                        {/* <div className="hearer_icon d-flex align-items-center">
                          
                          
                            <li className="nav-item">
                                <Link className="flaticon-shopping-cart-black-shape" type="text" to="/cart"><span>{cart.length}</span></Link>
                                </li> 
                                <Link className='mx-2' type="text" style={{ color: "black"}} aria-hidden="true" to={"/orderhistory/"+user_id}>My Orders</Link>

                                <a onClick={Logout} > Logout <i className="fa fa-sign-out" aria-hidden="true"></i></a>
                        </div> */}
                        <div class="button-group-area mt-40">
				{localStorage.getItem('token')?<form classname="d-flex">
				<Link to="/cart" class="genric-btn primary radius">Cart<span>{cart.length}</span></Link>
				<Link to={"/orderhistory/"+user_id} class="genric-btn primary radius">My Orders</Link>
                <a style={{color:'white'}} onClick={Logout} class="genric-btn primary radius">Logout</a>
                </form>:
                <a style={{color:'white'}}  class="genric-btn primary radius">Login</a>}
               
                

			</div>
                    </nav>
                </div>
            </div>
        </div>
       
    </header>

    )
}

export default Navbar
