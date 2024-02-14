import {useState,React, useEffect} from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button,Modal} from 'react-bootstrap'
import Footerr from './Footerr'
import Header1 from './Header1'

const CustomerHomePage = () => {
    // const[product,setProduct]=useState([])        //stores array of products

    // const[item,setItem]=useState({})   //store details of specific product
    // //modal of react-bootstrap
    // const [show, setShow] = useState(false);          //managges visibility of modal
    // const handleClose = () => setShow(false);        // function thats sets the show state to false to close the modal
    // const handleShow = (data) => {                   //function that sets the show state to true to open the modal
    //     setItem(data)
    //     setShow(true);
    // };


    // useEffect(()=>{                                     //The useEffect hook is used to fetch data from the server using Axios when the component mounts 
    //     fetchData();
    // },[])

    // //this is get request
    // const fetchData=()=>{
    //     axios.get("http://localhost:8888/product").then((res)=>{
    //         console.log(res.data);
    //         setProduct(res.data);
    //     }).catch((err)=>{})
    // }

    // //this id delete request
    // // whenever we click on delete button it shows the delete product id on console and deleete the record from table and gives alert message
    // const deleteRecord=(id)=>{                       
    //     console.log(id);
    //     if(window.confirm(`Are you sure you want to delete product with id :${id}`)){
    //         axios.delete(`http://localhost:8888/product/${id}`).then(()=>{
    //        window.alert("product deleted successfully");
    //         fetchData();
    //     }).catch((err)=>{})
    //     }
    // }
    return (
        <div >
            <Header1/>
            <h3 style ={{color:"Gray"}}>LIST OF MESS VENDORS !! </h3>
            <Button variant='outline-success-sm' ><i class="fa fa-eye" aria-hidden="true"></i></Button>
        <button className ="btn btn-outline-danger btn-lg" type="button" ><i class="fa fa-address-book-o" aria-hidden="true"></i></button>
        
        <table className='container table table-hover table-striped mt-4'>
        <thead>
            <tr className='table table-dark'>
                <th>Sr.No</th><th>Name</th><th>Contact</th><th>Address</th><th>Action</th>
            </tr>
        </thead>
        <tbody>
            {/* {product.map((val,index)=>{
                // if we gave val.id then after deleting element the number will not come serially so we take index
                return <tr key={index}>
                    <td>{index+1}</td>              
                    <td>{val.name}</td>
                    <td>{val.price}</td>
                    <td>{val.company}</td>
                    <td>
                        <Button variant='outline-success-sm' onClick={()=>handleShow(val)}><i class="fa fa-eye" aria-hidden="true"></i></Button>
                        <Link to={`/editproduct/${val.id}`}   ><i class="fa fa-pencil" aria-hidden="true"></i></Link>{" "}{" "}
                        <button className ="btn btn-outline-success btn-sm" type="button" >Book</button>
                        <button className ="btn btn-outline-warning btn-sm" type="button" >Delivery</button>
                    </td>
                </tr>
            })} */}
        </tbody>
        </table>


        

        {/* modal starts here */}
        {/* <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
        <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table>
        <tr>
        <th>Id : </th><th>{item.id}</th>{" "}
        <th>Name : </th><th>{item.name}</th>{" "}
        <th>Price : </th><th>{item.price}</th>{" "}
        <th>Company : </th><th>{item.company}</th>
        </tr>
        </table>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
        Close
        </Button>
        <Button variant="primary">OK</Button>

        </Modal.Footer>
        </Modal> */}

        <Footerr/>
        </div>

)
}

export default CustomerHomePage
