import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'antd/dist/reset.css';
import Layout from './Layout';
import Home from './pages/Home';
import List from './pages/List';
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
        path: "/list",
        element: <List />,
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
