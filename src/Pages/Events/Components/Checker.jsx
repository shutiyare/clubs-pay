import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { Link, Outlet, } from 'react-router-dom'

function Checker({ children, id, clickHandler }) {
    return (
        <div className='w-[100%] h-full  absolute top-0 z-40 left-0 bg-slate-900/50'>
            <div className='w-[40%] h-[90vh] flex flex-col justify-around items-center m-auto mt-5 p-8 bg-white rounded-xl'>
                <h1 className='w-[100%] text-xl flex justify-between font-bold  px-3 border-b-2 pb-2'>
                    <p>Check before you delete it</p>
                    <Link to='/events/' className='flex'>
                        <IoMdClose
                            className='text-2xl font-black ml-2' />
                    </Link>
                    <Outlet />
                </h1>
                <div className='w-[70%] h-fit bg-white shadow-md  pb-5'>
                    {children}
                </div>
                <div className='flex flex-wrap justify-center gap-5'>
                    <h1 className='text-2xl text-center font-semibold w-[90%]'>
                        Do you want to <span className='text-red-500'>delete</span> this event
                    </h1>
                    <Link
                        to='/events'
                        className='px-5 py-2 border-2 border-rose-500 hover:bg-rose-500 text-xl text-slate-700 hover:text-white duration-300 font-semibold rounded-md'>
                        No!
                        </Link>
                    <Link
                        to='/events'
                        onClick={() => clickHandler(id)}
                        className='px-5 py-2 border-2 border-blue-500 hover:bg-blue-500 text-xl text-slate-700 hover:text-white duration-300 font-semibold rounded-md ml-12'>
                        Yes
                        </Link>
                </div>

            </div>
        </div>
    )
}

export default Checker
