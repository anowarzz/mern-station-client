import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../assets/web-dev.png";
import ExampleProject from "../ExapleProjects/ExampleProject";



const Home = () => {

 
  return (
    <div>
      <div className="mb-8">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-slate-200 transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-52 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={hero}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
              Learn the <span className="text-zinc-900">MERN</span>
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-center sm:text-left">
            Launch Your Career 
              <br/>
             <span> As A</span> <br className="md:hidden" />
              <span className="inline-block text-purple-700 md:pl-2"> Full-Stack Developer</span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Learn to build entire web applications from start to finish on one of the most versatile tech stacks : MongoDB, Express.js, React.js and Node.js (MERN stack)
            </p>

            <div className="flex items-center">
              <Link to="/courses">
                <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide  transition duration-200  shadow-md bg-black text-white  focus:shadow-outline  hover:bg-teal-400 hover:text-black focus:outline">
                  View Courses
                </button>
              </Link>
              
              <Link to="/register">
                <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 shadow-md bg-black btn hover:bg-teal-400 hover:text-black focus:shadow-outline focus:outline">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


<ExampleProject />


    </div>
  );
};

export default Home;
