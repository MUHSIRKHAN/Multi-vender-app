
import React, { useEffect } from 'react'
import "./App.css"
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import { ActivationPage, HomePage, LoginPage } from './Routes'
import SignupPage from './Pages/SignupPage'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { loaduser } from './redux/actions/user'
import Store from './redux/store'

const App = () => {
  useEffect(()=>{
   Store.dispatch(loaduser())

  },[])
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
<Route path='/login' element={<LoginPage/>}/>
<Route path='/sign-up' element={<SignupPage/>}/>
<Route path='/activation/:activation_token' element={<ActivationPage/>}/>
    </Routes>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </BrowserRouter>
  )
}

export default App