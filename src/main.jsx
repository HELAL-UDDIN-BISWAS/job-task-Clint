import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Home/Login/Login.jsx';
import SignUp from './Pages/Home/SignUp/SignUp.jsx';
import Proveider from './Proveider/Proveider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Proveider>
      <RouterProvider router={router} />
    </Proveider>
  </React.StrictMode>,
)
