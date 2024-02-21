import {useState,React, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'
import Footerr from './Footerr'
import Header1 from './Header1'

const CustomerHomePage = () => {
    const[user,setuser]=useState([])        

    const[item,setItem]=useState({})  
    
    const [menuDetails, setMenuDetails] = useState([]);
    
    const [show, setShow] = useState(false);          
    const handleClose = () => setShow(false);        
    const handleShow = (val) => {
        console.log(val.id);
        setItem(val);
        fetchData1(val.id); 
        setShow(true);
    };


    useEffect(()=>{                                     
        fetchData();
        
        
    },[])

    
    const fetchData=()=>{
        axios.get("http://localhost:8089/messportal/users/vendors").then((res)=>{
            console.log(res.data);
            setuser(res.data);
        }).catch((err)=>{})
    }

    const fetchData1=(vendorId)=>{
        axios.get(`http://localhost:8089/messportal/menu/menudetails/vendor/${vendorId}`).then((res)=>{
            console.log(res.data);
            setMenuDetails(res.data);
        }).catch((err)=>{})
    }



    

    
    return (
        <div className='mt-4'>
            <Header1/>
            <h3 style ={{color:"Gray"}}>LIST OF MESS VENDORS !! </h3>
            
        
        <table className='container table table-hover table-striped mt-4'>
        <thead>
            <tr className='table table-dark'>
                <th>Sr.No</th><th>Name</th><th>Contact</th><th>Address</th><th>Action</th>
            </tr>
        </thead>
        <tbody>
            {user.map((val,index)=>{
                
                return <tr key={index}>
                    <td>{index+1}</td>              
                    <td>{val.userName}</td>
                    <td>{val.userPhone}</td>
                    <td>{ val.addresses.map((adr,index)=>{
                        
                            return <td>{adr.addressDescription }</td>
                        

                    })}</td>
                    
                    <td>
                        
                        <button className ="btn btn-outline-warning btn-sm" type="button" onClick={()=>handleShow(val)}  >View Menu</button> {" "}
                        
                    </td>
                </tr>
            })}
        </tbody>
        </table>


        

        
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
        <Modal.Title>{item.userName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <table>
        <tr>
        <th>Type : </th><th>{item.type}</th>{" "}
        <th>Menu : </th><th>{item.description}</th>{" "}
        <th>Price : </th><th>{item.price}</th>{" "}
        </tr>
        </table> */}

        <table className='container table table-hover table-striped mt-4'>
        <thead>
            <tr className='table table-dark'>
                <th>Sr.No</th><th>Type</th><th>Menu</th><th>Price</th><th>Action</th>
            </tr>
        </thead>
        <tbody>
        
              
        {menuDetails.map((val1,index)=>{
                
                return <tr key={index}>
                    <td>{index+1}</td>              
                    <td>{val1.type}</td>
                    <td>{val1.description}</td>
                    <td>{val1.price}</td>
                    <td>
                    <button className ="btn btn-outline-warning btn-sm" type="button"   >Book</button> {" "}
                    <button className="btn  btn-outline-success btn-sm">Delivery</button>{" "}
                    <Link to="/subscription" className="btn  btn-outline-danger btn-sm">Subscribe</Link> 
                    </td>
                    
                </tr>
            })}
              
        </tbody>
        </table>

        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Close
        </Button>
        <Button variant="primary">OK</Button>

        </Modal.Footer>
        </Modal>

        <Footerr/>
        </div>

)
}

export default CustomerHomePage
