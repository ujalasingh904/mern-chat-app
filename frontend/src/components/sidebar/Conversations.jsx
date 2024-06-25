import React from 'react'
import Conversation from './Conversation'
import userGetConversation from '../../Hooks/userGetConversation'

const Conversations = () => {

    const { loading, conversations } = userGetConversation()
    console.log(conversations)
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />

        </div>
    )
}

export default Conversations