import React, { useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
import ClubCards from './ClubCards';
import { useCustomHook } from '../../ContextAPI';
import { BeatLoader } from 'react-spinners'

function Clubs() {
    const { clubsData, setClubsData, getData, loading, setLoading } = useCustomHook()
    useEffect(async () => {
        await getData('/clubs', setClubsData)
        setTimeout(() => { setLoading(false) }, 1000)
    }, [])
    return (
        <div className='w-[95%] m-auto'>
            <div className='mt-5 w-[95%] px-3 pb-2 m-auto mb-7 flex justify-between items-center border-b-2'>
                <h1 className='text-xl font-bold'>Users Page</h1>
                <Link to='clubRegister' className=''>
                    <p className='text-xl font-bold hover:text-blue-500'>Add New Club</p>
                </Link>
                <Outlet />
            </div>
            <div className='w-[100%] h-fit flex flex-wrap m-auto mt-5 ml-3 gap-12 rounded-t-xl'>
                {
                    loading &&
                    <div className='absolute top-0 left-0 w-[83%] bg-slate-100 ml-[17%] h-screen flex justify-center items-center'>
                        <BeatLoader loading color='rgb(59 130 246)' />
                    </div>
                }
                {
                    clubsData.length ?
                        clubsData.map((value, index) => {
                            return (
                                <ClubCards {...value} key={index} />
                            )
                        })
                        :
                        <ClubCards title='Empty' />
                }
            </div>
        </div>
    )
}

export default Clubs
