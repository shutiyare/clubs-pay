import React, { Component } from 'react'
import Header from '.././Components/Header/Header'
import SideBar from '.././Components/SideBar/SideBar'
import MainView from '../Pages/MainView/MainView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ContextAPI from '../ContextAPI'
import LoginForm from '../Components/LoginForm/LoginForm'
import SecurityProvider from '../context/securityContext'

function App() {
    return (
        <ContextAPI>
            <SecurityProvider>
                <BrowserRouter>
                    <div className='w-[100%] h-[100vh] overflow-auto bg-slate-50 text-slate-700'>
                        <Header />
                        <SideBar />
                        <MainView />
                    </div>
                </BrowserRouter>
            </SecurityProvider>

        </ContextAPI>
    )
}

export default App
