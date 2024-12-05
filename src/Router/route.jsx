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
                element: <PrivateRoute><AddMovie></AddMovie></PrivateRoute>
            },
            {
                path: '/favmovie',
                element: <PrivateRoute><FavoriteMovie></FavoriteMovie></PrivateRoute>
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
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