import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router';
import AuthProviders from './Providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='container mx-auto'>
  <AuthProviders>
  <RouterProvider router={router}></RouterProvider>
  </AuthProviders>
   </div>
  </React.StrictMode>,
)
