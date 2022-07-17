import React from 'react'

function THead({
    thValues,
}) {

    return (
        <thead className='sticky top-0 bg-white border-b border-slate-700/40  text-left text-xl font-extrabold text-slate-700 uppercase tracking-wider'>
            <tr>
                {
                    thValues.map((value, index) => {
                        return (
                            <th className={`px-6 py-5 rounder-2xl text-base font-bold text-left`}>
                                {typeof value === 'object' ? value.title : value}
                            </th>
                        )
                    })
                }
            </tr>
        </thead>
    )
}

export default THead


