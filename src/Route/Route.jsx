import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLout from '../Laouts/MainLout';
import Home from '../Pages/Home/Home';
import Prodects from '../Pages/Prodects/Prodects';

const createRoute =createBrowserRouter([
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

export default createRoute;