import React from 'react'
import { Link } from 'react-router-dom'
import './HomepageCard.scss'
import {useNavigate} from 'react-router-dom';

const HomePageCard = (props) => {
//console.log(props)
    const navigate = useNavigate();
  const clickonimg = () => {
    const path = `/viewproduct`;
    navigate(path);
  }
    
    return (
        <>
            {/* <div style={{display: "flex", marginTop:"100"}}>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} 
                    alt="myPic" 
                    className="card_img" />
                    <div className="card_info">
                        <span className="card_category">{props.title} </span>
                        <h3 className="card_title">{props.pname} </h3>
                        <a href="" target="_blank">
                            <button> Buy Now </button>
                        </a>
                    </div>
                </div>
            </div>
            </div> */}
            {/* <div style={{ display: "flex"}}>
                <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap" />
                    <div class="card-block">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div> */}


            {/* <div style={{display: "flex"}}>
            <div className="col-lg-4 col-md-6 col-12  mb-3 products-p">
            <div className="card p-2">
                <img src="assets/images/b1.jpg" alt="tree" className="img-fluid p-img" />
                 <img src="" className="img-fluid p-img"/> 
                <div className="overlay">
                    <div className="price">
                        <p>www </p>
                        <p>222.00</p>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-info ml-1 mr-1">Add To Cart</button>
                        <button className="btn btn-info ml-1 mr-1" >View Details</button>
                    </div>

                </div>
            </div>
        </div>
</div> */}

            {/* <div onClick="">

                <div className='card-container'>
                    <div className='image-container'>
                        <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/online-furniture-stores-1610037638.jpg?crop=0.503xw:1.00xh;0.325xw,0&resize=640:*' alt='' />
                    </div>
                    <div className='card-content'>
                        <div className='card-title'>
                            <h3>title</h3>
                        </div>
                        <div className='card-body'>
                            <h3>body</h3>
                        </div>
                    </div>
                </div>

            </div> */}
            <div onClick={clickonimg}>
            <div className="wrapper">
            <div className="card">
                <div className="card__body">
                    <img src={props.imgsrc} class="card__image" />
                    <h2 className="card__title">{props.title}</h2>
                    {/* <p className="card__description">{props.pname}</p> */}
                </div>
                {/* <button className="card__btn">View Recipe</button> */}
            </div>
            </div>
            </div>
        </>
    )
}

export default HomePageCard