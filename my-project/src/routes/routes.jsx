import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../component/Home";
import Login from "../component/Login";
import Register from "../component/Register";

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
            }
            
        ]
    }
])

export default routes;