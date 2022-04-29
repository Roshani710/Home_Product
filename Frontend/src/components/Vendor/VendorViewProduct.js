// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'

// const ViewProduct = () => {
//     const [products, setProducts] = useState([])
  
//     useEffect(() => {
//       const getProductsData = async () => {
//         const { data } = await axios.post('http://localhost:3010/viewProduct')
//         console.log(data)
//         setProducts(data.products)
//       }
//       getProductsData()
//     }, [])
//     return (
//         <>
//             <div>
//                 <div className="container-scroller">

//                     <nav className="navbar navbar-expand-lg custom_nav-container ">
//                         <a className="navbar-brand" href="index.html">
//                             <span>
//                                 HOME PRODUCT
//                             </span>
//                         </a>
//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className=""> </span>
//                         </button>

//                         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
//           <ul className="navbar-nav  ">
//             <li className="nav-item active">
//               <a className="nav-link" href="index.html">View Product <span className="sr-only">(current)</span></a>
//             </li>
            
//           </ul>
//         </div>

//                         </div>
//                     </nav>
//                     <div className="container-fluid page-body-wrapper">

//                         <nav className="sidebar sidebar-offcanvas" tabindex="-1" id="sidebar">
//                             <ul className="nav">
                            

//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/addproduct">
//                                         <i className="mdi mdi-view-headline menu-icon"></i>
//                                         <span className="menu-title">AddProduct</span>
//                                     </Link>
//                                 </li>


//                                 <li className="nav-item">
//                                     <Link className="nav-link" to="/viewproduct">
//                                         <i className="mdi mdi-grid-large menu-icon"></i>
//                                         <span className="menu-title">ViewProduct</span>
//                                     </Link>
//                                 </li>



//                             </ul>
//                         </nav>

//                         <div className="main-panel">
                       
//                             <div className="content-wrapper">
//                                 <div className='reports'>
//                                     <div>
//                                     <table className="table">
//                                         <thead>
//                                             <tr>
//                                                 <th >#</th>
//                                                 <th >Product_Name</th>
//                                                 <th >product_description</th>
//                                                 <th >product_price</th>
//                                                 <th >product_discount</th>
//                                                 <th >product_photo</th>

//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             {
//                                                 products.map((getcate) => (
//                                                     <tr >
//                                                         <td>{getcate.product_id}</td>
//                                                         <td>{getcate.product_name}</td>
//                                                         <td>{getcate.product_description}</td>
//                                                         <td>{getcate.product_price}</td>
//                                                         <td>{getcate.product_discount}</td>
//                                                         <td><img src={'http://localhost:3009/' + getcate.product_photo} /></td>
//                                                     </tr>
//                                                 )

//                                                 )
//                                             }
//                                         </tbody>
//                                     </table>
//                                     </div>
//                                 </div>
//                             </div>
//                             <footer className="footer">
//                                 <div className="d-sm-flex justify-content-center justify-content-sm-between">
//                                     <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © <a href="https://www.bootstrapdash.com/" target="_blank">bootstrapdash.com </a>2021</span>
//                                     <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Only the best <a href="https://www.bootstrapdash.com/" target="_blank"> Bootstrap dashboard  </a> templates</span>
//                                 </div>
//                             </footer>

//                         </div>

//                     </div>

//                 </div>

//                 <script src="vendors/base/vendor.bundle.base.js"></script>

//                 <script src="vendors/chart.js/Chart.min.js"></script>
//                 <script src="vendors/datatables.net/jquery.dataTables.js"></script>
//                 <script src="vendors/datatables.net-bs4/dataTables.bootstrap4.js"></script>

//                 <script src="js/off-canvas.js"></script>
//                 <script src="js/hoverable-collapse.js"></script>
//                 <script src="js/template.js"></script>

//                 <script src="js/dashboard.js"></script>
//                 <script src="js/data-table.js"></script>
//                 <script src="js/jquery.dataTables.js"></script>
//                 <script src="js/dataTables.bootstrap4.js"></script>
//                 <script src="js/jquery.cookie.js" type="text/javascript"></script>
//             </div>
//         </>
//     )
// }

// export default ViewProduct;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
//import updateProduct from "./UpdateProduct"
import VendorNavbar from './VendorNavbar'

const VendorViewProduct = () => {
    const [products, setProducts] = useState([])

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
    } 
    return (
        <>

            <div>
                <div className="container-scroller">

                <VendorNavbar />
                    <div className="container-fluid page-body-wrapper">

                        <nav className="sidebar sidebar-offcanvas" tabIndex="-1" id="sidebar">
                            <ul className="nav">


                                <li className="nav-item">
                                    <Link className="nav-link" to="/addproduct">
                                        <i className="mdi mdi-view-headline menu-icon"></i>
                                        <span className="menu-title">AddProduct</span>
                                    </Link>
                                </li>


                                <li className="nav-item">
                                    <Link className="nav-link" to="/vendorviewproduct">
                                        <i className="mdi mdi-grid-large menu-icon"></i>
                                        <span className="menu-title">ViewProduct</span>
                                    </Link>
                                </li>



                            </ul>
                        </nav>


                        <div className="table-responsive" >
                            <table className="table" >
                                <thead>
                                    <tr>
                                        <th >product_id</th>
                                        <th >Product_Name</th>
                                        <th >product_description</th>
                                        <th >product_price</th>
                                        <th >product_discount</th>
                                        <th >product_photo</th>
                                        <th>product_action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map((product) => (
                                            <tr >
                                                <td>{product.product_id}</td>
                                                <td>{product.product_name}</td>
                                                <td>{product.product_description}</td>
                                                <td>{product.product_price}</td>
                                                <td>{product.product_discount}</td>
                                                <td><img src={'http://localhost:3009/' + product.product_photo} /></td>
                                                <td>
                                                <button className='delete' onClick={() => deleteOperation(product.product_id)}><span className="linkname">Delete</span></button>&nbsp;
                                                    <button className='update'><Link  to={`/updateproduct/${product.product_id}`}><span className="linkname">Update</span></Link></button></td>
                                                    {/* <button className='update'><Link  to={`/updateproduct/${product.product_id}`}><span className="linkname">Update</span></Link></button></td> */}

                                            </tr>
                                        )

                                        )
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

                <script src="vendors/base/vendor.bundle.base.js"></script>

                <script src="vendors/chart.js/Chart.min.js"></script>
                <script src="vendors/datatables.net/jquery.dataTables.js"></script>
                <script src="vendors/datatables.net-bs4/dataTables.bootstrap4.js"></script>

                <script src="js/off-canvas.js"></script>
                <script src="js/hoverable-collapse.js"></script>
                <script src="js/template.js"></script>

                <script src="js/dashboard.js"></script>
                <script src="js/data-table.js"></script>
                <script src="js/jquery.dataTables.js"></script>
                <script src="js/dataTables.bootstrap4.js"></script>
                <script src="js/jquery.cookie.js" type="text/javascript"></script>
            </div>
        </>
    )
}

export default VendorViewProduct;
