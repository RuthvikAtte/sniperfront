import React from 'react';
import './index.css';
import App from './pages/App';
import * as ReactDOM from "react-dom/client";
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "contact",
    element: <ContactPage></ContactPage>
  },
  {
    path: "about",
    element: <AboutPage></AboutPage>
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
