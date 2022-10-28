import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLoaderData } from 'react-router-dom';
import React from "react";
import Pdf from "react-to-pdf";



const ref = React.createRef();


const SingleCourse = () => {

const newCourse = useLoaderData();

console.log(newCourse);

const{title, price, image, description, instructor, courseDuration, id} = newCourse;


    return (
       
 <div className='bg-gray-100  dark:text-white pt-4' ref={ref}>
              
<div  class="relative p-6 mt-12 w-[90%] lg:w-[70%] mx-auto bg-white rounded-lg border-2 border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   <div className='flex flex-col justify-center items-center gap-3'>
   <div className='flex flex-col lg:gap-4 lg:flex-row justify-center'>
   <h3 class=" text-center mb-2 text-2xl md:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">Course Title : {title} </h3>
   
   {/* <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-mono rounded-full text-sm px-4 py-1 md:py-0 text-center mr-2 mb-2"><span className='text-sm'>Course PDF <FontAwesomeIcon icon={faFilePdf}/>  </span></button> */}


   <Pdf targetRef={ref} filename="course-details.pdf">
          {({ toPdf }) => 
          
          <button type="button" onClick={toPdf} className='text-white bg-red-700 hover:bg-red-800 focus:outline-none font-mono rounded-full text-sm px-4 py-1 md:py-0 text-center mr-2 mb-2'>Course Pdf <FontAwesomeIcon icon={faFilePdf}/> </button>}

        </Pdf>


   </div>
    <img src={image} alt="" className='w-96 border-4 bg-gray-200' />
   </div>

       
            <div  className='flex flex-col justify-center items-center mt-8 gap-2'>
            <h5 className='font-semibold text-xl'>Instructor : {instructor.name}</h5>
            <img src={instructor?.photo} alt="" className='rounded-full h-16 w-16 object-cover'/>
            </div>

 
            <div className='flex justify-between gap-6 items-center mt-10 mb-5'>
                <h4 className='text-lg md:text-xl font-semibold bg-teal-400 px-2 py-1 rounded-xl'>Price: ${price}</h4>
                <h4 className='text-lg md:text-xl font-semibold bg-teal-400 px-2 py-1 rounded-xl'><span className='hidden md:inline'>Course</span> Duration : {courseDuration}</h4>
            </div>

    <p class="text-lg font-semibold text-gray-700 dark:text-white md:px-8 mt-10">{description}</p>


  <div className='text-center my-5'>
  <Link to= {`/checkout/${newCourse.id}`}>
        <button type="button" className="text-center p-3 font-semibold tracking-wide rounded-md bg-[#03396b] dark:bg-[#0c7be2] text-gray-50 hover:bg-teal-400 hover:text-black">Get Premium Access $</button>
        </Link>

  </div>
</div>


 </div>
      
    );
};

export default SingleCourse;