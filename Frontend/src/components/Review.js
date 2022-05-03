import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";

export default function Review() {
  const [data, setData] = useState([]);
  const product_id = localStorage.getItem("productId");
  const stars = Array(5).fill(0);
//   const [starCount, setStarCount] = useState(0);
let starCount = 0
  const handleClick = value => {
    setStarCount(value)
}
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

  

  useEffect(() => {
    axios
      .get(`http://localhost:3009/review/${product_id}`, {
        headers: {
          token: window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("Response", response);
        setData(response.data.response);
      });
  }, []);

  //console.log("dgue", data)

  return (
    <div>
      <section className="breadcrumb_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner">
                <h2>Reviews</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br /> <br /> <br />
      {data.map((val) => (
        <div className="justify-content-center">
          <section
            className="blog_area"
            style={{ textAlign: "center", marginLeft: "20rem" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mb-5 mb-lg-0">
                  <div className="blog_left_sidebar">
                    <article className="blog_item">
                      <div className="blog_item_img">
                        <img
                          className="card-img rounded-0"
                          src="img/blog/single_blog_1.png"
                          alt=""
                        />
                        <a href="#" className="blog_item_date">
                          <h5>Review</h5>
                        </a>
                      </div>
                        
                      <div className="blog_details">
                        {/* <a className="d-inline-block"> */}
                        {/* {starCount = val.review_star} */}
                        
                          {stars.map((_, index) => {
                            return (
                                (index>val.review_star-1) ? (
                                    <FaStar
                                            key={index}
                                            size={24}
                                            // colors.orange
                                            // style={{color:""}}
                                    />
                                    
                                ) : (
                                    <FaStar
                                            key={index}
                                            size={24}
                                            // colors.orange
                                            style={{color:"orange"}}
                                        />  
                                )
                                
                            );
                          })}
                        {/* </a> */}
                        <p>{val.review_description}</p>
                        <ul className="blog-info-link">
                          <li>
                            <i className="far fa-user"></i>
                            {val.user_name}
                          </li>
                        </ul>
                      </div>
                    </article>

                    {/* <nav className="blog-pagination justify-content-center d-flex">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Previous">
                                                <i className="ti-angle-left"></i>
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link">1</a>
                                        </li>
                                        <li className="page-item active">
                                            <a href="#" className="page-link">2</a>
                                        </li>
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Next">
                                                <i className="ti-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
}
