import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import RegularBtn from '../../Components/RegularButtons/RegularBtn'
import TextFields from '../../Components/RegularInputs/Inputs'
import { useCustomHook } from '../../ContextAPI'

function ClubListRegister() {
    const { clubsId } = useParams()
    const navigate = useNavigate();
    const { clubLisData, setClubLisData, post } = useCustomHook()
    const onSubmit = (e) => {
        e.preventDefault()
        const credintials = new FormData(e.target)
        const inputValues = {
            title: credintials.get('title'),
            members: credintials.get('members'),
            totalPayments: credintials.get('totalPayments'),
            dateCreated: credintials.get('dateCreated')
        }
        post('/clubLists', inputValues, clubLisData, setClubLisData)
        navigate(`/clubs/${clubsId}`)
    }

    return (
        <div className='w-[90%] h-[100vh] m-auto' >
            <h1 className='text-xl flex justify-between font-bold mt-2 px-3 border-b-2 pb-2'>
                <p>Clubs Register Page</p>
                <Link to={`/clubs/${clubsId}`} className='flex items-center'>
                    back
                <RiArrowGoBackLine className='text-2xl font-black ml-2' />
                </Link>
                <Outlet />
            </h1>
            <div className='w-[90%] min-h-[75vh] h-fit m-auto mt-5 py-5 shadow-md bg-white rounded-2xl '>
                <h1 className='text-center text-2xl font-bold w-fit m-auto pb-2 border-b-2'>
                    New Club Register
            </h1>
                <form
                    onSubmit={onSubmit}
                    className='w-[90%] h-fit m-auto mt-10 px-10 py-7 flex flex-col gap-7'>
                    <TextFields
                        name='title'
                        label="Title" />
                    <TextFields
                        name='members'
                        label="Members" />
                    <TextFields
                        name='totalPayments'
                        label="Total Payments" />
                    <TextFields
                        type='date'
                        name='dateCreated'
                        label="DateCreated" />

                    <div className='text-right'>
                        <RegularBtn
                            label='Save'
                            margin='mt-5'
                            type='submit'
                            bgColor='bg-blue-400 hover:bg-blue-500'
                            padding='py-3 px-6'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ClubListRegister
