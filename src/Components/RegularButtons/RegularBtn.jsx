import React from 'react'

function RegularBtn({
    label = 'Click',
    Handler = () => { },
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    bgHover = 'hover:bg-blue-700',
    padding = 'px-12 py-2',
    cursor = '',
    border,
    width = "",
    margin = '',
    shadow = '',
    type = "button",
    forValue = '',
}) {
    return (
        <button onClick={Handler}
            type={type}
            className={`${bgColor} ${textColor} ${bgHover} ${cursor} ${padding} ${width} ${border} ${margin} text-xl  rounded tracking-wider font-bold duration-700`}>
            {label}
        </button>
    )
}

export default RegularBtn
