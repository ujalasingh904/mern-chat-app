import { useSocketContext } from "../context/SocketContext"
import userConversation from "../zustand/userConversation"
import { useEffect } from "react"
import notificationSound from "../sounds/notification.mp3"


const userListenMessages = () => {
    const { socket } = useSocketContext()
    const { messages, setMessages } = userConversation()

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true
            const sound = new Audio(notificationSound)
            sound.play()
            setMessages([...messages, newMessage]);
        })

        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages])


}

export default userListenMessages 