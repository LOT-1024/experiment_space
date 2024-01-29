import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "..";
import { ContainerPage } from "../../view";

export const router = createBrowserRouter([
    {
        element: <ContainerPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <h1>Hello World</h1>
            },
            {
                path: '/destination',
                element: <h1>Hello World</h1>
            },
            {
                path: '/crew',
                element: <h1>Hello World</h1>
            },
            {
                path: '/technology',
                element: <h1>Hello World</h1>
            }
        ]
    }
]) 