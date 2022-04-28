import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};


const Ratings = () => {

    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const [description, setDescription] = useState("")
    const stars = Array(5).fill(0)
    const id = localStorage.getItem("EcomUserId")
    const pId = localStorage.getItem("productId")
    const uName = localStorage.getItem("EcomUser")

    const navigate = useNavigate()

    const submit = async(e) =>{
        e.preventDefault();
        axios.post('http://localhost:3009/ratings',
            {
                review_description: description,
                review_star: currentValue,
                user_id: id,
                product_id: pId,
                user_name:uName
                
            }).then((response) => {
                //console.log("1", response.data);
                if(response.data.message === "Exists!!"){
                    alert("Sorry, you've already done review!!");
                    navigate("/homepage");
                }else{
                    alert("Success!");
                    navigate("/homepage");
                }       
            })
    }

    const handleClick = value => {
        setCurrentValue(value)
    }
    

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };
    

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }
    


    return (

        <div style={styles.container}>
            <h4 style={{ fontSize: '20px', color: '#00997a'}}> Product Rating </h4>
            <div style={styles.stars}>
                {stars.map((_, index) => {
                    return (
                        <FaStar
                            key={index}
                            size={24}
                            onClick={() => handleClick(index + 1)}
                            onMouseOver={() => handleMouseOver(index + 1)}
                            onMouseLeave={handleMouseLeave}
                            color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                            style={{
                                marginRight: 10,
                                cursor: "pointer"
                            }}
                        />
                    )
                })}
            </div>
            <textarea
                placeholder="What's your feedback type here..?"
                style={styles.textarea}
                value={description}
                onChange={(e) => { setDescription(e.target.value) }}
            />
            {/* 
      <button
        style={styles.button}
      >
        Submit
      </button>
       */}
            <button type='submit' className="btn btn-outline-light" style={{borderColor:"#00997a", color:"black"}} onClick={submit}>Submit</button>
        </div>
    );
};
const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 50,
        padding: 3,
    }

};
export default Ratings;

