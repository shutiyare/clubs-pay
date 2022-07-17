import React from 'react'
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineStackedLineChart } from "react-icons/md";


function Card({
    Icon = BiMessageDetail,
    Title = '1478 286',
    isVissible = true
}) {
    return (
        <div className='w-[22%] mt-5 h-fit shadow rounded-lg px-5 py-9 bg-white'>
            <div className='flex'>
                <Icon className='bg-green-200 text-green-600 p-4 rounded-full text-6xl' />
                <div className='ml-4'>
                    <span className='text-base font-black'>{Title}</span>
                    {
                        isVissible &&
                        <div>
                            <p className=' text-xs text-slate-500 font-bold'>{'Total Visits'}</p>
                            <p className=' text-xs flex items-center text-slate-500 font-bold'>
                                <MdOutlineStackedLineChart className='mr-2 text-sm text-green-500 ' />{'Last Month'}
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Card

{/* <div className='flex justify-between'>
                <Icon className='bg-green-500 p-4 rounded-full text-6xl text-white' />
                <div className=''>
                    <span className='text-xl font-semibold'>{Title}</span>
                    <p className='text-right text-lg font-semibold'>{number}</p>
                </div>
            </div> */}