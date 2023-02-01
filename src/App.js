import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'antd/dist/reset.css';
import Layout from './Layout';
import Home from './pages/Home';
import Article from './pages/Article';
import Profile from './pages/Profile';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/profile",
        element: <Profile />,
      }
    ]
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
