import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../../globals.css";
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GetZomato() {
  return (
    <>
      <div className='container-fluid m-auto my-5 '>
        <div className='container  my-5'>
          <div className='row'>
            <div className='col-5 mt-5'>
              <img src='https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png' className=' w-100 pt-5'></img>
            </div>
            <div className='col-7  my-5'>
              <h1 className='cgEqWV'>Get the Zomato app</h1>
              <h4 className='lh-base'>We will send you a link, open it on your phone to download the app</h4>
              <fieldset>
                <Form.Group as={Row} className="mt-5">
                  <Col sm={10} className='d-flex fs-4 justify-content-between w-50'>
                    <Form.Check className='fw-bold' type="radio" label="Email" name="formHorizontalRadios" id="formHorizontalRadios1" />
                    <Form.Check className='fw-bold' type="radio" label="Phone" name="formHorizontalRadios" id="formHorizontalRadios1" />
                  </Col>
                </Form.Group>
              </fieldset>
              <FloatingLabel controlId="floatingInput" label="Emailaddress" className="my-5 d-flex  ">
                <Form.Control className='w-50' type="email" placeholder="name@example.com" />
                <Button className="px-2 mx-5" type="submit">Share App Link</Button>
              </FloatingLabel>
              <h4>Download App from </h4>
              <div className='d-flex pt-4'>
                <img alt="image" src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" loading="lazy" className='w-50'  />
                <img alt="image" src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" loading="lazy" className='w-50 mx-5' ></img>
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GetZomato