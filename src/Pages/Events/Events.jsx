import React, { useEffect, useState } from 'react'
import Card from './Components/Card';
import { Link, Outlet } from 'react-router-dom'
import { useCustomHook } from '../../ContextAPI';
import apiRequest from '../../api-request';
import { BeatLoader } from 'react-spinners'

function Events() {
    const { loading, setLoading, eventData, setEventData, setEventRegisterTitle, getData, setVisible, setRegister } = useCustomHook();

    const changeEventTitle = () => {
        setEventRegisterTitle(pre => pre = `New Event Registration`)
        setVisible(false)
        setRegister({ title: '' })
    }

    useEffect(async () => {
        await getData('/events', setEventData)
        setTimeout(() => { setLoading(false) }, 1000)
    }, [])

    return (
        <div className='w-[98%] m-auto'>
            <div className='mt-5 w-[95%] px-3 pb-2 m-auto flex justify-between items-center border-b-2'>
                <h1 className='text-xl font-bold'>Events Page</h1>
                <Link to='eventRegiterPage' onClick={changeEventTitle} className=''>
                    <p className='text-xl font-bold hover:text-blue-500'>Add new event</p>
                </Link>
                <Outlet />
            </div>
            {
                loading &&
                <div className='absolute top-0 left-0 w-[83%] bg-slate-100 ml-[17%] h-screen flex justify-center items-center'>
                    <BeatLoader loading color='rgb(59 130 246)'
                        className='' />
                </div>
            }
            <div className='w-[100%] h-fit flex flex-wrap m-auto mt-5  gap-9 p-5 rounded-t-xl'>
                {
                    eventData.length ?
                        eventData.map((value, index) => {
                            return (
                                <Card {...value} key={index} />
                            )
                        })
                        :
                        <Empty changeEventTitle={changeEventTitle} />
                }
            </div>

        </div>
    )
}

const Empty = ({ changeEventTitle = () => { } }) => {
    return (
        <div className='w-[100%] h-[74vh] bg-white shadow-md rounded-2xl flex flex-col justify-center items-center'>
            <h1 className='text-xl font-bold mb-10'>
                Please register Event by clicking the top link or bottom link
            </h1>
            <Link to='eventRegiterPage' onClick={changeEventTitle} className=''>
                <p className='text-xl font-bold hover:text-blue-500'>Add new event</p>
            </Link>
            <Outlet />
        </div>
    )
}
export default Events
