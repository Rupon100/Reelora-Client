import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../EoorPage/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blog from "../Components/Blog";
import MianSection from "../Components/MianSection";

 

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