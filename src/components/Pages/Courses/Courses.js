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
       <div className='grid md:grid-cols-5 gap-5 px-6'>


<div className='relative'>
   <h3 className='text-3xl font-semibold text-center mt-4'> Course Topics </h3>

  <div className='sticky top-10'>
  {
        courseNames.map(course => <h3 className='text-2xl mt-4 text-center hover:bg-indigo-600 text-white tracking-wide bg-[#032D6B] ' key={course.id}>
            <Link > 
            {course.title}
            </Link>
            </h3>)
    }
  </div>
</div>


<div className='md:col-span-4 mt-8'>

<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
{   
courseList.map(course => <CourseDetails key={course.id} course={course} /> )
}  
</div>

</div>
      
    
    
      </div>
    );
};

export default Courses;