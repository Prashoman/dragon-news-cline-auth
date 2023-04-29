import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './MainRouter/MainRouter.jsx';
import AuthContext from './AuthProvider/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContext>
    <RouterProvider router={router} />
    </AuthContext>
     
  </React.StrictMode>,
)
