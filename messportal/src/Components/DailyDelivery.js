import {React,useState,useEffect} from 'react'
import axios from 'axios'
import Header1 from './Header1'
import Footerr from './Footerr'

const DailyDelivery = () => {
    const[user,setuser]=useState([]);
    useEffect(()=>{                                     
        fetchData();
        
        
    },[])

    
    const fetchData=()=>{
        // axios.get("http://localhost:8089/messportal/users/reg", {
        //     params: {
        //         role_id: 2
        //     }
        // }).then((res)=>{
        //     console.log(res.data);
        //     setuser(res.data);
        // }).catch((err)=>{})
    }

    return (
        <div className='mt-4'>
            <Header1/>
            <h3 style ={{color:"Gray"}}>TODAY'S DELIVERY ORDERS  !! </h3>
            
        
        <table className='container table table-hover table-striped mt-4'>
        <thead>
            <tr className='table table-dark'>
                <th>Sr.No</th><th>Name</th><th>Contact</th><th>Address</th>
            </tr>
        </thead>
        <tbody>
            {user.map((val,index)=>{
                
                return <tr key={index}>
                    <td>{index+1}</td>              
                    <td>{val.user_name}</td>
                    <td>{val.user_phone}</td>
                    <td>{val.address_description}</td>
                    
                   
                </tr>
            })}
        </tbody>
        </table>


        

        
        

        <Footerr/>
        </div>
    )
}
export default DailyDelivery
