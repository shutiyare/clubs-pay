import React, { useEffect, useState } from 'react'
import { FaUsers, FaMoneyBillAlt } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { useCustomHook } from '../../ContextAPI';
import Card from './Home-Components/Card/Card';
import LineChart from './Home-Components/Charts/LineChart';
import PieChartPage from './Home-Components/Charts/PieChartPage';


function Home() {
    const { summary, setSummary, getData } = useCustomHook()
    const { events, clubs, students, totalPayment } = summary;

    useEffect(() => {
        getData('summery', setSummary)
    }, [])

    return (
        <div className='w-[98%] h-fit m-auto'>
            <h1 className='text-xl font-bold mt-2 border-b-2 px-3 pb-2'>Dashboard</h1>
            <div className="cards flex justify-around ">
                <Card Icon={MdEventNote} Title={`${events} Events`} />
                <Card Icon={FaUsers} Title={`${clubs} Clubs`} />
                <Card Icon={FaUsers} Title={`${students} Students`} />
                <Card Icon={FaMoneyBillAlt} Title={`total payments $${totalPayment}`} isVissible={false} />
            </div>
            <div className="charts w-[100%] m-auto flex justify-around">
                <div className="line w-[67%] h-[60vh] bg-white shadow mt-8 rounded-xl">
                    <LineChart />
                </div>
                <div className="line w-[27%] h-[60vh] bg-white pt-5 pb-10  shadow mt-8 rounded-xl">
                    <h1 className='px-5 text-sm font-bold mb-12'>Teams per event</h1>
                    <PieChartPage />
                </div>
            </div>
        </div>
    )
}

export default Home
