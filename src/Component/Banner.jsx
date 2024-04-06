import React from 'react'
import './ab.css'
import { Link } from 'react-router-dom'
const Banner = (props) => {
    let {page,img}=props
    

  return (
    <div className='banner-container'>    
            <img className='w-full h60vh' src={img ? img : require('../Assest/banner1.jpg')} alt="Banner1" />
        <div className='banner-content'>
            <p className='mt-auto '> 
            <Link to='/'> Home </Link>  {page ? `> ${page}`:''}
            </p>
        </div>    
    </div>
  )
}

export default Banner
