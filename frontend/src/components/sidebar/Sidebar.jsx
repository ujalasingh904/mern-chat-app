import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'
import userConversation from '../../zustand/userConversation'

const Sidebar = () => {
  
  const { selectedConversation, setSelectedConversation } = userConversation(); 
  const notselected = selectedConversation === null;
  return (
    <div className={`border-r ${notselected? 'flex':"hidden"} md:min-w-[320px] lg:min-w-[400px] h-full  border-slate-500 p-4 sm:flex flex-col`}>
      <SearchInput />
      <div className='divider px-3'></div>
      <Conversations />
      <Logout /> 
    </div>
  )
}

export default Sidebar 