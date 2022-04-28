import React, { useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { DataContext } from '../context/DataContext'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Sdata from './Sdata';
import HomepageCard from './HomepageCard';

const HomePage = () => {
  const { cart } = useContext(DataContext)

  let nevigate = useNavigate()
  if (!window.localStorage.getItem('token')) {
    useEffect(() => {
      window.alert("You are not Autherized For this")
      nevigate('/')
    }, [])
  }
  return (
    <>
     {/*  <section classNameNameName="slider_section long_section">
        <div id="customCarousel" classNameName="carousel slide" data-ride="carousel">
          <div classNameName="carousel-inner">
            <div classNameName="carousel-item active">
              <div classNameName="container ">
                <div classNameName="row">
                  <div classNameName="col-md-5">
                    <div classNameName="detail-box">
                      <h1>
                        For All Your <br />
                        Furniture Needs
                      </h1>
                      <p>
                        A room should never allow the eye settle in one place. It should smile at you and create fantasy.  </p>
                      <div classNameName="btn-box">
                        <a href="/about" classNameName="btn1">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div classNameName="col-md-7">
                    <div classNameName="img-box">
                      <img src="assets/images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br>
      </br>
      <br></br>
      <br></br>
      <h2>Our Best Products</h2>
      <br></br>
      <div classNameName="wrapper">

        <HomepageCard
          imgsrc={Sdata[0].imgsrc}
          title={Sdata[0].title}
          pname={Sdata[0].pname}

        />
        <HomepageCard
          imgsrc={Sdata[1].imgsrc}
          title={Sdata[1].title}
          pname={Sdata[1].pname}
        />
        <HomepageCard
          imgsrc={Sdata[2].imgsrc}
          title={Sdata[2].title}
          pname={Sdata[2].pname}
        />
        <HomepageCard
          imgsrc={Sdata[3].imgsrc}
          title={Sdata[3].title}
          pname={Sdata[3].pname}
        />
        <HomepageCard
          imgsrc={Sdata[4].imgsrc}
          title={Sdata[4].title}
          pname={Sdata[4].pname}
        />
        <HomepageCard
          imgsrc={Sdata[5].imgsrc}
          title={Sdata[5].title}
          pname={Sdata[5].pname}
        />
      </div> */}
      
    
    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md -5">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h1>Best
                                Products</h1>
                            <p>Inner Peace Starts At Home..!!
                                </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner_img">
            <img src="assets/img/banner1.png" alt="#" className="img-fluid"/>
            <img src="assets/img/banner_pattern.png " alt="#" className="pattern_img img-fluid"/>
        </div>
    </section>

    <section className="trending_items">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section_tittle text-center">
                        <h2>Trending Items</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_product_item">
                        <div className="single_product_item_thumb">
                            <img src="assets/img/tranding_item/2.jpg" alt="#" className="img-fluid"/>
                        </div>
                        <h3> <a href="single-product.html">Chair</a> </h3>
                        <p>From $5</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_product_item">
                        <img src="assets/img/tranding_item/4.jpg" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Sofa</a> </h3>
                        <p>From $5</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_product_item">
                        <img src="assets/img/tranding_item/5.jpg" alt="#" className="img-fluid"/>
                        <h3> <a href="single-product.html">Table</a> </h3>
                        <p>From $5</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
   
   
    </>
  )
}

export default HomePage
