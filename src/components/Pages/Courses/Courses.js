import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {


    const courses = useLoaderData();
    console.log(courses);
    
    return (
        <div>
            <h3 className="text-3xl">This is the course section</h3>
        </div>
    );
};

export default Courses;