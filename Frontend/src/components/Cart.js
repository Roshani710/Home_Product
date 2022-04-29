import React, { useContext, useRef } from "react";
import CartP from "./CartP";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const nevigate = useNavigate();
  const { cart } = useContext(DataContext);
  

  console.log(cart);
  return (
    <>
      <div className="cart">
        {!cart.length ? (
          <>
            <div className="container">
              <h2>There is No Items In the Cart</h2>
              <button
                className="btn btn-info"
                onClick={() => nevigate("/viewproduct")}
              >
                Continue Shopping
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="container">
              <section class="breadcrumb_part">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="breadcrumb_iner">
                        <h2>cart list</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="row">
              <div className="table-responsive">
                  <table className="table">
                  <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                </table>
                </div>
                  
                {cart.map((val, ind) => {
                  return (
                    <>
                      <div className="checkout_btn_inner float-right my-4">
                      <CartP
                        key={ind}
                        product_photo={val.product_photo}
                        product_name={val.product_name}
                        product_price={val.product_price}
                        qty={val.qty}
                      />
                       
                      </div>

                    </>
                  );
                })}
                
              </div>
            
              <div className="checkout_btn_inner float-right">
                {/* <button
                  className="btn_1 mx-2"
                  onClick={() => deleteProduct(product_id)}
                >
                  Delete
                </button> */}
                <button
                  className="btn_1 mx-2 my-1"
                  onClick={() => nevigate("/payment")}
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;