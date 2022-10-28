import { useLoaderData } from 'react-router-dom';

const SingleCourse = () => {

const newCourse = useLoaderData();

console.log(newCourse);

const{title} = newCourse;


    return (
        <div>
            <h3>THis is the course area {title} </h3>
        </div>
    );
};

export default SingleCourse;