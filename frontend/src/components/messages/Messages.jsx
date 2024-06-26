import React from 'react'
import Message from './Message'  
import userGetMessages from '../../Hooks/userGetMessages'

const Messages = () => {  
    const {loading ,messages} = userGetMessages()
    console.log("messages:=",messages)
    return (
        <div className='px-4 flex-1 overflow-auto'>
            <Message />
            <Message />
            <Message />
        </div>
    )
}

export default Messages