import { Card } from "flowbite-react";
import React from "react";

const CourseDetails = ({course}) => {
  const { title, image, description, courseDuration, price } = course;

  return (
    <div>

    
<div className="sm:max-w-auto rounded-md shadow-2xl border-2 border-gray-300 text-gray-800 p-4 ">
	<img src={image} alt="" className=" border-2 object-fill object-center w-full rounded-t-md h-72 bg-gray-300" />
	<div className="flex flex-col justify-between p-6 space-y-8">
		<div className="space-y-2">
			<h2 className="text-3xl text-center font-semibold tracking-wide">{title}</h2>

            <p className="w-24 ml-16 font-semibold text-center bg-teal-400 rounded-md inline-block ">Price : ${price}</p>
            <h5 className="text-lg font-bold">Total Duration : {courseDuration}</h5>

		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#03396b] text-gray-50 hover:bg-teal-400 hover:text-black">Course Details</button>
	</div>
</div>

    </div>
  );
};

export default CourseDetails;
