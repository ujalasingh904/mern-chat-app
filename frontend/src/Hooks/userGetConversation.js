import axios from "axios"
import toast from "react-hot-toast";
import { useState, useEffect } from "react"
import { useAuthContext } from "../context/AuthContext";

const userGetConversation = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])
    const { authUser } = useAuthContext()

    useEffect(() => {
        const getConversation = async () => {
            setLoading(true)
            try {
                const baseUrl = `http://localhost:5000/api/users/${authUser._id}`
                const { data: res } = await axios.get(baseUrl)
                if (res.error)   
                    throw new Error(res.error)

                setConversations(res)  
            } catch (error) { 
                toast.error(error.message)
            } finally {
                setLoading(false)
            }

        }
        getConversation()
    }, [])

    return { loading, conversations }
}

export default userGetConversation