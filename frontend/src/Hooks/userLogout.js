import { useAuthContext } from "../context/AuthContext"
import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast" 
import userConversation from "../zustand/userConversation"


const userLogout = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContext()
    const { setSelectedConversation } = userConversation()

    const logout = async () => {
        setLoading(true)
        try {
            const baseUrl = 'http://localhost:5000/api/auth/logout'
            const { data: res } = await axios.post(baseUrl)
            if (res.error)
                throw new Error(res.error)

            toast.success('Logged Out successfully')
            sessionStorage.removeItem('chat-user')
            setAuthUser(null)
            setSelectedConversation(null)

        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, logout }
}

export default userLogout