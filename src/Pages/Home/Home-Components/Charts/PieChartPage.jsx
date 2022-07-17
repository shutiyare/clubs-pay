import React, { useEffect } from 'react'
import { Pie } from "react-chartjs-2"
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'
import { useCustomHook } from '../../../../ContextAPI'

function PieChartPage() {
    const { clubRegistaring, setClubRegistaring, getData } = useCustomHook()
    useEffect(() => {
        getData('/clubRegistaring', setClubRegistaring)
    }, [])
    
    const lebels = clubRegistaring.map(lebel => lebel.title)
    const totalStudents = clubRegistaring.map(student => student.totalStudents)


    const state = {
        labels: lebels,
        datasets: [
            {
                label: 'events',
                backgroundColor: [
                    "rgb(59 130 246)",
                    'rgb(168 85 247)',
                    'rgb(52 211 153)',
                    'rgb(234 179 8)',
                    'rgb(225 29 72)',
                    'rgb(6 182 212)',
                    'rgb(55 48 163)',
                    'rgb(236 72 153)',
                ],
                data: totalStudents,
            }
        ]
    }
    const option = {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                },
                display: true,
                position: 'bottom',
                align: 'center'
            },
            title: {
                text: 'Teams per events',
                display: true,
                fontSize: 20
            }
        }
    }
    return (
        <div className='w-[100%] h-[90vh]'>
            <Pie data={state} options={option} width={3900} height={3900} />
        </div>
    )
}

export default PieChartPage
