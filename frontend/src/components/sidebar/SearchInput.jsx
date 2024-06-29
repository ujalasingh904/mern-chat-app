import { IoSearchSharp } from "react-icons/io5";
import userConversation from "../../zustand/userConversation";
import userGetConversation from "../../Hooks/userGetConversation";
import toast from "react-hot-toast";
import { useState } from "react";

const SearchInput = () => {

    const [search, setSearch] = useState("")
    const { setSelectedConversation } = userConversation()
    const { conversations } = userGetConversation()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search) return toast.error("please fill the input field");
        if (search.length < 3)
            return toast.error("Search must be at least 3 charaters long");

        const conversation = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()))

        if (conversation) {
            setSelectedConversation(conversation)
            setSearch("")

        } else
            toast.error("No user found")

    }

    return (
        <form className='flex items-center justify-between gap-2' onSubmit={handleSubmit}>
            <input type='text' placeholder='Search…' className='input input-bordered rounded-full'
                value={search} onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput 