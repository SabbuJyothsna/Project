import { React, useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';
import Footerr from './Footerr';
import Header1 from './Header1';
import axios from 'axios'
const MenuUpdate = () => {

  const [item, setItem] = useState({
      type:0,
      description:" ",
      price:0,
      expireDate:" ",

  })

  var menutype = [{ id: 0, description: "Breakfast" },
  { id: 1, description: "Lunch" },
  { id: 2, description: "Snacks" },
  { id: 3, description: "Dinner" }
]



  useEffect(() => {
  }, [])

  const updateMenu = () => {
    const token = localStorage.getItem('token');
    console.log('token = ' + token);
    const headers = {
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      'Authorization': token
    };
    console.log(headers);
    axios.defaults.headers.common['Authorization'] = token;
    axios.post("http://localhost:8089/messportal/menu/menudetails/add", item).then((res) => {
      window.alert("Menu added successfully");
     // setItem(res.data);
    }).catch((err) => { console.log(err) })
  }
  const inputchangehandler = (event) => {
    const { type, name, value } = event.target;
    setItem({ ...item, [name]: value })
  }


  return (
    <div >
      <Header1 />
      <h1>Update Today's Menu</h1>

      <Row className='justify-content-center'>
        <Col md="4">
          <Form onSubmit={updateMenu}>
            <Row className="mb-3 mt-3">

              <select name='type' className='form-control' onChange={inputchangehandler} >
                <option value="">Select Your role</option>
                {
                  menutype.map((val, index) => {
                    return <option key={index} value={val.id} >{val.description}</option>
                  })
                }
              </select>
            </Row>
            <Row className="mb-3 mt-5">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Menu  : </Form.Label>
                <Form.Control type="text" name='description' placeholder="Enter Menu . . . " onChange={inputchangehandler}/>
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Price  : </Form.Label>
                <Form.Control type="number" name='price' placeholder="Enter price. . ." onChange={inputchangehandler}/>
              </Form.Group>
            </Row>
            <Row className="mb-3 mt-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Enter Date  : </Form.Label >
                <Form.Control type="date" name='expireDate'  onChange={inputchangehandler}/>
              </Form.Group>
            </Row>
            <Button className="mt-4" variant="primary" type="submit" >
              Update
            </Button>
          </Form>
        </Col>
      </Row>
      <Footerr />
    </div>
  )
}

export default MenuUpdate
