import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  RouterProvider,
} from "react-router-dom";

import route from './Router/route.jsx';
import AuthContext from './Context/AuthContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={route}></RouterProvider>
    </AuthContext>
  </StrictMode>,
)
