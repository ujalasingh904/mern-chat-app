import { useState } from "react"
import toast from "react-hot-toast";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

const userLogin = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const login = async (formData) => {

        const success = handleInPutErrors({ email: formData.email, password: formData.password })

        if (!success) return;
        setLoading(true)
        try {

            const baseUrl = 'https://mern-chat-app-tvr8.onrender.com/api/auth/login'
            const { data: res } = await axios.post(baseUrl, formData,{ withCredentials: true })
            if (res.error)
                throw new Error(res.error)

            toast.success('Logged in  successfully')
            sessionStorage.setItem('chat-user', JSON.stringify(res))
            setAuthUser(res)
 

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }

    }

    return {loading , login}

}

export default userLogin

function handleInPutErrors({ email, password }) {
    // handle input errors here

    if (!email || !password) {
        toast.error("Please fill in all the fields")
        return false
    }


    if (password.length < 8) {
        toast.error("password must be at least 8 characters")
        return false
    }

    return true

}