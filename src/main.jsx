import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './components/Layout.jsx'
import About from './components/About/About.jsx'
import './index.css'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'


// One way of writting routers
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact-us",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// Another way of creating routers
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact-us' element={<Contact/>} />
      <Route path='github' element={<GitHub/>} />
      <Route path='user/:userid' element={<User/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
