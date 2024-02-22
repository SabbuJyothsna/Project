import React from 'react'
import { BrowserRouter ,Routes,Route, Link } from 'react-router-dom';



import WelcomeComp from './WelcomeComp';

import Signin_Customer_Vendor from './Signin_Customer_Vendor';
import Signup_Customer_vendor from './Signup_Customer_vendor';
import CustomerHomePage from './CustomerHomePage';
import Delivery from './Delivery';
import Subscription from './Subscription';
import VendorHomePage from './VendorHomePage';
import MenuUpdate from './MenuUpdate';
import ViewMembers from './ViewMembers';
import DailyOrder from './DailyOrder';
import DailyDelivery from './DailyDelivery';
import MonthlyReport from './MonthlyReport';
import PageNotFound from './PageNotFound';

const RoutingComp = () => {
    return (
        <BrowserRouter>
        {/* <WelcomeComp/> */}
        
        <div>
             <Routes>
                 <Route path='/' element={<WelcomeComp/>}></Route>
                 
                 <Route path='signup' element={<Signup_Customer_vendor/>}></Route>
                 <Route path='signin' element={<Signin_Customer_Vendor/>}></Route>
                 <Route path='homepage1' element={<CustomerHomePage/>}></Route>
                 <Route path='delivery/:id' element={<Delivery/>}></Route>
                 <Route path='subscription' element={<Subscription/>}></Route>
                 <Route path='homepage2' element={<VendorHomePage/>}></Route>
                 <Route path='menu' element={<MenuUpdate/>}></Route>
                 <Route path='members' element={<ViewMembers/>}></Route>
                 <Route path='dailyorder' element={<DailyOrder/>}></Route>
                 <Route path='dailydelivery' element={<DailyDelivery/>}></Route>
                 <Route path='report' element={<MonthlyReport/>}></Route>
                 <Route path='/*' element={<PageNotFound/>}></Route>
                 
                 
                 
             </Routes>
        </div>
        </BrowserRouter>
    )
}

export default RoutingComp