import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

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
    element: <section>
      <div>This is page is Fiext page</div>
     <Outlet></Outlet>
    </section>,

      
    children: [{
         
      path: '/prodects',
      element: <div>This is my  prodects</div>
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

