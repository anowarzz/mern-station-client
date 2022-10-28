import React from "react";
import cart from "../../../assets/cart-project-9420.svg";
import calculator from "../../../assets/calculator-app-9426.svg";
import music from "../../../assets/music-app-9425.svg";
import todo from "../../../assets/to-do-list-app-9421.svg";
import chat from "../../../assets/chatting-engine-9424.svg";
import social from "../../../assets/basic-social-media-9423.svg";
import blog from "../../../assets/static-blog-9427.svg";
import contact from "../../../assets/mini-contact-list-9422.svg";
import movie from "../../../assets/movie-app-9759.svg";

const ExampleProject = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-black">
              Project OverView
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <div className="relative">
              <span className=" inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className=" text-blue-500 px-2 text-4xl">Projects</span>
              </span>
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className=" inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 -right-10 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                  width="52"
                  height="24"
                />
              </svg>
            </div>
            That You Wil Build During The Course
          </h2>

          <p className="text-base text-gray-700 md:text-lg">
            During These course you will build the following projects and gain
            excellent skill set of Front-end UI and The backend database and
            server.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 lg:grid-cols-3 w-[90%] mx-auto">
          <div className="flex flex-col items-center border-2 shadow-xl bg-gray-100">
            <div className="m-2">
              <img
                src={cart}
                alt=""
                className="bg-blue-500 rounded-full w-48 "
              />
            </div>
            <div className="mt-2 p-6">
              <h6 className="mb-2 font-semibold leading-5 text-center  text-xl">
                Shopping Cart
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Build the basic functionality of the shopping cart as you see in
                Amazon and Flipkart
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center border-2 shadow-xl bg-gray-100">
            <div className="m-2">
              <img
                src={social}
                alt=""
                className="bg-blue-500 rounded-full w-48 "
              />
            </div>
            <div className="mt-2 p-6">
              <h6 className="mb-2 font-semibold leading-5 text-center  text-xl">
                Social Media Website
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Create a social media website with popular features like a post,
                comment etc using Node.js, Mongo DB and more
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center border-2 shadow-xl bg-gray-100">
            <div className="m-2">
              <img
                src={chat}
                alt=""
                className="bg-blue-500 rounded-full w-48 "
              />
            </div>
            <div className="mt-2 p-6">
              <h6 className="mb-2 font-semibold leading-5 text-center  text-xl">
                Chatting Engine
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Build a basic chat engine using sockets, which enables the users
                to chat with each other on the website
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center border-2 shadow-xl bg-gray-100">
            <div className="m-2">
              <img
                src={music}
                alt=""
                className="bg-blue-500 rounded-full w-48 "
              />
            </div>
            <div className="mt-2 p-6">
              <h6 className="mb-2 font-semibold leading-5 text-center  text-xl">
                Music Player
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Build and style a music player like Spotify/Youtube Music using
                HTML and CSS Image
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center border-2 shadow-xl bg-gray-100">
            <div className="m-2">
              <img
                src={todo}
                alt=""
                className="bg-blue-500 rounded-full w-48 "
              />
            </div>
            <div className="mt-2 p-6">
              <h6 className="mb-2 font-semibold leading-5 text-center  text-xl">
                Todo List App
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Build a todo list app using Node.js and express.js
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center border-2 shadow-xl bg-gray-100">
            <div className="m-2">
              <img
                src={blog}
                alt=""
                className="bg-blue-500 rounded-full w-48 "
              />
            </div>
            <div className="mt-2 p-6">
              <h6 className="mb-2 font-semibold leading-5 text-center  text-xl">
                Static Blog
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Build the UI of a basic blog using HTML
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center border-2 shadow-xl bg-gray-100">
            <div className="m-2">
              <img
                src={contact}
                alt=""
                className="bg-blue-500 rounded-full w-48 "
              />
            </div>
            <div className="mt-2 p-6">
              <h6 className="mb-2 font-semibold leading-5 text-center  text-xl">
                Mini Contact List
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                Understand how the backend works and create a contact list by
                storing the data in a DB
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center border-2 shadow-xl bg-gray-100">
            <div className="m-2">
              <img
                src={calculator}
                alt=""
                className="bg-blue-500 rounded-full w-48 "
              />
            </div>
            <div className="mt-2 p-6">
              <h6 className="mb-2 font-semibold leading-5 text-center  text-xl">
                Mini Calculator
              </h6>
              <p className="mb-3 text-sm text-gray-900">
                uild a calculator web app with Javascript as the core and style
                it with CSS
              </p>
            </div>
          </div>


          <div className="flex flex-col items-center border-2 shadow-xl bg-gray-100">
            <div className="m-2">
              <img
                src={movie}
                alt=""
                className="bg-blue-500 rounded-full w-48 "
              />
            </div>
            <div className="mt-2 p-6">
              <h6 className="mb-2 font-semibold leading-5 text-center  text-xl">
              Movies App
              </h6>
              <p className="mb-3 text-sm text-gray-900">
              Search any movie and store it as your favourite
              </p>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default ExampleProject;
