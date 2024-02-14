import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Header1 from './Header1';
import Footerr from './Footerr';

const Delivery = () => {
    return (
        <div class="container ">
          <Header1/>
            <h4 className='mt-5'>Provide following information</h4>
        <Row className='justify-content-center'>
            <Col md="4">
            <Form>
        <Row className="mb-3 mt-5">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Full Name  : </Form.Label>
            <Form.Control type="text" placeholder="Enter full name . . . " />
          </Form.Group>
        </Row>

        <Row className="mb-3 mt-3">
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Address to deliver  : </Form.Label>
            <Form.Control type="text" placeholder="Enter Address. . ." />
          </Form.Group>
          </Row>

        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Price  : </Form.Label>
            <Form.Control type="number" placeholder="80 " readonly />
          </Form.Group>
        </Row>

        <Row className="mb-3 mt-3">
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Enter Date  : </Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          </Row>

        

        <Button className="mt-4" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Col>
      </Row>
            <Footerr/>
        </div>
    )
}

export default Delivery
