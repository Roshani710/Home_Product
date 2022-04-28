import React, { useEffect } from 'react'
import Ratings from './Rating';
import { Link } from 'react-router-dom'

export default function Success() {

    // const navigate = useNavigate();

    // useEffect(() =>{
    //     setTimeout(() => navigate('/homepage'), 3000)
    // })

    return (
        <>
    
            <div className="d-flex justify-content-center">
                <lord-icon
                    src="https://cdn.lordicon.com/lupuorrc.json"
                    trigger="loop"
                    style={{ width: "250px", height: "250px" }}>
                </lord-icon>
            </div>

            <div className="d-flex justify-content-center">
                <hr />
                <label style={{ fontSize: '20px', fontStyle: 'italic', color: '#00997a', textAlign: 'center' }} onClick={() => navigate('/homepage')}>Successfully Purchased!!</label>
            </div>
            <br /> <br/> <br />
            <div>
            <Ratings />
            </div>
            <div>
            <Link to = '/homepage' style={{ color: '#00997a' }}>skip</Link>
            </div>

        </>
    )

}

