import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { product_id } = useParams();

  let nevigate = useNavigate();
  if (!window.localStorage.getItem("token")) {
    useEffect(() => {
      window.alert("You are not Autherized For this");
      nevigate("/");
    }, []);
  }

  const [detdata, setDetdata] = useState([]);
  const [pdetails, setPdetails] = useState("1");

  const onSub = (e) => {
    e.preventDefault();
    // console.log(pdetails)
    const data = {
      product_id: detdata[0].product_id,
      product_name: detdata[0].product_name,
      product_price: detdata[0].product_price,
      product_description: detdata[0].product_description,
      product_photo: detdata[0].product_photo,
      qty: pdetails,
    };

    localStorage.setItem("photo", detdata[0].product_photo);
    localStorage.setItem("productId", detdata[0].product_id);
    localStorage.setItem("product", detdata[0].product_name);
    localStorage.setItem("price", detdata[0].product_price);
    localStorage.setItem("qty", pdetails);
    console.log("data", data);

    const cartData = {
      user_id: localStorage.getItem("EcomUserId"),
      product_id: localStorage.getItem("productId"),
      product_name: localStorage.getItem("product"),
      product_price: localStorage.getItem("price"),
      product_qty: localStorage.getItem("qty"),
      product_photo: localStorage.getItem("photo"),
    };

    console.log("cart", cartData);

    const res = axios
      .post(`http://localhost:3009/addCart`, cartData)
      .then(() => {
      nevigate("/viewproduct")});
  };

  const getData = async () => {
    const res = await axios.post(
      `http://localhost:3009/viewProduct/${product_id}`
    );
    setDetdata(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!detdata.length) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <div className="details">
        <div className="container">
          <section className="breadcrumb_part my-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb_iner">
                    <h2>Product Details</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="row my-3">
            <div className="col-md-6 col-12 mx-auto mb-3">
              <img
                src={"http://localhost:3009/" + detdata[0].product_photo}
                alt="#"
                className="img-fluid p-im"
              />
            </div>
            <div className="col-md-6 col-12 mx-auto mb-3 d-flex  flex-column mt-5">
              <h2>{detdata[0].product_name}</h2>
              <h4>
                Price : $ <strong>{detdata[0].product_price}.00</strong>{" "}
              </h4>
              <p>Description : {detdata[0].product_description}</p>
              <form onSubmit={onSub}>
                <input type="hidden" value={detdata[0].product_id} />
                <div className="form-group w-50">
                  <label for="sel1">Choose Qty:</label>
                  <select
                    className="form-control"
                    id=""
                    onChange={(e) => setPdetails(e.target.value)}
                    required
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="text-left">
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Add to cart"
                  />
                </div>
                {/* <input type="submit" className="btn btn-info" value="Add To Cart" /> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
