
import Logo from './assets/logo22.png'

import { Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import Admin from './Components/Admin/Admin';import Home from './Components/Home';
import Inquiries from './Components/Admin/Inquiries';

function App() {
  
  const location = useLocation();
  const adminroute = location.pathname.startsWith('/admin');
  return (
    <div class='flex flex-col w-full h-full'>
      {location.pathname !== "/login" && !adminroute  && <div class="flex justify-between h-16 bg-blue-50 items-center p-2 sm:p-4 ">
              <img src={Logo} class="h-6 w-16 md:w-24"></img>
              <div class="flex gap-2 sm:gap-4  md:gap-12 text-base md:text-lg font-semibold">
                <div className='hover:text-blue-600 cursor-pointer'>Pricing</div>
                <div className='hover:text-blue-600 cursor-pointer' >Features</div>
                <NavLink to="admin/inquiries" className={({ isActive }) => `flex gap-2 items-center cursor-pointer flex-row md:text-lg hover:text-blue-600 ${isActive ? "text-blue-600" : ""}`}>Dashboard</NavLink>
              </div>
              <button class="md:text-lg px-3 py-1 hover:bg-blue-800 cursor-pointer bg-blue-500 text-white rounded-lg">Login</button>
            </div>
      }
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/admin' element={<Admin/>}>
        <Route index element={<Navigate to="inquiries" replace />} />
        <Route path="inquiries" element={<Inquiries />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
