import React from 'react'
import Message from './Message'
import userGetMessages from '../../Hooks/userGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import { useRef, useEffect } from 'react'
import userListenMessages from '../../Hooks/userListenMessages'

const Messages = () => {
    const { loading, messages } = userGetMessages()
    userListenMessages()
    const lastMessageRef = useRef()

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }, [messages])


    return (
        <div className='px-4 flex-1 overflow-auto'>
            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

            {!loading && messages.length === 0 && (
                <p className='text-center'>Send a message to start the conversation</p>

            )}

            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message.id} ref={lastMessageRef}>
                    <Message message={message} />
                </div>
            ))}

        </div>
    )
}

export default Messages