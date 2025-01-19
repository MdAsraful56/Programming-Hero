import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Home from './components/Home/Home.jsx'
import Users from './components/Users/Users.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/users',
        loader: ()=>{fetch('https://jsonplaceholder.typicode.com/users')},
        element: <Users/>
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
