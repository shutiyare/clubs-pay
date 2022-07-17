import React, { createContext, useContext, useState } from 'react'
import apiRequest from './api-request'

const Context = createContext()

function ContextAPI({ children }) {
    // Global States
    const [loading, setLoading] = useState(false)
    const [eventRegisterTitle, setEventRegisterTitle] = useState('Event Registration Form')
    const [eventRegisterObject, setEventRegisterObject] = useState({})
    const [openPopUpForm, setOpenPopUpForm] = useState(false)
    const [register, setRegister] = useState({ title: '', description: 'description....', media: '../img/Sports_Img/empty.png' })
    const [visible, setVisible] = useState(false)
    // EVENTS DATA IN EVENTS PAGE
    const [eventData, setEventData] = useState([])
    // SUMMARY DATA IN HOME PAGE
    const [summary, setSummary] = useState({ events: 0, clubs: 0, students: 0, totalPayment: 0 })
    // LINE CHART DATA
    const [clubsRegistrationPerYear, setClubsRegistrationPerYear] = useState([0])
    // PIE CHART DATA
    const [clubRegistaring, setClubRegistaring] = useState([0])
    //  CLUBS DATA IN CLUBS PAGE
    const [clubsData, setClubsData] = useState([])
    const [clubLisData, setClubLisData] = useState()

    // GET DATA METHOD
    const getData = async (endPoint = '', setResponce = () => { }) => {
        const response = await apiRequest.get(`${endPoint}`)
            .catch(error => console.log('error ayaa dhacay', error))
        if (response) {
            setResponce(response.data)
            setLoading(true)
        }
    }
    // POST DATA METHOD
    const post = async (endPoint, newData, oldData, setdata = () => { }) => {
        const response = await apiRequest.post(`${endPoint}`, newData)
        const { data } = response
        setdata({ ...oldData, data })
    }

    console.log('clubLisData', clubLisData);

    const putEvent = async (event = {}, eventId) => {
        const response = await apiRequest.put(`/events/${eventId}`, event)
        const { id } = response.data
        setEventData(eventData.map(event => {
            return id === eventId ? { ...response.data } : event
        }))
    }

    const deleteEvent = async (Id) => {
        await apiRequest.delete(`/events/${Id}`)
        const newEventData = eventData.filter(event => event.id !== Id)
        setEventData(newEventData)
    }

    const putClub = async (club = {}, clubId) => {
        const response = await apiRequest.put(`/clubs/${clubId}`, club)
        const { id } = response.data
        setClubsData(clubsData.map(club => {
            return id === clubId ? { ...response.data } : club
        }))
    }

    const deleteMainClub = async (Id) => {
        await apiRequest.delete(`/clubs/${Id}`)
        const newClubsData = clubsData.filter(club => club.id !== Id)
        setClubsData(newClubsData)
    }

    return (
        <Context.Provider
            value={{
                loading, setLoading,
                eventData, setEventData,
                eventRegisterTitle, setEventRegisterTitle,
                eventRegisterObject, setEventRegisterObject,
                summary, setSummary,
                clubsRegistrationPerYear, setClubsRegistrationPerYear,
                clubRegistaring, setClubRegistaring,
                openPopUpForm, setOpenPopUpForm,
                register, setRegister,
                visible, setVisible,
                post, putEvent, deleteEvent, putClub,
                clubsData, setClubsData,
                getData, deleteMainClub,
                clubLisData, setClubLisData
            }}
        >
            { children}
        </Context.Provider >
    )
}

export const useCustomHook = () => useContext(Context);

export default ContextAPI

// const postEvent = async (event = {}) => {
//     const response = await apiRequest.post('/events', event)
//     setEventData({ ...eventData, response })
// }