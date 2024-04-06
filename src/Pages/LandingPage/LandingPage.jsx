import React, { useEffect } from 'react'
import Ab from '../../Component/Ab'
import Cd from '../../Component/Cd'
import img1 from '../../Assest/download1.jpg'
import Banner from '../../Component/Banner'

const LandingPage = (props) => {
  const {setstatus,text}=props
  const objUser={
    username:"Jerold",
  }
  let addition=()=>{
    console.log("Hellow");
  }
  useEffect(()=>{
    setstatus('home')
  },[])
  let variable=23
  const arry=[1,2,3,4,5,6]
  const arryobj=[
    {
      username:"Hulk",
      color : "green"
    },
    {
      username:"Spiderman",
      color : "red"

    },
    {
      username:"IronMan",
      color : "red and black"

    }
  ]
  const String =`    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, maiores porro. Debitis, eveniet. Quibusdam a ipsa officia facilis, obcaecati illum!`
  return (
    <div>
        <Banner/>

        {/* Hellow from the Landing page */}
        {/* <Ab variable={variable} data1={objUser} fun={addition} aryobj={arryobj} anything={arry} /> */}
        {/* <Cd img={img1} st={String} /> */}
        {text}
      
    </div>
  )
}

export default LandingPage
