import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/posts',
        loader: () => { fetch('https://jsonplaceholder.typicode.com/posts') },
        element: <Posts/>
      },
      {
        path: '/users',
        element: <Users/>
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
