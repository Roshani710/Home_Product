import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Cart = () => {
  const user_id = localStorage.getItem("EcomUserId");
  //const product_id = localStorage.getItem("productId")

  const [data, setData] = useState([]);

  const nevigate = useNavigate();

  if (!window.localStorage.getItem("token")) {
    useEffect(() => {
      window.alert("You are not Autherized For this");
      nevigate("/");
    }, []);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3009/viewcart/${user_id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
          console.log(response.data.response)
          setData(response.data.response);
      });
  }, []);

  async function deleteoncart(user_id, product_id) {
    let result = await fetch(
      `http://localhost:3009/deleteCart/${user_id}/${product_id}`,
      {
        method: "DELETE",
      }).then(() => {
        window.location.reload();
    })

  }

  return (
    <>
      <section className="breadcrumb_part my-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner">
                <h2>My Cart</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cart_area my-3">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((product) => (
                    <tr>
                      <td>
                        <img
                          src={"http://localhost:3009/" + product.product_photo}
                          alt=""
                        />
                      </td>
                      <td>{product.product_name}</td>
                      <td>{product.product_price}</td>
                      <td>{product.product_qty}</td>
                      <td>
                        <span>
                          <i
                            class="fa fa-trash"
                            aria-hidden="true"
                            onClick={() =>
                              deleteoncart(user_id, product.product_id)
                            }
                          />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <div className="text-right">
        <button className="btn btn-info" onClick={() => nevigate("/payment")}>
          Check Out
        </button>
      </div>
    </>
  );
};

export default Cart;
