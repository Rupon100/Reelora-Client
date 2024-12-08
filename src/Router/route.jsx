import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../EoorPage/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blog from "../Components/Blog";
import MianSection from "../Components/MianSection";
import AddMovie from "../Pages/AddMovie";
import FavoriteMovie from "../Pages/FavoriteMovie";
import Allmovie from "../Pages/Allmovie";
import PrivateRoute from "../Provider/PrivateRoute";
import Details from "../Components/Details";
import UpdateDetails from "../Pages/UpdateDetails";

 

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <MianSection></MianSection>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allmovie',
                element: <Allmovie></Allmovie>
            },
            {
                path: '/addmovie',
                element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>,
            },

            {
                path: '/favmovie',
                element: <PrivateRoute><FavoriteMovie></FavoriteMovie></PrivateRoute>,
                // loader: ({ params }) => fetch(`https://movie-server-gray.vercel.app/favmovie/${params.email}`)
            },

            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://movie-server-gray.vercel.app/details/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateDetails></UpdateDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://movie-server-gray.vercel.app/update/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default route;