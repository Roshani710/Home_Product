import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProducts = ({ product_id, product_name, product_price, product_photo }) => {
    const nevigate = useNavigate()
   
    return (
        <>
            {/* <div classNameName="col-lg-4 col-md-6 col-12  mb-3 products-p">
            <div classNameName="card p-2">
                 <img src={'http://localhost:3009/' + product_photo} classNameName="img-fluid p-img"/> 
                <div classNameName="overlay">
                    <div classNameName="price">
                        <p>{product_name} </p>
                        <p>$.{product_price}.00</p>
                    </div>
                    <div classNameName="text-center">
                        <button classNameName="btn btn-info ml-1 mr-1" onClick={()=>nevigate(`/details/${product_id}`)}>View Details</button>
                    </div>

                </div>
            </div>
        </div> */}

            <div className="col-lg-4 col-md-6 col-12 products-p ">
                <div className="card p-2 ">

                    <div className="single_product_item ">
                        <img src={'http://localhost:3009/' + product_photo} alt="#" className='imgs' />
                        <h3> <a href="single-product.html">{product_name}
                        </a> </h3>
                        <p>{product_price}</p>
                        <div className="text-center">
                            <button className="btn btn-info ml-1 mr-1" onClick={() => nevigate(`/details/${product_id}`)}>View Details</button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default CardProducts
