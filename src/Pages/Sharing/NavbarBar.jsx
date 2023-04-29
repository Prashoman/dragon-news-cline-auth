import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthProviderContext } from '../../AuthProvider/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const NavbarBar = () => {
    const {user, logOut} = useContext(AuthProviderContext)

    const handleSingOut =() =>{
        logOut()
    }
    return (
        <Container>
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link  to="/category/0">Home</Link> 
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }

                            {user ?
                                <Button onClick={handleSingOut} variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                
            </Navbar>
        </Container>
    );
};

export default NavbarBar;