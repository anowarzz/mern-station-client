import { Card } from "flowbite-react";
import React from "react";

const CourseDetails = ({course}) => {
  const { title, image, description } = course;

  return (
    <div>
      <h3>Here goes all the cards {course.length}</h3>
    </div>
  );
};

export default CourseDetails;
