import React from 'react'

import { Form, Button, Row, Col } from 'react-bootstrap'

const SetupForm = () => {
    return (
        <div>
            <div style={{
                color: "black", 
                fontFamily: 'Montserrat', 
                fontSize: "3em",
                fontWeight: "bolder",
                marginLeft: "1em",
                marginTop: "0.5em",
                textAlign: "left"
            }}>
                Set up your Will
            </div>
            <div style={{
                color: "black", 
                fontFamily: 'Montserrat', 
                fontSize: "1.5em",
                fontWeight: "bolder",
                marginLeft: "2.1em",
                marginTop: "1em",
                textAlign: "left"
            }}>
            <Form>
                <Row>
                    <Col sm={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Owner's Email Address</Form.Label>
    <Form.Control type="email" placeholder="Email" style={{width: "30em", borderRadius: "50px 50px 50px 50px"}} />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
                    </Col>
                    <Col sm={8}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Receiver's Email Address</Form.Label>
    <Form.Control type="email" placeholder="Email" style={{width: "30em", borderRadius: "50px 50px 50px 50px"}} />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
                    </Col>
                </Row>
                <Row>
                <Col sm={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Receiver's Address</Form.Label>
    <Form.Control type="text" placeholder="Address" style={{width: "60em", borderRadius: "50px 50px 50px 50px"}} />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Amount (in XTZ)</Form.Label>
    <Form.Control type="number" step="any" placeholder="Amount" style={{width: "30em", borderRadius: "50px 50px 50px 50px"}} />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
                </Col>
                <Col sm={8}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Number of days until will expiration</Form.Label>
    <Form.Control type="number" placeholder="Number of days" style={{width: "30em", borderRadius: "50px 50px 50px 50px"}} />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
                    </Col>
                </Row>

                <Row>
                <Col sm={4}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Amount (in XTZ)</Form.Label>
    <Form.Control type="number" step="any" placeholder="Amount" style={{width: "30em", borderRadius: "50px 50px 50px 50px"}} />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col sm={4}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Secret Key</Form.Label>
    <Form.Control type="password" placeholder="Secret Key" style={{width: "30em", borderRadius: "50px 50px 50px 50px"}} />
  </Form.Group></Col><Col sm={8}>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Secret Key</Form.Label>
    <Form.Control type="password" placeholder="Secret Key" style={{width: "30em", borderRadius: "50px 50px 50px 50px"}} />
  </Form.Group>
                    </Col>
                </Row>

  
  <Button variant="danger" type="submit" style={{width: "20em", borderRadius: "50px 50px 50px 50px", color: "white", marginTop: "2em", fontWeight: "bolder"}}>
    Submit
  </Button>
</Form>
            </div>
        </div>
    )
}

export default SetupForm
