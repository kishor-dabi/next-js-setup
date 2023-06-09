import React, { Component } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { AppDispatch } from '@/store/store';
import { LOGOUT } from '@/store/types';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();

    const authData = useSelector((state: any) => state.authData);
    console.log({ authData }, ' ----  header')
    const dispatch = useDispatch<AppDispatch>();
    const isLogger = authData.userData?.accessToken

    const logout = () =>{
        console.log("logout")
        dispatch({
            type: LOGOUT,
        })
        router.push('/login');
        
    }

    return (
        <div className='layout'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    {
                        isLogger ?
                        <Button onClick={logout}>Logout</Button>
                        : ""
                    }
                </Container>
            </Navbar>
        </div>

    );
}



