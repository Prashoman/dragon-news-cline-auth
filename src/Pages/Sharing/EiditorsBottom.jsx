import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Img1 from '../../assets/1.png'
import Img2 from '../../assets/2.png'
import Img3 from '../../assets/3.png'

const EiditorsBottom = () => {
    return (
        <div className='mt-3'>
            
                <Row lg={3} >
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={Img1} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                        <h4>date : Jan 4, 2022</h4>
                            </Card.Text>
                        
                        </Card.Body>
                        </Card>
                    
                    </Col>
                    <Col>
                       <Card>
                        <Card.Img variant="top" src={Img2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                        <h4>date : Jan 4, 2022</h4>
                            </Card.Text>
                        
                        </Card.Body>
                        </Card></Col>
                    <Col>
                    <Card>
                        <Card.Img variant="top" src={Img3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                        <h4>date : Jan 4, 2022</h4>
                            </Card.Text>
                        
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
        </div>
    );
};

export default EiditorsBottom;