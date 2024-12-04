import { useContext } from "react";
import { authContext } from "../Context/AuthContext";
import Loading from "../Components/Loading";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    if(user){
        return children;
    }
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;