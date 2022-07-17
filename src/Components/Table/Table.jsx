import React from 'react'
import TFoot from './TFoot'
import THead from './THead'
import TRow from './TRow'

function Table({
    tableHead = [],
    tableRow = []
}) {
    return (
        <table className='w-full'>
            <THead thValues={tableHead} />
            {
                tableRow.map((value, index) => {
                    return (
                        <TRow trValue={value} key={index} />
                    )
                })
            }


            {/* <TFoot /> */}
        </table>

    )
}

export default Table
