import React, { useEffect } from 'react'
import Banner from '../../../Component/Banner'

const About = (props) => {
    let {setstatus,text,settext}=props
    useEffect(()=>{
       setstatus('about')
    },[])
  return (
    <div>
      <Banner img='../../../Assest/abtBanner.jpg' page="About"/>
      {text}


      <input type="text" value={text} onChange={(e)=>{
        settext(e.target.value) }} />


    </div>
  )
}

export default About
