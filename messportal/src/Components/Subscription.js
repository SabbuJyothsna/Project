import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header1 from './Header1';
import Footerr from './Footerr';

const Subscription = () => {
    const [subType, setsubType] = useState('');

  const handlesubTypeChange = (event) => {
    setsubType(event.target.value);
  };

  return (
    
    <div>
      <Header1/>
<div className="container">
    <div>
<Form className='form2 mt-5'>
      <Row>
        <Col sm={3}>
          <Form.Check
            type="radio"
            label="Book monthly mess"
            name="subType"
            value="monthly"
            checked={subType === 'monthly'}
            onChange={handlesubTypeChange}
          />
        </Col>
        <Col sm={3}>
          <Form.Check
            type="radio"
            label="Book Weekly mess"
            name="subType"
            value="weekly"
            checked={subType === 'weekly'}
            onChange={handlesubTypeChange}
          />
        </Col>
      </Row>
    </Form>
    </div>
    </div>


      {subType === 'monthly' && (
        <div class="container">
        <Form>
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
      )}

      {subType === 'weekly' && (
        <div class="container">
         <Form>
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
      )}



      <div class="container mt-5">
        <h3>Monthly subscription</h3>
        <h6>Price : </h6>
        <br/><br/>
        <h3>Weekly subscription</h3>
        <h6>Price : </h6>



      </div>
      <Footerr/>
    </div>
    
  );
};


export default Subscription
