import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Root from './Root/Root.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Home/Login/Login.jsx';
import SignUp from './Pages/Home/SignUp/SignUp.jsx';
import Proveider from './Proveider/Proveider.jsx';
import Dashboard from './Dashboard/Dashboard/Dashboard.jsx';
import AddTask from './Dashboard/Add-Task/AddTask.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import AllTask from './Dashboard/SeeAllTask/AllTask.jsx';
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
      {
        path: "contactus",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "addtask",
        element: <AddTask />,
      },
      {
        path: "alltask",
        element: <AllTask />,
      },
    ]
  },
]);
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Proveider>
      <div className='max-w-6xl mx-auto'>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </div>
    </Proveider>
  </React.StrictMode>,
)
