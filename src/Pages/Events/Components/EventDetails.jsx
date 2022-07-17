import React, { useEffect, useMemo, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router'
import { Link, Outlet, } from 'react-router-dom'
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Avarter } from '../../.././Components/Header/Header';
import { FiEdit } from 'react-icons/fi';
import ShowMoreText from "react-show-more-text";
import ReactPlayer from 'react-player'
import { useCustomHook } from '../../../ContextAPI';
import Checker from './Checker';
import Card from './Card';
import { FaTrashAlt } from 'react-icons/fa';


function EventDetails({ }) {
    const { eventId } = useParams();
    const { eventData, setEventRegisterTitle, setEventRegisterObject, setVisible, deleteEvent } = useCustomHook();
    const [showChecker, setShowChecker] = useState(false)
    const [event] = useMemo(() => eventData.filter(data => data.id == eventId), [eventData])
    const changeEventTitleAndSetValues = () => {
        setEventRegisterTitle(pre => pre = `Edit ${event?.title ?? 'Title'}`)
        setEventRegisterObject({ ...event })
        setVisible(true)
    }
    const deleteHandler = () => {
        setShowChecker(true)
    }
    return (
        <div className='w-[100%] h-[70vh] m-auto'>
            <div className='w-[95%] m-auto'>
                <h1 className='text-xl flex justify-between font-bold mt-2 px-3 border-b-2 pb-2'>
                    <p>Events Details Page</p>
                    <Link to='/events' className='flex'>
                        back
                        <RiArrowGoBackLine className='text-2xl font-black ml-2' />
                    </Link>
                    <Outlet />

                </h1>
            </div>
            <div className='w-[95%] h-fit min-h-full pb-8 m-auto bg-white shadow-md rounded mt-10'>
                {
                    showChecker &&
                    <Checker clickHandler={deleteEvent} id={event.id} >
                        <Card {...event} />
                    </Checker>
                }
                <div className={`flex w-[100%] ${event.mediaType == 'IMAGE' ? 'h-[38vh]' : 'h-fit'}  bg-slate-400/40`}>
                    <div className='w-[100%]'>
                        {
                            event.mediaType == 'IMAGE' ?
                                <img
                                    style={{ objectFit: 'contain' }}
                                    className='w-full h-full'
                                    src={`../${event?.mediaUrl ?? ''} `} alt="Image not found" />
                                :
                                <ReactPlayer
                                    className='W-full h-full'
                                    url={`https://youtu.be/0QPvaJWSz_Y`} alt="Image" />
                        }
                    </div>

                </div>
                <div className='w-[95%] m-auto mt-5'>
                    <div>
                        <h1 className='text-2xl font-bold'>{event?.title ?? 'Title'}</h1>
                        <ShowMoreText
                            lines={4}
                            more="Show more"
                            less="Show less"
                            className='text-base font-medium mt-5 h-[15vh] pb-2 overflow-auto'>
                            {event?.description ?? 'description'}
                        </ShowMoreText>
                    </div>
                    <div className='flex justify-end gap-5'>
                        <p
                            onClick={deleteHandler}
                            className='text-red-500 text-2xl font-semibold cursor-pointer'>
                            <FaTrashAlt />
                        </p>
                        <Link to='/events/eventRegiterPage'
                            onClick={changeEventTitleAndSetValues}
                            className='text-2xl font-semibold text-green-500 cursor-pointer'>
                            <FiEdit />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails

