import React from "react";
import {Form, Col, Button} from "react-bootstrap"

const Contact = ()=> {
    return(
        <div>
            <h1 className="text-center">Contact</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex corrupti veniam impedit fugiat id! Cumque dolores facilis maxime nemo eum sint perspiciatis ratione beatae ipsum id, ut nostrum mollitia blanditiis.</p>
         <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
             </Form.Row>

             <Form.Group controlId="formGridAddress1">
             <Form.Label>Address</Form.Label>
             <Form.Control placeholder="1234 Main St" />
             </Form.Group>

             <Form.Group controlId="formGridAddress2">
             <Form.Label>Address 2</Form.Label>
             <Form.Control placeholder="Apartment, studio, or floor" />
             </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" value="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
export default Contact;