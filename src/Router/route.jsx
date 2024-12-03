import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Error from "../EoorPage/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

 

const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])

export default route;