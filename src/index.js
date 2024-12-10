import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import CreateCourrier from './Pages/CreateCourrier';
import Loginpage from './Pages/Loginpage';
import Homepage from './Pages/Homepage';
import CreateUser from './Pages/CreateUser';
import Statistiques from './Pages/Statistiques';
import Research from './Pages/Research';
import Services from './Pages/Services';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  const router = createBrowserRouter([
    {
      path: "/Homepage",
      element: <Homepage/>,
    },
    {
      path: "/",
      element: <Loginpage/>,
    },
    {
      path: "/CreateCourrier",
      element: <CreateCourrier/>,
    },
    {
        path: "/CreateUser",
        element: <CreateUser/>,
      },
      {
          path: "/Statistiques",
          element: <Statistiques/>,
        }
        ,
      {
          path: "/Research",
          element: <Research/>,
        }  ,
        {
            path: "/Services",
            element: <Services/>,
          }
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
