import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog";
import CheckoutPage from "../../components/Pages/CheckoutPage/CheckoutPage";
import CourseDetails from "../../components/Pages/CourseDetails/CourseDetails";
import Courses from "../../components/Pages/Courses/Courses";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import FAQ from "../../components/Pages/FAQ/FAQ";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Register from "../../components/Pages/Register/Register";
import SingleCourse from "../../components/Pages/SingleCourse/SingleCourse";
import Main from "../../layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element: <Home />,
            },
            {
                path:'/home',
                element: <Home />,
            },
        
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path:'/courses',
                loader: () => fetch('https://mern-station.vercel.app/courses'),
                element: <Courses />
            },
            {
                path:'/course/:id',
                element: <SingleCourse />,
                loader: ({params}) => (`https://mern-station.vercel.app/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
              path: '/faq',
              element: <FAQ /> 
            },
            {
             path: 'course-details',
             element: <CourseDetails />
            },
            {
                path: '/checkout',
                element: <PrivateRoutes> <CheckoutPage /> </PrivateRoutes>
            }

        ]
    }
])