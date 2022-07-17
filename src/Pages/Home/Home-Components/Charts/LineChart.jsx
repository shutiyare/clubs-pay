import React, { useEffect } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useCustomHook } from '../../../../ContextAPI';

function LineChart() {
    const { clubsRegistrationPerYear, setClubsRegistrationPerYear, getData } = useCustomHook()
    useEffect(() => {
        getData('clubsRegistrationPerYear', setClubsRegistrationPerYear)
    }, [])
    console.log('clubsRegistrationPerYear-------------------->', clubsRegistrationPerYear);
    const data = {
        series: clubsRegistrationPerYear,
        options: {
            chart: {
                height: 670,
                type: "line",
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth"
            },
            title: {
                text: 'Events',
                align: "left",
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                    opacity: 0.5,
                },
            },
            yaxis: {
                min: 0,
                labels: {
                    formatter: (value) => {
                        return Number(value).toFixed(0);
                    },
                },
            },
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            },
        },
    };

    return (
        <div className='p-4'>
            <ReactApexChart
                options={{ ...data.options }}
                series={data.series}
                type="area"
                height={450}
                width={"100%"}
                className='z-10'
            />
        </div>
    )
}

export default LineChart
