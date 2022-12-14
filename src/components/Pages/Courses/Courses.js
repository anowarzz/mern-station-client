import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import CourseDetails from "../CourseDetails/CourseDetails";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://mern-station.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);




  return (
   <div>
      {loading && (
    <div className="flex items-center justify-center min-h-screen">
      <FadeLoader color="blue" className="text-center" />
    </div>
  )}
     <div className="grid md:grid-cols-5 gap-5 px-6">




<div className="relative">
  <h3 className="text-3xl font-semibold text-center mt-4">
    {" "}
    Course Topics{" "}
  </h3>

  <div className="sticky top-10">
    {courses.map((course) => (
      <Link
        to={`/courses/${course.id}`}
        className="text-xl rounded mt-4 text-center hover:bg-teal-400 hover:text-black text-white tracking-wide bg-[#032D6B] block "
        key={course.id}
      >
        {course.title}
      </Link>
    ))}

    <Link></Link>
  </div>
</div>


<div className="md:col-span-4 mt-8">
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
    {courses.map((course) => (
      <CourseDetails key={course.id} course={course} />
    ))}
  </div>
</div>
</div>
   </div> 
  );
};

export default Courses;
