import { Card } from "flowbite-react";
import React from "react";

const CourseDetails = ({course}) => {
  const { title, image, description } = course;

  return (
    <div>

    
<div className="sm:max-w-auto rounded-md shadow-2xl border-4 border-gray-300 text-gray-800 p-4 ">
	<img src={image} alt="" className=" border-2 object-fill object-center w-full rounded-t-md h-72 bg-gray-300" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
			<p className="text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-indigo-600 text-gray-50">Course Details</button>
	</div>
</div>

    </div>
  );
};

export default CourseDetails;
