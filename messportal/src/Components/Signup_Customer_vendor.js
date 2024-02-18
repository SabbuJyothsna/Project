import React,{useState} from 'react'
import {Form,Button,Col,Row} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

import { Dropdown,DropdownButton } from 'react-bootstrap';
import Footerr from './Footerr';
import Header from './Header';
import{Router,Switch,Route,Routes} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
const Signup_Customer_vendor = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const nav= useNavigate();
  const[item,setItem]=useState({
      email:"",
      password:"",
      userName:"",
      userPhone:"",
      userIdProof:"",
      addressDescription:""

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({
      ...item,
      [name]: value,
    });
  };

  const addUser=(event)=>{
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
    <div className='register'>
      <Header/>
    <div>
      <h2 style={{color: "Gray"}}>Register</h2>







    {/* <div>
<Form className='form2 mt-5'>
      <Row>
        <Col sm={3}>
          <Form.Check
            type="radio"
            label="Sign Up as Customer"
            name="userType"
            value="customer"
            checked={userType === 'customer'}
            onChange={handleUserTypeChange}
          />
        </Col>
        <Col sm={3}>
          <Form.Check
            type="radio"
            label="Sign Up as Vendor"
            name="userType"
            value="vendor"
            checked={userType === 'vendor'}
            onChange={handleUserTypeChange}
          />
        </Col>
      </Row>
    </Form>
    </div> */}

        {/* <div class='container'>

              <Form.Group as={Row} className="mb-3 mt-5  me-5" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                  Role : 
                </Form.Label>
                <Col sm={2}>
                <Dropdown onSelect={handleSelect}>
                  <DropdownButton title={selectedOption ? `Selected: ${selectedOption}` : 'Sign in as '}>
                    <Dropdown.Item eventKey="Customer" >Customer</Dropdown.Item>
                    <Dropdown.Item eventKey="Vendor">Vendor</Dropdown.Item>
                    <Dropdown.Item eventKey="Admin">Admin</Dropdown.Item>
                  </DropdownButton>
                </Dropdown>
                </Col>
              </Form.Group>
              
              
            
        </div>
        
    </div>


              


      
        <div class="container">
        <Form>
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Full Name  : </Form.Label>
            <Form.Control type="text" placeholder="Enter full name . . . " />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password : </Form.Label>
            <Form.Control type="password" placeholder="Enter Password . . ." />
          </Form.Group>
        </Row>
  
  
        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Phone</Form.Label>
          <Form.Control type= "number" placeholder="Phone number . . . " />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Email Address : </Form.Label>
          <Form.Control type= "email" placeholder="Enter Email  . . . " />
        </Form.Group>

        
  
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div> */}
        
      

      
        <div class="container">
        <Form onSubmit={addUser}>

        {/* <Row className="mb-3 mt-3">
        <Dropdown onSelect={(eventKey) => setItem({ ...item, roleId: eventKey })}>
                <DropdownButton title={item.roleId ? `Selected: ${item.roleId}` : 'Sign in as '}>
                  <Dropdown.Item eventKey="Customer">Customer</Dropdown.Item>
                  <Dropdown.Item eventKey="Vendor">Vendor</Dropdown.Item>
                  <Dropdown.Item eventKey="Admin">Admin</Dropdown.Item>
                </DropdownButton>
              </Dropdown>
        </Row> */}
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email ID  : </Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email ID . . . " required  onChange={handleChange} />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password : </Form.Label>
            <Form.Control type="password" name='password' placeholder="Enter Password . . ." required onChange={handleChange}/>
          </Form.Group>
        </Row>

        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Full Name  : </Form.Label>
            <Form.Control type="text" name='user_name' placeholder="Enter full name  . . . " required onChange={handleChange} />
          </Form.Group>
  
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Phone : </Form.Label>
            <Form.Control type="number"name='user_phone' placeholder="Enter phone number. . ." required onChange={handleChange}/>
          </Form.Group>
        </Row>

        <Row className="mb-3 mt-3">

        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Address : </Form.Label>
            <Form.Control type="text"  placeholder="Enter full address. . ." required onChange={handleChange}/>
          </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Government ID Proof  : </Form.Label>
          <Form.Control type= "number" name='user_id_proof' placeholder="Enter Adhar/PAN no.  . . . " onChange={handleChange} />
        </Form.Group>
        </Row>

        

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      
    </div> 
    <Footerr/>
    </div>
    
  );
};


export default Signup_Customer_vendor
