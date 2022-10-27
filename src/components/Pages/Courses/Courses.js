import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {
const [courseNames, setCourseNames] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/course-names')
    .then(res => res.json())
    .then(data => setCourseNames(data))
},[])


    const courseList = useLoaderData();
    
    return (
       <div className='grid sm:grid-cols-4 lg:grid-cols-5 gap-5 bg-slate-400 px-10'>


<div className=''>
   <h3 className='text-3xl font-semibold text-center mt-6'> Course Topics </h3>

    {
        courseNames.map(course => <h3 className='text-2xl mt-4 bg-blue-900 text-center text-blue-300 list-none hover:bg-blue-500 hover:text-black' key={course.id}>
            <Link > 
            {course.title}
            </Link>
            </h3>)
    }
</div>


<div className='sm:col-span-3 lg:col-span-4'>
<h3>This is the all cards area</h3>
{   
courseList.map(course => <CourseDetails key={course.id} course={course} /> )
}  
</div>
      
    
    
      </div>
    );
};

export default Courses;