import React from 'react'
import {useNavigate } from 'react-router-dom'


export default function Logout() {
    let navigate=useNavigate()
    localStorage.clear()
    navigate(`/`)
}



