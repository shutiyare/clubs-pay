import { createContext, useContext, useEffect, useState } from 'react'
import { BeatLoader } from 'react-spinners';
import LoginForm from '../Components/LoginForm/LoginForm';

const SecuritContext = createContext();


const SecurityProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const page = children;


    useEffect(() => {
        // TODO request user by using cookies token.
    }, [])

    if (loading) {
        return (
            <div className='w-[100%] bg-slate-100 h-screen flex justify-center items-center'>
                <BeatLoader loading color='rgb(59 130 246)' />
            </div>
        );
    }

    return <SecuritContext.Provider value={{ setUser, user, loading, setLoading }}>
        {!user ? <LoginForm /> : children}
    </SecuritContext.Provider>
}

export const useSecurity = () => {
    return useContext(SecuritContext)
}

export default SecurityProvider;