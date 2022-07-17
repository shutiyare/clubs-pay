import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, Outlet, } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";
import Inputs from '../../../Components/RegularInputs/Inputs';
import { useCustomHook } from '../../../ContextAPI';
import RegularBtn from '../../../Components/RegularButtons/RegularBtn';
import { AiOutlineClose } from 'react-icons/ai';
import { useDropzone } from 'react-dropzone'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import ReactHtmlParser from 'react-html-parser';
import TextFields from '../../../Components/RegularInputs/Inputs';

function EventRegisterPage() {

    const {
        eventRegisterTitle, openPopUpForm,
        setOpenPopUpForm, register, setRegister,
        eventRegisterObject, setEventRegisterObject, visible, postEvent, putEvent
    } = useCustomHook();

    const { title, description } = register
    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(ContentState.createFromBlockArray(
            convertFromHTML(`${visible ? eventRegisterObject?.description ?? '' : ''}`))
        ))

    useEffect(() => {
        setRegister({ ...register, description: draftToHtml(convertToRaw(editorState.getCurrentContent())) })
    }, [editorState])

    const onSubmit = (e) => {
        e.preventDefault();
        setOpenPopUpForm(pre => pre = true)
    }

    const inputChangeHandler = (e) => {
        const { value } = e.target;
        setRegister({ ...register, title: value })
        setEventRegisterObject({ ...eventRegisterObject, title: value })
    }

    return (
        <div className='w-[90%] h-[100vh] m-auto' >
            {
                openPopUpForm && <PopUpForm />
            }
            <h1 className='text-xl flex justify-between font-bold mt-2 px-3 border-b-2 pb-2'>
                <p>Events Register Page</p>
                <Link to='/events' className='flex items-center'>
                    back
                    <RiArrowGoBackLine className='text-2xl font-black ml-2' />
                </Link>
                <Outlet />
            </h1>
            <div className='w-[90%] min-h-[75vh] h-fit m-auto mt-5 py-5 shadow-md bg-white rounded-2xl '>
                <h1 className='text-center text-2xl font-bold w-fit m-auto pb-2 border-b-2'>
                    {eventRegisterTitle}
                </h1>

                <form onSubmit={onSubmit}
                    className='w-[90%] h-fit m-auto mt-10 px-10 py-7 flex flex-col gap-2'>
                    <p className='text-xl ml-1 font-semibold'>Event Name</p>
                    <TextFields
                        label='Event title'
                        value={visible ? eventRegisterObject.title : title}
                        onchangeHandler={inputChangeHandler}
                        fontSize='text-xl mt-3 mb-5 '
                        bgColor='bg-slate-200'
                        placeHolder='Event Name'
                    />
                    <p className='text-xl ml-1 mt-3 font-semibold'>Description</p>
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={setEditorState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        placeholder='Write description here.....'
                    />
                    <div className='text-right'>
                        <RegularBtn
                            label='Save'
                            margin='mt-5'
                            type='submit'
                            bgColor='bg-blue-400 hover:bg-blue-500'
                            padding='py-3 px-6'
                        />
                    </div>
                </form>
            </div>
        </div >
    )
}

const PopUpForm = () => {
    const {
        openPopUpForm, setOpenPopUpForm, visible, eventData, setEventData, post, postEvent, putEvent,
        eventRegisterObject, setEventRegisterObject, register, setRegister
    } = useCustomHook();
    const [image, setImage] = useState()
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        const [file] = acceptedFiles
        setImage(file)
    }, [])
    console.log('eventRegisterObject');
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })


    const postData = (e) => {
        post('/events', register, eventData, setEventData)
        setOpenPopUpForm(false)
    }

    const putData = (e) => {
        putEvent(register, eventRegisterObject.id)
        setOpenPopUpForm(false)
    }
    useEffect(() => {
        setRegister({ ...register, mediaUrl: `${image?.name ? `./img/Sports_Img/${image.name}` : eventRegisterObject.mediaUrl}` })
    }, [image])

    const close = () => {
        setOpenPopUpForm(false)
    }

    return (
        <div className='absolute top-0 left-0 w-full h-[100vh] bg-gray-800/50 z-40'>
            <div className='w-[70%] h-[90vh] m-auto bg-slate-50 mt-10 p-7 rounded-xl'>
                <div className='flex justify-between items-center text-2xl text-center font-semibold border-b-2 pb-2 px-3 mb-7'>
                    <h1>Upload Image</h1>
                    <p className='cursor-pointer'
                        onClick={close}>
                        <AiOutlineClose />
                    </p>
                </div>
                <div className='w-[95%] m-auto flex flex-col justify-between items-center mt-14'>

                    <div
                        {...getRootProps()}
                        className='w-[70%] h-[40vh] bg-white shadow-md flex justify-center items-center  overflow-auto border-8 px-2 border-dashed border-slate-500'>
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here ... </p> :
                                <p>Drag 'n' drop some files here, <br /> or click to select files</p>
                        }
                        <div className='w-[8%] absolute bottom-[43%] right-[30%]'>
                            <img
                                src={image && URL.createObjectURL(image)}
                                style={{ objectFit: "fill" }}
                                alt='image not found'
                                className='h-full'
                            />
                        </div>
                    </div>

                </div>

                <div className='w-[30%] m-auto  flex justify-between items-center mt-14'>
                    <Link to='/events/eventRegiterPage' onClick={() => setOpenPopUpForm(false)}
                        className='bg-transparent hover:bg-rose-500 hover:text-white text-xl font-bold duration-100 px-3 py-3 border-2 border-rose-500 rounded-md'>
                        Cancel
                    </Link>
                    <Link to='/events' onClick={visible ? putData : postData}
                        className='bg-transparent hover:bg-blue-500 hover:text-white text-xl font-bold duration-100 px-5 py-3 border-2 border-blue-500 rounded-md'>
                        Send
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default EventRegisterPage
