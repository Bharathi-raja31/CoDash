import React from 'react';

// Bootstrap Components
import { Container, Nav, Navbar, Badge } from 'react-bootstrap';

// Assets
const headerLogo = require('../assets/img/header-logo.png');
const userAvatar = require('../assets/img/user-avatar.jpg');
const notification = require('../assets/img/notification.svg');

const Navigation = () => {
    return (
        <header className="app-header">
            <>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={headerLogo} alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto app-links">
                                <Nav.Link className="active" href="#home">Menu 1</Nav.Link>
                                <Nav.Link href="#listing">Menu 2</Nav.Link>
                                <Nav.Link href="#detail">Menu 3</Nav.Link>
                                <Nav.Link href="#stats">Menu 4</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto user-links">
                                <Nav.Link className="notification" href="#notification">
                                    <Badge variant="primary">2</Badge>
                                    <img src={notification} alt="User" />
                                </Nav.Link>
                                <Nav.Link className="profile" href="#profile">
                                    <img src={userAvatar} alt="User" />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </header>
    )
}

export default Navigation;