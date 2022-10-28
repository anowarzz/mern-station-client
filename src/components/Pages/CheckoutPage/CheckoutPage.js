import { Button } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CheckoutPage = () => {

const {user} = useContext(AuthContext)

const checkoutCourse = useLoaderData();

const{title, price, courseDuration} = checkoutCourse





    return (
      
        <div className='w-[80%] md:w-[60%] mx-auto shadow-xl mt-10 border-4'>
            
       
         <div className='flex flex-col items-center justify-center'>
         <h3 className="text-lg md:text-2xl text-center text-fuchsia-600">Congratulations</h3>
        <h4 className='text-lg text-center font-semibold'>{user?.displayName}</h4>
        <img src={user?.photoURL} alt="" className='rounded-full'
         style={{ height: "60px", width: "60px" }}
        />
         </div>

            <h2 className='tex-lg md:text-3xl font-semi-bold text-center my-8'>Buy The Course : {title}</h2>

            <div className='flex justify-around'>
            <p className="font-semibold text-center bg-teal-400 rounded-md px-2">Price : ${price}</p>
            <p className="md:font-semibold text-center bg-teal-400 rounded-md px-2 hidden md:inline"> Course Duration : ${courseDuration}</p>
            </div>

          <div className='flex flex-col gap-2 justify-center items-center mt-7'>

       <Link>
       <button className='btn bg-[#03396b] text-white p-2'>Proceed Payment</button>
       </Link>

       <Link to='/courses'>
       <button className='btn bg-red-500 p-2 text-white'>Back To Courses </button>
       </Link>

          </div>
       
        </div>

    );
};

export default CheckoutPage;