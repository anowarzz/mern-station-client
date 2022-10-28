import { faNetworkWired } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Blog = () => {
  return (
    <div className="h-full pb-12">
      <h1 className="text-4xl font-bold text-center pt-8 pb-10 ">
        Firebase Authentication 
      </h1>

      <div className="mt-16  rounded font-semibold w-[80%] mx-auto p-6">
        <h3 className="text-3xl p-2 ">
          1. What Is <code>Cors</code> ?
        </h3>

        <p className="mt-6 text-lg">
        “CORS” stands for Cross-Origin Resource Sharing. CORS is a protocol and security standard for browsers that helps to maintain the integrity of a website and secure it from unauthorized access.
        CORS is a security standard implemented by browsers that enable scripts running in browsers to access resources located outside of the browser’s domain.
        </p>
      </div>

      <div className="mt-16  rounded font-semibold w-[80%] mx-auto p-6">
        <h3 className="text-3xl p-2 ">2. Why Do We Use Firebase ? What other options do you have to implement authentication? </h3>

        <p className="mt-6 text-lg">
        Firebase is a software development platform offered by Google. It helps to quickly build web applications without managing infrastructure. Before we discuss the pros and cons of using Firebase, let’s cover its best features. Basically, it consists of dozens of helpful services inside, including Authenticaton, Hosting, Cloud Storage.
         Other Alternative systems that we can use to implement are:
        </p>
        <ul className="text-lg text-center">
            <li>STYTCH</li>
            <li>Ory</li>
            <li>Supabase</li>
            <li>Okta</li>
            <li>PingIdentity</li>
        </ul>
      </div>

      <div className="mt-16 rounded font-semibold w-[80%] mx-auto p-6">
        <h3 className="text-3xl p-2 ">3. What is Node? How does Node work? ? </h3>

        <p className="mt-6 text-lg">
        Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses 

        </p>

        <p className="mt-6 text-lg">
            Node Working Procedure  <FontAwesomeIcon icon={faNetworkWired} /> 
        </p>
        <p>
    <ol className="text-lg">
        <li>
        1. Node.js maintains a limited thread pool to serve requests.
        </li>
        2. Whenever a request comes, Node.js places it into a queue.
        <li>
        3. Now, the single-threaded “Event loop”—the core component—comes into the picture. This event loop waits for requests indefinitely.
        </li>
        4 . When a request comes in, the loop picks it up from the queue and checks whether it requires a blocking input/output (I/O) operation. If not, it processes the request and sends a response.
        <li>

        </li>
        5 . If the request has a blocking operation to perform, the event loop assigns a thread from the internal thread pool to process the request. There are limited internal threads available. This group of auxiliary threads is called the worker group.
        <li>
        6. The event loop tracks blocking requests and places them in the queue once the blocking task is processed. This is how it maintains its non-blocking nature.
        </li>
    </ol>
        </p>
      </div>


      <div className="mt-16  rounded font-semibold w-[80%] mx-auto p-6">
        <h3 className="text-3xl p-2 ">3.  How does the private route work??</h3>

        <p className="mt-6 text-lg">
        Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
        </p>
      </div>


    </div>
  );
};

export default Blog;
                                                                                                                                                                                                                 