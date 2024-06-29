import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import userConversation from '../../zustand/userConversation';
import { useAuthContext } from '../../context/AuthContext';

const MessageContainer = () => {

  const { selectedConversation, setSelectedConversation } = userConversation();
  const notselected = selectedConversation === null;
  const { authUser } = useAuthContext()
  return (
    <div className={`min-w-[300px] max-w-[300px] md:min-w-[450px]  md:max-w-[450px] ${notselected ? 'hidden' : "flex"} w-full h-full sm:!flex flex-col`}>
      {
        !selectedConversation ? (<NoChatSelected authUser={authUser} />) : (
          <>

            {/* header  */}
            <div className='bg-slate-500 px-4 py-2 mb-2 space-x-1 flex items-center justify-between'>
              <div>
                <span className='label-text text-lg'>To:</span>
                <span className='text-gray-900 font-bold ml-1'>{selectedConversation.fullname}</span>
              </div>

              <span className='flex sm:hidden text-sm justify-center items-center p-2 rounded-full bg-white text-black font-bold hover:cursor-pointer  hover:bg-sky-500 hover:text-white transition-all  
              ease-in'
                onClick={() => setSelectedConversation(null)}
              >Go back</span>
            </div>

            <Messages />
            <MessageInput />

          </>)
      }

    </div>
  )
}

export default MessageContainer;

const NoChatSelected = ({ authUser }) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome 👋 {authUser?.fullname} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  ); z
};