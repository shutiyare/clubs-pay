import apiRequest from '../api-request'
import { useCustomHook } from '../ContextAPI';

import React from 'react'

function Utilities() {
    const { eventData, setEventData } = useCustomHook();
    const getDataFromTheServer = async () => {
        const response = await apiRequest.get('/Events')
            .catch(error => console.log('error', error))
        console.log(response.data);
        if (response)
            setEventData(response.data)
    }
    return (
        <div>

        </div>
    )
}



export default Utilities
