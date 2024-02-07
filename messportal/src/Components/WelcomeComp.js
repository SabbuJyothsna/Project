import React from 'react'
import img from '../Assets/images/logo.PNG';
import './external.css';
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom'
import NavComp from './NavComp';

import Login from './Login';
import RoutingComp from './RoutingComp';
function WelcomeComp() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={img} alt="logo" height="50px" width="80px"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" className='Home' aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" className='About' href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" className='Contact'>Contact</a>
        </li>
        <li class="nav-item">
             <button type="button" class="btn signup btn-primary " >SignUp</button>
        </li>
        
        <BrowserRouter>
        <li class="nav-item">
            {/* <button type="button" class="btn signin btn-primary " href="login" >SignIn</button> */}
            <Link to="/login" className='btn btn-outline-dark btn-sm'>Sign in</Link>{" "}
            <NavComp/>
            
            
        </li>
        </BrowserRouter> 
        
      </ul>
    </div>
  </div>
</nav>


        <div className='h11'>
            <h1>MESS PORTAL </h1>
        </div>


        </div>
        
    )
}

export default WelcomeComp
