import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home.jsx";
import NotFound from "../pages/notFound.jsx";
import Login from "../pages/login.jsx";
import Layout from "../layouts/layout.jsx";
import Contact from "../pages/contact.jsx";
import Shop from "../pages/shop.jsx";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);
