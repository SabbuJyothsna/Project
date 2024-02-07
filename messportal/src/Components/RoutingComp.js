import React from 'react'
import { BrowserRouter ,Routes,Route, Link } from 'react-router-dom';
import Login from './Login';

const RoutingComp = () => {
    return (
        <BrowserRouter>
        <div>
             <Routes>
                 <Route path='/login' element={<Login/>}></Route>
             </Routes>
        </div>
        </BrowserRouter>
    )
}

export default RoutingComp
