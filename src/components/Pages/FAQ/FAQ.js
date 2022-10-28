import { Accordion } from 'flowbite-react';
import React, { Component } from 'react';

class FAQ extends Component {
    render() {
        return (
            <div className='w-[90%] md:w-[80%] mx-auto mt-12'>
              <Accordion>
  <Accordion.Panel>
    <Accordion.Title>
     What Is MERN Stack 
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      MERN is one of several variations of the MEAN stack (MongoDB Express Angular Node), where the traditional Angular.js front-end framework is replaced with React.js. Other variants include MEVN (MongoDB, Express, Vue, Node), and really any front-end JavaScript framework can work.
      </p>
     
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>


    <Accordion.Title>
    What Is MongoDB ?
    </Accordion.Title>
    <Accordion.Content>
    MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License which is deemed non-free by several distributions
    </Accordion.Content>
  </Accordion.Panel>


  <Accordion.Panel>
    <Accordion.Title>
      What is Node Js ?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.
      </p>
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
      What is Rect Js ?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.
      </p>
    </Accordion.Content>
  </Accordion.Panel>




</Accordion>
            </div>
        );
    }
}

export default FAQ;