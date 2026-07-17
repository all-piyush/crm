import React, { useEffect, useState } from 'react'
import Dashboard from './Inquiries'
import { IoHomeSharp, IoPerson, IoReorderThreeOutline, IoSettings } from 'react-icons/io5'

import { NavLink } from 'react-router-dom'
import { HiCube } from "react-icons/hi2";
import { Outlet } from "react-router-dom";
import { FaShoppingBag } from 'react-icons/fa';
import { GiShop } from 'react-icons/gi';
const Admin = (props) => {
  const{products,setproducts}=props;
  const url = import.meta.env.VITE_APP_URL;
  const [sidebar,setsidebar]=useState(false);
  const [productoverlay,setproductoverlay]=useState(false);
  const [inquiries,setinquiries]=useState([]);
  async function fetchinquiries(){
    try{
      const response = await fetch(`${url}/api/fetch-inquiries`, {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      })
      const result = await response.json();
      if(result.success){
        setinquiries(result.inquiries);
      }
    }catch(error){
      console.log(error);
    }
  }
  
  useEffect(()=>{
    fetchinquiries();
  },[])
  return (
    <div class="relative flex flex-col lg:flex-row gap-8 ">
      {productoverlay && <div class="fixed top-0 left-0 w-screen h-screen bg-black/40 z-90"></div>}
      {sidebar && <div class="fixed top-0 left-0 w-screen h-screen bg-black/40 z-40"></div>}
      <div onClick={()=>setsidebar(true)} className="lg:hidden cursor-pointer pt-4 p-2 text-4xl flex items-center"><IoReorderThreeOutline/>Admin</div>
      <div className={`flex flex-col gap-20 min-w-60 bg-[#2F3E55] text-white min-h-screen pt-4 p-2 pl-4 z-50  ${sidebar ? "admin-sidebar" : "close"} `}>
      <div class="text-4xl flex justify-between">Dashboard {sidebar?<div onClick={()=>setsidebar(false)} class="cursor-pointer">X</div>:''}</div>
      <div class="flex flex-col gap-8 text-2xl">
          <NavLink to="inquiries" className={({isActive})=>`flex gap-2 items-center flex-row text-2xl ${isActive?"text-yellow-500":""}`}><IoHomeSharp></IoHomeSharp><div>Inquiries</div></NavLink>
          <div className='flex gap-2 items-center flex-row text-2xl' ><HiCube/>Products</div>
          <div className="flex gap-2 items-center flex-row text-2xl" ><IoPerson/>Users</div>
          <div className="flex gap-2 items-center flex-row text-2xl"><IoSettings/>Settings</div>
          

        </div>
        </div>
        <Outlet context={{inquiries,setinquiries}}/>
    </div>
    
  )
}

export default Admin
