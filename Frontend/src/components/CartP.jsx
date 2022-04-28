import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const CartP = ({
  product_name,
  product_id,
  product_price,
  product_photo,
  qty,
  product_discount,
}) => {
  const nevigate = useNavigate();
  const { cart, setCart } = useContext(DataContext);
  const deleteProduct = (product_id) => {
    const exist = cart.find((x) => x.product_id === product_id);
    if (exist) {
      setCart(cart.filter((x) => x.product_id !== product_id));
      // console.log(`pre ${id}`)
    }
  };
  console.log(product_discount);
  return (
    <>
      <section className="cart_area">
        <div className="container">
          <div className="cart_inner">
        
              <table className="table">
                
                <tbody>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src={"http://localhost:3009/" + product_photo}
                            alt=""
                            className='table td img'
                          />
                        </div>
                        <td>
                        <div className="media-body">
                          <p>{product_name}</p>
                        </div>
                        </td>
                        
                      </div>
                    </td>
                    <td>
                      <h5>${product_price}</h5>
                    </td>
                    <td>
                      <h5>{qty}</h5>
                    </td>
                    <td>
                      <h5>$.{product_price * qty}.00</h5>
                    </td>
                  </tr>

                  {/* <tr>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>$.{product_price}.00</h5>
                                        </td>
                                    </tr> */}
                </tbody>
              </table>
            </div>
    
        </div>
      </section>
    </>
  );
};

export default CartP;