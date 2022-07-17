import React from 'react'
import { MdOutlineReadMore } from 'react-icons/md'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

function ClubTable({ trowData }) {
    return (
        <div className='shadow mt-10 overflow-y-scroll max-h-[80vh] border-b border-gray-200 sm:rounded-lg mb-10'>
            <table className='w-full divide-y divide-gray-200 '>
                <THead />
                {
                    trowData.map((value, index) => {
                        return (
                            <TRow {...value} key={index} />
                        )
                    })
                }
            </table>
        </div>
    )
}

export default ClubTable

function THead() {
    return (
        <thead className='sticky top-0 bg-slate-900 text-left text-white uppercase tracking-wider text-xl'>
            <tr className='border-b border-gray-200'>
                <th className="px-6 py-3 text-base font-medium text-left">ID</th>
                <th className="px-6 py-3 text-base font-medium">Full-Name</th>
                <th className="px-6 py-3 text-base font-medium ">Phone</th>
                <th className="px-6 py-3 text-base font-medium">Sex</th>
                <th className="px-6 py-3 text-base font-medium bg-slate-900 text-center">U/D</th>
            </tr>
        </thead>
    )
}

function TRow({
    id,
    title,
    members,
    totalPayment,
    DateCreated
}) {
    return (
        <tr className='text-left text-base text-slate-50 border-b border-slate-100'>
            <td className="px-6 py-4 whitespace-nowrap bg-slate-700 text-left ">{id}</td>
            <td className="px-6 py-4 whitespace-nowrap bg-slate-700 ">{title}</td>
            <td className="px-6 py-4 whitespace-nowrap bg-slate-700 ">{members}</td>
            <td className="px-6 py-4 whitespace-nowrap bg-slate-700  ">{totalPayment}</td>
            <td className="px-6 py-4 whitespace-nowrap bg-slate-700  ">{DateCreated}</td>
            <td className="px-6 py-4 whitespace-nowrap bg-slate-800 text-xl ">
                <div className='flex justify-around text-center'>
                    <Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>
                    <Outlet />
                </div>
            </td>
        </tr>
    )
}
