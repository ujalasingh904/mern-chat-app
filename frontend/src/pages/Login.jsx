import { Link } from 'react-router-dom';
import { useState } from 'react';
import toast from "react-hot-toast"; 
import axios from "axios"
import { useAuthContext } from '../context/AuthContext';

const Login = () => {

    const [formData, setformData] = useState({})
    const { setAuthUser } = useAuthContext()

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.id]: e.target.value })
    }

    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const baseUrl = 'http://localhost:5000/api/auth/login'
            const { data: res } = await axios.post(baseUrl, formData)
            if (res.error)
                throw new Error(res.error)

            toast.success('Logged in  successfully')
            sessionStorage.setItem('chat-user', JSON.stringify(res))
            setAuthUser(res)

            console.log(res)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='flex flex-col items-center justify-center max-w-96 mx-auto '>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-white'>Email</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 label">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                            <input
                                id="email"
                                onChange={handleChange}
                                type="email"
                                className="grow"
                                placeholder="Enter your email"
                            />
                        </label>
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-white'>Password</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                            <input
                                id="password"
                                onChange={handleChange}
                                type="password"
                                className="grow"
                                placeholder='Enter your password'
                            />
                        </label>
                    </div>

                    <div className='py-[1rem]'>
                        <button className='btn !py-[1.4rem] !leading-[0rem] btn-block btn-sm mt-2 !text-[1rem]' >
                            Login
                        </button>
                    </div>

                    <span className='text-white'>don't have an account?
                        <Link to='/signup' className='text-sm ml-2 hover:underline hover:text-blue-600 mt-2  inline-block'>
                            Signup
                        </Link>
                    </span>
                </form>
            </div>
        </div>


    )
}

export default Login