import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { Outlet, useNavigate, useParams } from 'react-router'
import { Link, } from 'react-router-dom'
import RegularBtn from '../../Components/RegularButtons/RegularBtn'
import Inputs from '../../Components/RegularInputs/Inputs'
import { useDropzone } from 'react-dropzone'
import TextFields from '../../Components/RegularInputs/Inputs'
import { useCustomHook } from '../../ContextAPI'


function ClubRegister() {
    const { registerId } = useParams()
    const [image, setImage] = useState()

    const { clubsData, setClubsData, post, putClub } = useCustomHook()
    const [club] = useMemo(() => clubsData.filter(data => data.id == registerId), [clubsData])
    const onDrop = useCallback(acceptedFiles => {
        const [file] = acceptedFiles
        setImage(file)
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        const credintials = new FormData(e.target)
        const title = credintials.get('title')
        const clubInfo = {
            title: credintials.get('title'),
            mediaUrl: `${image?.name ? `../img/Sports_Img/${image.name}` : club.mediaUrl}`
        }
        if (!club)
            post('/clubs', clubInfo, clubsData, setClubsData)
        if (club)
            putClub(clubInfo, registerId)
        navigate('/clubs')
    }

    return (
        <div className='w-[90%] h-[85vh] m-auto' >
            <h1 className='text-xl flex justify-between font-bold mt-2 px-3 border-b-2 pb-2'>
                <p>Clubs Register Page</p>
                <Link to='/clubs' className='flex items-center'>
                    back
                    <RiArrowGoBackLine className='text-2xl font-black ml-2' />
                </Link>
                <Outlet />
            </h1>
            <div className='w-[90%] min-h-[55vh] h-fit m-auto mt-5 py-5 shadow-md bg-white rounded-2xl '>
                <h1 className='text-center text-2xl font-bold w-fit m-auto pb-2 border-b-2'>
                    New Club Register
                </h1>

                <form onSubmit={onSubmit}
                    className='w-[90%] h-fit m-auto mt-5 px-10 py-7 flex flex-col gap-3'>
                    <p className='text-xl ml-1 font-semibold'>Club Title</p>
                    <TextFields
                        defaultValue={club ? club.title : null}
                        name='title'
                        label='Club title'
                        fontSize='text-xl mt-3 mb-5 '
                    />
                    <p className='text-xl ml-1 mt-3 font-semibold'>Upload Club Image</p>
                    <div
                        {...getRootProps()}
                        className='w-[100%] h-[30vh]  flex justify-center items-center shadow-md overflow-auto border-8 border-dashed border-slate-500 '>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ... </p> :
                                <p>Drag and drop image here, <br /> or click to uplaod image</p>
                        }
                        <div className='w-[8%] absolute bottom-[22%] right-[15%]'>
                            <img
                                src={`../../${club ? club.mediaUrl : ''}`}
                                src={`${club ? `../../${club.mediaUrl}` : image && URL.createObjectURL(image)}`}
                                style={{ objectFit: "fill" }}
                                alt='image not found'
                                className='h-full'
                            />
                        </div>
                    </div>
                    <div className='text-right'>
                        <RegularBtn
                            label='Save'
                            margin='mt-5'
                            type='submit'
                            bgColor='bg-blue-400 hover:bg-blue-500'
                            padding='py-3 px-6' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ClubRegister
