import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Gym from './Pages/Gym/Gym.jsx'
import Sports from './Pages/Sports/Sports.jsx'
import Yoga from './Pages/Yoga/Yoga.jsx'
import Calisthenics from './Pages/Calisthenics/Calisthenics.jsx'
import Home from './Pages/Home/Home.jsx'
import EditDetails from './Pages/EditDetails/EditDetails.jsx'
import SingleGymDesc from './Pages/SingleGymDesc/SingleGymDesc.jsx'
import Centre_Content from './Components/CentreContent/CentreContent.jsx'
import UserLogin from './Auth/user/UserLogin.jsx'
import UserSignup from './Auth/user/UserSignup.jsx'
import BusinessSignup from './Auth/Business/BusinessSignup.jsx'
import BusinessLogin from './Auth/Business/BusinessLogin.jsx'
import BusinessDashboard from './Pages/BusinessDashboard/BusinessDashboard.jsx'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout />}>
      <Route path = "" element = {<Home />} />
      
      <Route path = "user-login" element = {<UserLogin />} />
      <Route path = "user-signup" element = {<UserSignup />} />

      <Route path = "business-signup" element = {<BusinessSignup />} />
      <Route path = "business-login" element = {<BusinessLogin />} />

      <Route path = "business-dashboard" element = {<BusinessDashboard />} />



      <Route path = "Gym" element = {<Gym />} />
      <Route path = "Gym/SingleGymDesc" element = {<SingleGymDesc />} />
      <Route path = "Gym/SingleGymDesc/" element = {<SingleGymDesc />} />
      
      <Route path = "Yoga" element = {<Yoga />} />
      <Route path = "Calisthenics" element = {<Calisthenics />} />
      <Route path = "Sports" element = {<Sports />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
)