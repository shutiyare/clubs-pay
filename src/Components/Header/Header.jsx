import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting, AiOutlineSearch } from "react-icons/ai";
import { FaUserInjured } from "react-icons/fa";

import Inputs from '../RegularInputs/Inputs';

function Header() {
    return (
        <header className='header'>
            <div className=" w-[100%] flex items-center justify-end gap-3">
                <Avarter Icon={FaUserInjured} margin='ml-3' />
                Abdirahman
            </div>
        </header>
    )
}

export default Header

export const Avarter = ({
    Icon = FaUserInjured,
    padding = 'p-3',
    text = 'text-5xl',
    bgColor = 'bg-slate-100',
    textColor = 'text-green-500',
    margin = ''
}) => {
    return (
        <Icon className={`${text} ${bgColor} ${padding} ${textColor} ${margin} text-right  rounded-full cursor-pointer`} />
    )
}