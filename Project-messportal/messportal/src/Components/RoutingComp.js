import React from 'react'
import { BrowserRouter ,Routes,Route, Link } from 'react-router-dom';
import Login from './Login';

import NavComp from './NavComp';

const RoutingComp = () => {
    return (
        <BrowserRouter>
        <NavComp/>
        
        <div>
             <Routes>
                 <Route path='login' element={<Login/>}></Route>
                 
             </Routes>
        </div>
        </BrowserRouter>
    )
}

export default RoutingComp
