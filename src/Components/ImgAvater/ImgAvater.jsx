import React from 'react'

function ImgAvater({
    img = './img/Sports_Img/Footbal.png'
}) {
    return (
        <img src={img} alt="hh" className='rounded-full' />
    )
}

export default ImgAvater
