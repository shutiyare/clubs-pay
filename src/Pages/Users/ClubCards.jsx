import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { CgDetailsMore } from 'react-icons/cg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { FaExchangeAlt } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useCustomHook } from '../../ContextAPI';
import { Button, ButtonBase, IconButton } from '@mui/material';


function ClubCards({
    id,
    title,
    mediaUrl,
    mediaType
}) {

    const { deleteMainClub } = useCustomHook();
    const [toggle, setToggle] = useState(false)
    const deleteMainClubData = () => {
        setToggle(true)
    }

    return (
        <div className='w-[30%] h-[25vh] p-5  bg-white shadow-md rounded-lg'>
            {
                toggle && <DeleteChecker id={id} setToggle={setToggle} deleteClub={deleteMainClub} />
            }
            <div className='flex pl-4 justify-between items-center mb-1'>
                <FaExchangeAlt className='text-xl text-blue-500' />
                <span className='flex justify-end gap-3 items-center'>
                    <RiDeleteBin6Line
                        onClick={deleteMainClubData}
                        className='text-xl text-rose-500 cursor-pointer' />
                    <Link to={`/clubs/clubRegister/${id}`}>
                        <FiEdit className='text-xl text-green-500 cursor-pointer' />
                    </Link>
                    <Outlet />
                </span>
            </div>
            <Link to={`/clubs/${id}`} className='w-[100%] cursor-pointer ' >
                <div className='flex gap-5 items-center'>
                    <div className='w-[70px] mt-3 bg-slate-400/40 h-[70px] text-center rounded-full'>
                        <img src={`../${mediaUrl}`}
                            className='w-[70px] h-[70px] rounded-full' alt="image not found"
                            style={{ objectFit: 'fill' }} />
                    </div>
                    <div className='w-[70%]'>
                        <h1 className='text-lg mt-3 font-bold'>
                            {title}
                        </h1>
                        <p className='flex justify-between text-xs text-slate-500 font-semibold mt-1'>
                            12 members
                        <span>
                                Expense
                            <span className='text-green-500 font-bold px-1'>$ 3201</span>
                            </span>
                        </p>
                    </div>
                </div>
                <p className='w-[95%] ml-4 flex justify-between items-center text-right mt-5'>
                    <span>
                        <CgDetailsMore className='text-2xl text-blue-500' />
                    </span>
                More details.....
            </p>
            </Link>
            <Outlet />

        </div>
    )
}

export default ClubCards

const DeleteChecker = (
    {
        id,
        setToggle = () => { },
        deleteClub = () => { }
    }
) => {
    return (
        <div className='w-[83%] ml-[17%] absolute top-0 left-0 h-[100vh] bg-slate-800/20 flex justify-center items-center'>
            <div className='w-[40%] h-[50vh] bg-white rounded-lg'>
                <div className='flex justify-between items-center px-5 py-3 text-lg font-bold border-b '>
                    <h1>Check it</h1>
                    <IconButton color="primary" aria-label="upload picture" component="span">
                        <IoMdClose
                            onClick={() => { setToggle(false) }}
                            className='text-2xl cursor-pointer' />
                    </IconButton>
                </div>
                <div className='h-[33vh] flex flex-col justify-center items-center'>
                    <h1 className='text-2xl font-bold'>
                        Do you wanna <span className='text-rose-500'>delete</span> this Club
                    </h1>
                </div>
                <div className='px-5 flex justify-end gap-6 items-center'>
                    <Button
                        onClick={() => { setToggle(false) }}
                        size='large'
                        variant="outlined" color="secondary">
                        NO!
                    </Button>
                    <Button
                        onClick={() => {
                            deleteClub(id)
                            setToggle(false)
                        }}
                        size='large'
                        variant="outlined" color="primary" className='text-2xl font-extrabold'>
                        YES
                    </Button>
                </div>
            </div>
        </div>
    )
}