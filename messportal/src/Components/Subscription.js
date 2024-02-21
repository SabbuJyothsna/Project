import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import  {Dropdown, DropdownButton} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header1 from './Header1';
import Footerr from './Footerr';

const Subscription = () => {
//     const [subType, setsubType] = useState('');

//   const handlesubTypeChange = (event) => {
//     setsubType(event.target.value);
//   };

//   return (
    
//     <div>
//       <Header1/>
// <div className="container">
//     <div>
// <Form className='form2 mt-5'>
//       <Row>
//         <Col sm={3}>
//           <Form.Check
//             type="radio"
//             label="Book monthly mess"
//             name="subType"
//             value="monthly"
//             checked={subType === 'monthly'}
//             onChange={handlesubTypeChange}
//           />
//         </Col>
//         <Col sm={3}>
//           <Form.Check
//             type="radio"
//             label="Book Weekly mess"
//             name="subType"
//             value="weekly"
//             checked={subType === 'weekly'}
//             onChange={handlesubTypeChange}
//           />
//         </Col>
//       </Row>
//     </Form>
//     </div>
//     </div>


//       {subType === 'monthly' && (
//         <div class="container">
//         <Form>
//         <Row className="mb-3 mt-3">
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>Full Name  : </Form.Label>
//             <Form.Control type="text" placeholder="Enter full name . . . " />
//           </Form.Group>
//         </Row>

//         <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>Address to deliver  : </Form.Label>
//             <Form.Control type="text" placeholder="Enter Delivery Address . . ." />
//           </Form.Group>
  
  
//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Price</Form.Label>
//           <Form.Control type= "number" placeholder="3000 " readonly />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Delivery price : </Form.Label>
//           <Form.Control type= "number" placeholder="+20  " />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Date : </Form.Label>
//           <Form.Control type= "date" placeholder="Enter Date.. " />
//         </Form.Group>

        
  
//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//       </div>
//       )}

//       {subType === 'weekly' && (
//         <div class="container">
//          <Form>
//         <Row className="mb-3 mt-3">
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>Full Name  : </Form.Label>
//             <Form.Control type="text" placeholder="Enter full name . . . " />
//           </Form.Group>
//         </Row>

//         <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>Address to deliver  : </Form.Label>
//             <Form.Control type="text" placeholder="Enter Delivery Address . . ." />
//           </Form.Group>
  
  
//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Price</Form.Label>
//           <Form.Control type= "number" placeholder="3000 " readonly />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Delivery price : </Form.Label>
//           <Form.Control type= "number" placeholder="+20  " />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Date : </Form.Label>
//           <Form.Control type= "date" placeholder="Enter Date.. " />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>

//         </Form>
//       </div>
//       )}



//       <div class="container mt-5">
//         <h3>Monthly subscription</h3>
//         <h6>Price : </h6>
//         <br/><br/>
//         <h3>Weekly subscription</h3>
//         <h6>Price : </h6>



//       </div>
//       <Footerr/>
//     </div>
    
//   );
// };

const [selectedOption, setSelectedOption] = useState(null);


  

const handleSelect = (eventKey) => {
  setSelectedOption(eventKey);
};

const nav= useNavigate();
const[item,setItem]=useState({
    email:"",
    password:"",
    user_name:"",
    user_phone:"",
    user_id_proof:"",
    address_description:"",
    role_id : null

});

const handleChange = (e) => {
  const { name, value } = e.target;
  setItem({
    ...item,
    [name]: value,
  });
};

const handleDropdownSelect = (eventKey) => {
  let roleid;

  
  switch (eventKey) {
    case 'Customer':
      roleid = 1;
      break;
    case 'Vendor':
      roleid = 2; 
      break;
    case 'Admin':
      roleid = 3; 
      break;
    default:
      roleid= null;
  }

  item.role_id=roleid;


}





const addDetails=(event)=>{
    event.preventDefault();           //to prevent page loading
    // console.log(item);
    axios.post(`http://localhost:8089/messportal/users/reg/add`,item).then(()=>{
        window.alert("details added successfully");
        nav("/signin");

    
        // if(selectedOption=="Customer")
        // {
          
        //   nav("/homepage1");
        // }
        // else{
        //   nav("/homepage2");
        // }
        
    }).catch((err)=>{})
}

    

  return (

    <div>
      <Header1/>
      <div >
        <br/>
        <br/>
          <h3 style={{color:"Gray"}}>SUBSCRIPTION (MONTHLY/WEEKLKY) MESS</h3>
      </div>

        <div class='container' >
        
        <Form onSubmit={addDetails}>
        <Row className="mb-3 mt-3">
        <Dropdown onSelect={handleDropdownSelect} onChange={handleChange} name="role_id">
                <DropdownButton title={item.role_id ? `Selected: ${item.role_id}` : 'Sign up as '} >
                  <Dropdown.Item eventKey="Customer">Customer</Dropdown.Item>
                  <Dropdown.Item eventKey="Vendor">Vendor</Dropdown.Item>
                  <Dropdown.Item eventKey="Admin">Admin</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
        </Row>

        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Full Name  : </Form.Label>
            <Form.Control type="text" placeholder="Enter full name . . . " />
          </Form.Group>
        </Row>

        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Address to deliver  : </Form.Label>
            <Form.Control type="text" placeholder="Enter Delivery Address . . ." />
          </Form.Group>
  
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Price</Form.Label>
          <Form.Control type= "number" placeholder="3000 " readonly />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Delivery price : </Form.Label>
          <Form.Control type= "number" placeholder="+20  " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Date : </Form.Label>
          <Form.Control type= "date" placeholder="Enter Date.. " />
        </Form.Group>

        
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
            
        </div>
        
          
    <Footerr/>
      
    </div>
    
  )
}



export default Subscription
