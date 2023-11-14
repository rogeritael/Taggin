import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './pages/Home/index.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/favoritos',
        element: <Home />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
