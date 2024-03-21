import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Userlayouts from '../layouts/user-layouts'
import Authorupdateform from '../components/common/authorupdateform'
import Categorypage from '../pages/category-page'
import Userpage from '../pages/user-page'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Userlayouts/>,
        children:[
            {
                 index:true,
                 element:<Authorupdateform/>
            },

            {
                path: "category",
                element: <Categorypage/>
            },

            {
              path:"Book",
              element:<Categorypage/>
            },

            {
              path:"user",
              element:<Userpage/>
            }
        ]
    }

])

const AppRouter = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter