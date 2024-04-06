import React, { useEffect, useState } from 'react'
import './ab.css'
import { Link, useNavigate } from 'react-router-dom'
const Ab = (props) => {
  let {data1,anything,aryobj,fun,variable} = props
  fun()
  console.log(variable);
  let navigate=useNavigate()
  let [count, setcount] = useState(0)
  let [a, seta] = useState(10)
  let [b, setb] = useState(90)
  let add = () => {
    setcount(Number(a) + Number(b))
  }
  useEffect(() => {
    add()
  }, [b, a])
  return (
   <div className='h100vh primarybg'>
   <h1 className='text-center'>Addition</h1>
    <div className='box-1 secondrybg'>
    <p>Username : {data1.username} </p>
      A : <input type="number" className='button' value={a}
        onChange={(e) => { seta(e.target.value) }}
      />
      B : <input type="number" className='button' value={b}
        onChange={(e) => { setb(e.target.value) }}
      />
      <div className='value-box'>
        Value :
        {count}
      </div>
       <Link to={'/login'}> 
        Move to CB
       </Link> 
       <button onClick={()=>navigate('/login')}> Change to CD</button>

    </div>
    {
      aryobj.map((x)=>{
        return(
          <div className='w-fit'>
            Hellow from {x.username} , I'm  {x.color}
            <hr/>
          </div>
        )
      })
    }
      
   </div>
  )
}

export default Ab
