import { useState, React } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'

// Importing all the components
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'

function App () {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Home />
    }
  ])
  return<>
  <Navbar/>
  <RouterProvider router={router} />
  <Footer/>
  </> 
}

export default App
