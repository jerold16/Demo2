import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router'
const NavBar = (props) => {
  const {status}=props
  let navigate=useNavigate()
  return (
    <div className='h10vh navbar'>
        {/*  */}
        <img src="" alt="Logo" />
        <div className=' w60vw flex justify-between'>



          <button  onClick={()=>navigate('/')} 
          className={`btn ${status=='home'? 'active':''}`} >Home </button>


          <button onClick={()=>navigate('/about')} 
          className={`btn ${status=='about'? 'active':''}`} >About</button>



          <button onClick={()=>navigate('/contact')} 
          className={`btn ${status=='contact'? 'active':''}`}>Contact</button>


          
          <button className={`btn`} >Blog</button>
        </div>
        <p>
          +65 978967500~
        </p>
    </div>
  )
}

export default NavBar
