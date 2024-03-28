import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import ListedBook from './Components/Home/ListedBook/ListedBook.jsx'
import Pagestoread from './Components/Home/Pagestoread/Pagestoread.jsx'
import Banner from './Components/Banner/Banner.jsx'
import Bookdetail from './Components/Bookdetaqils/Bookdetail.jsx'
import Error from './Components/Error/Error.jsx'
import NewBooks from './Components/NewBooks/NewBooks.jsx'




const router = createBrowserRouter(
  [
    
    {
      path:'/',
      element:<Home></Home>,
     errorElement:<Error></Error>,
      children:[
        {
path:'/listedbooks',
element:<ListedBook></ListedBook>
        },{
          path:'/pagestoread',
          element:<Pagestoread></Pagestoread>
        },
        {
          path:'/',
          element:<Banner></Banner>
        },
        {
          path:'/book/:bookId',
          element:<Bookdetail></Bookdetail>,
          loader:()=>fetch('./Books.json')
        },
       {
        path:'/newbooks',
        element:<NewBooks></NewBooks>
       }
      
      ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
