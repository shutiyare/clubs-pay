import React from 'react'
import Home from '../Home/Home'
import ReactDom from 'react-dom'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Events from '../Events/Events'
import EventDetails from '../Events/Components/EventDetails'
import EventRegisterPage from '../Events/Components/EventRegisterPage'
import Clubs from '../Users/Clubs'
import ClubLists from '../Users/ClubLists'
import ClubDetails from '../Users/ClubDetails'
import ClubRegister from '../Users/ClubRegister'
import ClubListRegister from '../Users/clubListRegister'

function MainView() {
    return (
        <div className='w-[83%] h-fit pb-5 ml-[17%]'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='events' >
                    <Route index={true} element={<Events />} />
                    <Route path=":eventId" element={<EventDetails />} />
                    <Route path="eventRegiterPage" element={<EventRegisterPage />} />
                </Route>
                <Route path='clubs' >
                    <Route index={true} element={<Clubs />} />
                    <Route path='clubRegister' element={<ClubRegister />} />
                    <Route path="clubRegister/:registerId">
                        <Route index={true} element={<ClubRegister />} />
                    </Route>
                    <Route path=":clubsId"  >
                        <Route index={true} element={<ClubLists />} />
                        <Route path="club/:clubinfoid" element={<ClubDetails />} />
                        <Route path="clubListRegister" element={<ClubListRegister />} />
                    </Route>
                </Route>
            </Routes>

        </div>
    )
}

export default MainView
