import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {

    const {user,loading}= useContext(AuthContext);

    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>
    }
    if(user){
        return children;
    }


    return (
       <Navigate to={'/login'}></Navigate>
    );
};

export default PrivateRoutes;