import React from 'react'
import ShowMoreText from "react-show-more-text";
import { BrowserRouter, Routes, Route, NavLink, Link, Outlet, } from 'react-router-dom'


function Card({
    id = 1,
    title = 'Title',
    mediaUrl = '',
    description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit possimus officia, repellendus perferendis, odio voluptatum dolor nesciunt porro fuga alias quia dolores reiciendis deserunt temporibus voluptates dolorem, consectetur ea voluptate?',
    more = true
}) {
    // const {  } = useCustomHook();
    return (
        <>
            <Link to={`/events/${id}`} className='w-[31%] h-fit pb-5 cursor-pointer bg-white shadow-md rounded-lg'>
                <div className='w-[100%] bg-slate-400/40 h-fit text-center rounded-t-lg'>
                    <img src={`../${mediaUrl}`} className='w-full h-[30vh] rounded-t-md' alt="" />
                </div>
                <div className='w-[95%] h-[16vh] m-auto px-2 mt-5'>
                    <h1 className='text-xl font-extrabold mb-5'>{title}</h1>
                    <ShowMoreText
                        lines={2}
                        more="Show more"
                        less="Show less"
                        className='text-base text-gray-500 font-medium h-3/6 pb-2 overflow-auto'>
                        {description}
                    </ShowMoreText>
                </div>
                {
                    more && <p className='py-2 px-2 border border-slate-400/50 rounded-b-lg w-[90%] m-auto'>More Details.....</p>
                }
            </Link>
            <Outlet />
        </>

    )
}

export default Card
