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
      <section className="slider_section long_section">
        <div id="customCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-5">
                    <div className="detail-box">
                      <h1>
                        For All Your <br />
                        Furniture Needs
                      </h1>
                      <p>
                        A room should never allow the eye settle in one place. It should smile at you and create fantasy.  </p>
                      <div className="btn-box">
                        <a href="/about" className="btn1">
                          About Us
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="img-box">
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
      <div className="wrapper">

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
      </div>
    </>
  )
}

export default HomePage
