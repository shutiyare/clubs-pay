import React from 'react'
import ImgAvater from '../ImgAvater/ImgAvater'
import { MdOutlineReadMore } from 'react-icons/md';
import { Avarter } from '../Header/Header';


function TRow({
    trValue = [],
}) {
    return (
        <tr className='text-left text-base font-semibold text-slate-900  border-b border-slate-300'>
            {
                trValue.map((value, index) => {
                    return (
                        <Td value={value} />
                    )
                })
            }
        </tr>
    )
}

export default TRow

const Td = ({
    children,
    value,
    style
}) => {
    return (
        <td className={`${style} ${typeof value == 'object' ? 'w-[17%]' : ''} px-6 py-3 whitespace-nowrap bg-white text-left`}>
            {children}
            {value}
        </td>
    )
}