import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Dropdown,DropdownButton } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Footerr from './Footerr';
import Header from './Header';

const Signin_Customer_Vendor = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };
  return (

    <div>
      <Header/>
      <div className='loginh'>
        <br/>
        <br/>
          <h3 style={{color:"Gray"}}>LOGIN</h3>
      </div>

        <div class='container'>
        
        <Form className='form1 mt-5 mb-3'>
              <Form.Group as={Row} className="mb-3 me-5 mt-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                  Email : 
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Enter Email . . ."  required/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3 mt-5  me-5" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                  Password : 
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" placeholder="Enter Password . . ." required/>
                </Col>
              </Form.Group>

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
              
              <Form.Group as={Row} className="mb-3 mt-5">
                <Col sm={{ span: 10, offset: 1 }}>
                  <Button id="Submit" type="submit">Sign in</Button>
                </Col>
              </Form.Group>
            </Form>
            
        </div>
        
          
    <Footerr/>
      
    </div>
    
  )
}

export default Signin_Customer_Vendor
