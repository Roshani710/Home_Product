import React, { useEffect, useRef } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Pay() {
  const amount = localStorage.getItem("Total");
  console.log(amount);
  const email = localStorage.getItem("EcomEmail");
  const navigate = useNavigate();
  let array = [];

  // orders
  axios.get(`http://localhost:3009/viewcart/${localStorage.getItem('EcomUserId')}`).then((response) => {
    console.log("Response", response)
    console.log("Res", response.data.response[0])
    for(let i=0; i<response.data.response.length; i++){
      console.log("ID", response.data.response[i].product_id)
      array.push(response.data.response[i].product_id);
     
    }
    console.log("Array", array);
    
  })

  // Authentication
  const timeout = useRef(null);
  const checkAuth = () => {
    axios
      .get("http://localhost:3009/isAuth", {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        if (!response.data.login) {
          alert("You are not Autherized For this");
          navigate("/");
        }
      });
  };
  useEffect(() => {
    timeout.current = setTimeout(checkAuth, "1h");
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <div>

        <div
          className="container"
          style={{
            textAlign: "center",
            height: "250px",
            paddingTop: "15rem",
          }}
        >
          <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "USD",
                        value: amount,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {

                  //payment_status update to paid
                  axios.post("http://localhost:3009/changeStatus", {
                    product_id: array,
                  });

                  // status update to paid in product table
                  axios.post("http://localhost:3009/changeProductStatus", {
                    product_id: array,
                  });

                  navigate("/success");

                  window.location.reload();
                });
              }}
            />
          </PayPalScriptProvider>
        </div>
      </div>
    </>
  );
}