import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
const Animation = () => {
    return (
        <Container className='d-flex border mb-2  p-2'>
            <Button variant="danger">Latest</Button>
            <Marquee className='text-danger' speed={100}>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </Container>
    );
};

export default Animation;