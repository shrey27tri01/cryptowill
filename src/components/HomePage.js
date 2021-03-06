// import React from 'react'
import { Row, Container, Col, Form, Button } from 'react-bootstrap';
import homeimage from '../assets/homeimage.png';


const HomePage = () => {
    return (
        <Container fluid>
  {/* <Row style={{border: "2px solid red"}}> */}
  <Row>
    {/* <Col sm={4} style={{border: "2px solid green", marginLeft: "10rem"}}> */}
    <Col sm={4} style={{marginLeft: "10rem"}}>
        <div style={{
            color: "black", 
            fontFamily: 'Montserrat', 
            fontSize: "6em",
            fontWeight: "bolder",
            marginTop: "3em",
            textAlign: "left"
        }}>
            Crypto Will
        </div>
        <div style={{
            fontFamily: 'Montserrat', 
            fontSize: "2.7em",
            color: "#676767",
            fontWeight: "bold",
            textAlign: "left"
        }}>
            Create your digital Will
        </div>
        <div style={{marginTop: "1em"}}>
            <Form>
                <Row className="align-items-center">
                    <Col sm={6} className="my-1">
                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                        search
                    </Form.Label>
                    <Form.Control id="inlineFormInputName" placeholder="Search by Address" />
                    </Col>
                 
                    
                    <Col sm={3} className="my-1">
                    <Button variant="danger"  style={{width: "10em", borderRadius: "5%"}}>Search</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    </Col>
    {/* <Col sm={6} style={{border: "2px solid green"}}> */}
    <Col sm={6} style={{marginTop: "4em"}}>
        <div>
        <img alt=""
                        src={ homeimage }
                        width="900px"
                        height="700px"
                        // className="d-inline-block align-top"
                        // marginTop="1em"
                        
                        />{' '}
        </div>
    
    </Col>
  </Row>
  </Container>
    )
}

export default HomePage
