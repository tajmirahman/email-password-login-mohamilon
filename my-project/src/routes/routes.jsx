import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../component/Home";
import Login from "../component/Login";
import Register from "../component/Register";
import Orders from "../component/Orders";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../component/Profile";

const routes= createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'login',
                element: <Login />
            },
            {
                path:'register',
                element: <Register />
            },
            {
                path:'orders',
                element: <PrivateRoutes><Orders /></PrivateRoutes>
            },
            {
                path:'profile',
                element:<PrivateRoutes><Profile /></PrivateRoutes>
            }
            
        ]
    }
])

export default routes;