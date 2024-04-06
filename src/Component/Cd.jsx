import React from 'react'


const Cd = (props) => {
  const {img,st}=props
  console.log(st);
  return (
    <div>
       <img width={600} src={img} alt="" />
       <p>{st} </p>
       hellow from Cd
     
      
    </div>
  )
}

export default Cd
