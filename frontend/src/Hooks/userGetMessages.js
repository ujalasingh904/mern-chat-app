import { useState, useEffect } from "react"
import userConversation from "../zustand/userConversation"
import axios from "axios"
import toast from "react-hot-toast"

const userGetMessages = () => {

    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = userConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {

                const baseUrl = `http://localhost:5000/api/messages/${selectedConversation._id}`

                const { data: res } = await axios.get(baseUrl)

                if (res.error) throw new Error(res.error);
                
                setMessages(res);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages]);

    return { messages, loading };
}

export default userGetMessages