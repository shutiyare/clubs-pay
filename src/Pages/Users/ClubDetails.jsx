import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Link, Outlet, useParams } from 'react-router-dom'
import ShowMoreText from "react-show-more-text";
import ReactPlayer from 'react-player'
import Table from '../../Components/Table/Table'

function ClubDetails() {
    const { clubId, clubinfoid } = useParams();

    const tHeadValues = ['ID', 'Name', 'Focault', 'Payment', 'joined at']
    const trowValues = [
        [1, " Abdirahman Abdirashid Ahmed", '12 clubs', '$3780', '25-03-2019',],
        [2, " Aisha Mohamed Ahmed", '12 clubs', '$3780', '25-03-2019',],
        [3, " Abdullahi Ali Hassan", '12 clubs', '$3780', '25-03-2019',],
    ]

    return (
        <div className='w-[100%] h-[fit] pb-12 m-auto'>
            <div className='w-[95%] m-auto'>
                <h1 className='text-xl flex justify-between font-bold mt-2 px-3 border-b-2 pb-2'>
                    <p>Club Details Page</p>
                    <Link to={`/clubs/${clubinfoid}`} className='flex'>
                        back
                        <RiArrowGoBackLine className='text-2xl font-black ml-2' />
                    </Link>
                    <Outlet />
                </h1>
            </div>
            <div className='w-[95%] h-fit min-h-full pb-8 m-auto bg-white shadow-md rounded mt-10'>

                <div className={`flex w-[100%]`}>
                    <div className='w-[100%] bg-slate-200'>
                        {
                            <img
                                style={{ objectFit: 'contain' }}
                                className='w-full h-[38vh]'
                                src={`../../../img/Sports_Img/Bike.svg`} alt="Image not found" />
                        }
                    </div>

                </div>
                <div className='w-[95%] m-auto mt-5'>
                    <div>
                        <h1 className='text-2xl font-bold'>{clubId?.title ?? 'Title'}</h1>
                        <ShowMoreText
                            lines={4}
                            more="Show more"
                            less="Show less"
                            className='text-base font-medium mt-5 h-[15vh] pb-2 overflow-auto'>
                            {clubId?.description ?? 'description'}
                        </ShowMoreText>
                    </div>
                    <div className='flex justify-end gap-5'>
                        <p
                            className='text-red-500 text-2xl font-semibold cursor-pointer'>
                            <FaTrashAlt />
                        </p>
                        <Link to='/events/eventRegiterPage'
                            className='text-2xl font-semibold text-green-500 cursor-pointer'>
                            <FiEdit />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-[95%] h-fit m-auto mt-12  bg-blue-500/5 p-5 shadow-md rounded-md'>
                <Table tableHead={tHeadValues} tableRow={trowValues} />
            </div>
        </div>
    )
}

export default ClubDetails
