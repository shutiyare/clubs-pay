import React, { useEffect, useMemo } from 'react'
import { RiArrowGoBackLine } from 'react-icons/ri'
import ReactPlayer from 'react-player';
import { Link, Outlet, useParams } from 'react-router-dom'
import { useCustomHook } from '../../ContextAPI';
import { MdOutlineReadMore } from 'react-icons/md';
import Table from '../../Components/Table/Table'
import ClubTable from './ClubTable';
import { BeatLoader } from 'react-spinners'

function ClubLists({
    description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem excepturi, enim assumenda consequuntur soluta autem nisi eum, quae quasi fugiat hic itaque. Inventore, dignissimos recusandae assumenda temporibus voluptatibus excepturi!'
}) {
    const { clubsId } = useParams();
    const { clubLisData, setClubLisData, getData, loading, setLoading } = useCustomHook()
    useEffect(() => {
        getData('/clubLists', setClubLisData)
        setTimeout(() => { setLoading(false) }, 1000)
        console.log('clubLisData', clubLisData);
    }, [])

    // const TrValues = clubLisData.map((data) => {
    //     var dataValue = Object.values(data);
    //     dataValue.push(<Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>)
    //     return dataValue
    // })
    // console.log('TrValues', TrValues);

    const tHeadValues = ['NO', 'TITLE', 'MEMBERS', 'TOTAL-PAYMENT', 'DATE-CREATED', 'MORE-DETAILS']
    const trowValues = [
        [1, 'Football', '120 memebers', "$ 3009", '23/4/2009', <Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>],
        [1, 'Football', '120 memebers', "$ 3009", '23/4/2009', <Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>],
        [1, 'Football', '120 memebers', "$ 3009", '23/4/2009', <Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>],
        [1, 'Football', '120 memebers', "$ 3009", '23/4/2009', <Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>],
        [1, 'Football', '120 memebers', "$ 3009", '23/4/2009', <Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>],
        [1, 'Football', '120 memebers', "$ 3009", '23/4/2009', <Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link>],
    ]
    // const trowValues = TrValues
    return (
        <div className='w-[100%] h-fit mb-[20%] m-auto'>
            <div className='w-[95%] m-auto'>
                <h1 className='text-xl flex justify-between font-bold mt-2 px-3 border-b-2 pb-2'>
                    <p>Clubs List</p>
                    <Link to='clubListRegister' className='hover:text-blue-500 '>
                        Add New Club
                    </Link>
                    <Outlet />
                </h1>
            </div>
            {
                loading &&
                <div className='absolute top-0 left-0 w-[83%] bg-slate-100 ml-[17%] h-screen flex justify-center items-center'>
                    <BeatLoader loading color='rgb(59 130 246)' />
                </div>
            }
            <div className='w-[95%] h-fit m-auto mt-12 bg-blue-500/5 p-5 shadow-md rounded-md'>
                <Table tableHead={tHeadValues} tableRow={trowValues} />
            </div>
        </div>
    )
}

export default ClubLists

{/* <Link to={`club/1`}><MdOutlineReadMore className='p-2 text-4xl bg-green-500/40 ml-14 rounded-full cursor-pointer' /></Link> */ }
