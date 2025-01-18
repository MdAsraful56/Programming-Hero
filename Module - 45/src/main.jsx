import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import About from './components/About.jsx';
import User from './components/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/blog',
        element: <Blog/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/userrr',
        element: <User/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
