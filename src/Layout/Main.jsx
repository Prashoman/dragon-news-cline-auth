import React from 'react';
import Header from '../Pages/Sharing/Header';
import { Outlet } from 'react-router-dom';
import Animation from '../Pages/Sharing/Animation';
import NavbarBar from '../Pages/Sharing/NavbarBar';
import { Col, Container, Row } from 'react-bootstrap';
import Fotter from '../Pages/News/Fotter';
import Rightside from '../Pages/Sharing/Rightside';
import LeftBar from '../Pages/Sharing/LeftBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Animation></Animation>
            <NavbarBar></NavbarBar>
        <div>
            <Container>
                <Row>
                    <Col sm={3}><LeftBar></LeftBar></Col>
                    <Col sm={6}><Outlet></Outlet></Col>
                    <Col sm={3}><Rightside></Rightside></Col>
                </Row>
            </Container>
       
        </div>
            <Fotter></Fotter>
        </div>
    );
};

export default Main;