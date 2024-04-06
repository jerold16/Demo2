import logo from './logo.svg';
import './App.css';
import Ab from './Component/Ab';
import Cd from './Component/Cd';
import { useState } from 'react';
import Ef from './Component/Ef';
import './Component/ab.css'
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import NavBar from './Component/Navbar/NavBar';
import About from './Pages/LandingPage/AboutPage/About';
import Contact from './Pages/Contact';


//Rendering



function App() {
  let [status,setstatus] =useState()
  let [text,settext]=useState('APple')
  return (
    <div className="App">

     
      <BrowserRouter  basename="/Demo2">
         <NavBar status={status}/>
          <Routes>
            <Route exact path='/' element={<LandingPage setstatus={setstatus} text={text} settext={settext} />} />
            <Route path='/login' element={<Cd setstatus={setstatus}  text={text} settext={settext}/>}/>
            <Route path='/about' element={<About setstatus={setstatus}  text={text} settext={settext}/>}/>
            <Route path='/contact' element={<Contact setstatus={setstatus}  text={text} settext={settext}/>}/>


          </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
