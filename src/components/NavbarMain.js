import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from '../assets/logo.svg';

import { DAppProvider, useConnect } from '../dapp/dapp';
import { APP_NAME, NETWORK } from '../dapp/default';


const NavbarMain = () => {
    const connect = useConnect()
    const handleConnect = React.useCallback(async () => {
        try {
            await connect(NETWORK, { forcePermission: true })
            console.log("Connected");
            // return (
            //     <div>
            //         Connected!
            //     </div>
            // )
        } catch (err) {
        console.error(err.message)
        }
    }, [connect])

    return (
        <Navbar bg="white" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img alt=""
                        src={ logo }
                        width="60"
                        height="60"
                        className="d-inline-block align-top"
                        />{' '}
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/about" style={{
                            color: "black", 
                            fontFamily: 'Montserrat', 
                            fontSize: "1.2em",
                            fontWeight: "bold" }}
                        >About
                    </Nav.Link>
                    <Nav.Link href="/how-it-works" style={{
                            color: "black", 
                            fontFamily: 'Montserrat', 
                            fontSize: "1.2em",
                            fontWeight: "bold" }}
                        >How it works
                    </Nav.Link>
                    <Nav.Link href="/devs" style={{
                            color: "black", 
                            fontFamily: 'Montserrat', 
                            fontSize: "1.2em",
                            fontWeight: "bold" }}
                        >About the developers
                    </Nav.Link>
                </Nav>
            </Container>
            <Container className="justify-content-end">
                <Nav>
                    <Nav.Link>
                        <Button variant="outline-secondary" onClick={handleConnect} style={{
                            color: "black", 
                            fontFamily: 'Montserrat', 
                            fontSize: "1.2em",
                            fontWeight: "bold",
                            width: "13em",
                            borderRadius: "5%" }}>
                            Login
                        </Button>{' '}
                    </Nav.Link>
                    <Nav.Link href="/setup">
                        <Button variant="danger" style={{
                            color: "white", 
                            fontFamily: 'Montserrat', 
                            fontSize: "1.2em",
                            fontWeight: "bold",
                            width: "13em",
                            borderRadius: "5%" }}>
                            Get Started
                        </Button>{' '}
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarMain
