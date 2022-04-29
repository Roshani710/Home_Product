import React, { useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { useNavigate } from 'react-router'
import axios from 'axios'

export default function Pay() {
    const amount = localStorage.getItem('Total')
    console.log(amount)
    const email = localStorage.getItem('EcomEmail')
    const navigate = useNavigate();

    return (
        <div className='container' style={{
            textAlign: "center",
            height: "250px",
            paddingTop: "3rem"
        }}>
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
                            axios.post('http://localhost:3009/changeStatus', {
                                product_id: localStorage.getItem('productId')
                            })

                           
                            navigate('/success')

                            window.location.reload();
                        });
                    }}

                />
            </PayPalScriptProvider>
        </div>
    );
}
