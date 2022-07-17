import React, { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineHome } from "react-icons/ai";
import { MdEventAvailable, MdOutlineKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { FaUserInjured } from "react-icons/fa";
import { Outlet, NavLink } from 'react-router-dom'
import './SideBar.css'
import { Avarter } from '../Header/Header';
import { icons } from 'react-icons/lib';
// import { Logo } from './img/Logo1.png'

function SideBar() {

    const [toggle, setToggle] = useState(true)
    const hideRecents = () => {
        setToggle(pre => pre = false)
    }
    const showRecents = () => {
        setToggle(pre => pre = true)
    }

    return (
        <div className='w-[17%] h-[100vh] bg-green-500 text-white text-center text-2xl absolute top-0 overflow-hidden py-2'>
            <div className="sideHead">
                <div className="logo-con flex items-center">
                    <span className='mb-1'>
                        <img src={'./img/Logo1.png'} width='50px' alt="" />
                    </span>
                    <h1 className='text-lg text-slate-50 font-black ml-2 mt-2 text-left'>
                        Clubs-Pay
                        <p className=' text-slate-200 text-sm mt-0 font-normal'>
                            Dashboard
                        </p>
                    </h1>
                </div>
                <AiOutlineMenuFold className='text-slate-50 cursor-pointer' />
            </div>
            <div className="sideBarBody text-white mt-7">
                <nav>
                    <NavLink to="/" className='flex items-center w-[100%] bg-white/10 p-3 rounded-l-full font-bold mb-5'>
                        <AiOutlineHome className='mr-2' />
                        <span className='text-lg'>Dashboard</span>
                    </NavLink>
                    <NavLink to="/events" className='flex items-center  w-[100%] bg-white/10 p-3 rounded-l-full  font-bold mb-5'>
                        <MdEventAvailable className='mr-2' />
                        <span className='text-lg'>Events</span>
                    </NavLink>
                    <NavLink to="/clubs" className='flex items-center  w-[100%] bg-white/10 p-3 rounded-l-full  font-bold mb-5'>
                        <FiUsers className='mr-2' />
                        <span className='text-lg'>Clubs</span>
                    </NavLink>
                </nav>
                <Outlet />

            </div>
            <div className='h-fit bg-white/10 mt-8'>
                <h1 className='text-lg flex justify-between items-center font-bold text-left mb-1 w-[100%] bg-white/10 p-3 '>
                    Recents
                    {
                        toggle ?
                            <MdOutlineKeyboardArrowDown
                                onClick={hideRecents}
                                className='text-3xl cursor-pointer' />
                            :
                            <MdKeyboardArrowUp
                                onClick={showRecents}
                                className='text-3xl cursor-pointer' />
                    }
                </h1>
                {
                    toggle &&
                    <div className='h-[53vh] overflow-auto'>
                        <UserContainer />
                        <UserContainer />
                        <UserContainer />
                        <UserContainer />
                        <UserContainer />
                        <UserContainer />
                        <UserContainer />
                    </div>
                }

            </div>
        </div>

    )
}

export default SideBar

const UserContainer = () => {
    return (
        <div className='w-[90%] m-auto flex items-center h-fit p-2 bg-slate-50/20 rounded-t-xl rounded-l-xl mt-2 overflow-auto cursor-pointer'>
            <Avarter Icon={FaUserInjured} padding='p-3' text='text-5xl' textColor='text-cyan-600' />
            <div className='text-left ml-2'>
                <span className='text-sm font-extrabold'>Nafisa sh.</span>
                <p className='text-xs font-light text-center'>Suport Manager</p>
            </div>
        </div >
    )
}
