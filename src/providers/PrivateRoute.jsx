import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    //console.log(location);
    //console.log(loading);

    if (loading) {
        return <div className=" min-h-screen flex justify-center items-center">
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.state} to="/login"></Navigate>;
};


export default PrivateRoute;