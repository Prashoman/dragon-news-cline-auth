import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import EiditorsBottom from '../Sharing/EiditorsBottom';

const NewsDetails = () => {
    const detailsData = useLoaderData();

    const {image_url,thumbnail_url,title,details,category_id} = detailsData;
    console.log(detailsData);
    return (
        <div>
            <div className='mb-3'>
                <h4>Dragon News</h4>
            </div>
            <Card >
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                    
                </Card.Body>
            </Card>
            <div>
                <EiditorsBottom></EiditorsBottom>
            </div>
    </div>
    );
};

export default NewsDetails;