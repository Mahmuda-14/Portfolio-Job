import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import All from './Components/Projects/All';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/all",
    element: <All></All>,
  }



]);


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <div >
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
