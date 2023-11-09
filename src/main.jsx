import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLout from './Laouts/MainLout'
import Home from './Pages/Home/Home'
import Prodects from './Pages/Prodects/Prodects'

// const createRouter = createBrowserRouter([
//   {
//      path:'/',
//      element: <div>This is my wevsite</div>
//    },
//    {
//    path: '/Prodects',
//    element: <div>This is my prodects</div>
//    },
//    {
//    path: '/about',
//    element: <div>This is my about page</div>
//    }
// ]);

const uotlet = createBrowserRouter([
  {
    path: '/',
    element: <MainLout></MainLout>,

      
    children: [
      {
         
      path: '/',
      element: <Home></Home>
    },
    {
      path: '/Prodects',
      element: <Prodects></Prodects>
    }
  ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={uotlet}>

   </RouterProvider>

  </React.StrictMode>,
)

