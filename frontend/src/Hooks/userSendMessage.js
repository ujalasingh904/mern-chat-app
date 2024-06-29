import { useState } from "react"
import userConversation from "../zustand/userConversation"
import axios from "axios"
import toast from "react-hot-toast"


const userSendMessage = () => {

    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = userConversation() 
    // console.log(messages)

    const sendMessage = async (message) => {
        setLoading(true)
        try {
            const baseUrl = `http://localhost:5000/api/messages/send/${selectedConversation._id}`

            const { data: res } = await axios.post(baseUrl, {message}, { withCredentials: true })
            if (res.error)
                throw new Error(res.error)

            setMessages([...messages, res])
        } catch (error) {
            toast.error(error.message)

        } finally {
            setLoading(false)
        }
    }

    return { loading, sendMessage }

}

export default userSendMessage