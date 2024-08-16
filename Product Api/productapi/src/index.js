import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cart from './Cart';
import About from './About';
import App from './App';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Cart",
    element:<Cart/>
  },
  
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<RouterProvider router={router}/>
  </React.StrictMode>
);


