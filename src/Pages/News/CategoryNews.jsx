import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardCategory from './CardCategory';

const CategoryNews = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h4>Categories Length : {data.length}</h4>
            <div>
                {
                    data.map(news => <CardCategory key={news._id} categoriesCard ={news}></CardCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;