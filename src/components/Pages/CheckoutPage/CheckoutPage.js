import { Button } from 'flowbite-react';
import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const CheckoutPage = () => {

const {user} = useContext(AuthContext)

const checkoutCourse = useLoaderData();

const{title, price, image, description, instructor, courseDuration, id} = checkoutCourse ;

    return (
      
        <div className='w-[50%] mx-auto shadow-xl mt-10 border-4'>
            
       
         <div className='flex flex-col items-center justify-center'>
         <h3 className="text-lg md:text-2xl text-center text-fuchsia-600">Congratulations</h3>
        <h4 className='text-lg text-center font-semibold'>{user?.displayName}</h4>
        <img src={user?.photoURL} alt="" className='rounded-full'
         style={{ height: "60px", width: "60px" }}
        />
         </div>

            <h2 className='tex-lg md:text-3xl fontsemi-bold text-center my-8'>Buy The Course : {title}</h2>

            <div className='flex justify-around'>
            <p className="font-semibold text-center bg-teal-400 rounded-md">Price : ${price}</p>
            <p className="md:font-semibold text-center bg-teal-400 rounded-md hidden md:inline"> Course Duration : ${courseDuration}</p>
            </div>

          <div>
          <button type="button" className="text-center p-1 font-semibold tracking-wide rounded-md bg-[#03396b] text-gray-50 hover:bg-teal-400 hover:text-black">Get Premium Access $</button>
          </div>
        </div>

    );
};

export default CheckoutPage;