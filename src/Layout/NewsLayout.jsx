import React from 'react';
import Header from '../Pages/Sharing/Header';
import NavbarBar from '../Pages/Sharing/NavbarBar';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Rightside from '../Pages/Sharing/Rightside';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <NavbarBar></NavbarBar>
            <div>
            <Container>
                <Row>
                    <Col sm={9}><Outlet></Outlet></Col>
                    <Col sm={3}><Rightside></Rightside></Col>
                </Row>
            </Container>
       
        </div>
        </div>
    );
};

export default NewsLayout;