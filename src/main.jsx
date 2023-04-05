import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Manage from './components/Manage/Manage';
import Login from './components/Login/Login';
import CardLoader from './LoaderProduct/loaderProduct';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children:[
      {
        path: '/',
        element: <Shop />
      },
      {
        path: '/order',
        element:<Orders />,
        loader: CardLoader
      },
      {
        path: '/manage',
        element:<Manage />
      },,
      {
        path: '/login',
        element:<Login />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
