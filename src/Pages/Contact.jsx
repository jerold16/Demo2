import React, { useEffect, useState } from 'react'
import Banner from '../Component/Banner'

const Contact = (props) => {
  const { setstatus } = props
  useEffect(() => {
    setstatus('contact')
  }, [])
  let [user, setUser] = useState({
    username: '',
    email: ''
  })
  let handleinput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
   
  }
  return (
    <div>
      <Banner img='../Assest/contactBanner.jpg' page="Contact" />

      <form action="">

        <div>

          Name :
          <input type="text" className='' name='username' onChange={handleinput} value={user.username} />

        </div>
        <div>
          Email :
          <input type="email" className='' name='email' onChange={handleinput} value={user.email} />
        
        </div>
        <button className='' onClick={(e) => {
          e.preventDefault()
          console.log(user);
        }}> Show
        </button>
      </form>



    </div>
  )
}

export default Contact
