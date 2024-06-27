import { useState } from "react"
import toast from "react-hot-toast";
import axios from "axios"; 
import { useAuthContext } from "../context/AuthContext";

const userSignup = () => {
    const [loading, setLoading] = useState(false); 
    const { setAuthUser } = useAuthContext()

    const signup = async (formData) => {
        const success = handleInPutErrors({ fullname: formData.fullname, username: formData.username, email: formData.email, password: formData.password, confirmPassword: formData.confirmPassword, gender: formData.gender })

        if (!success) return;
        setLoading(true)

        try {
            const baseUrl = 'https://mern-chat-app-tvr8.onrender.com/api/auth/signup'
            const { data: res } = await axios.post(baseUrl, formData,{ withCredentials: true })

            if (res.error)
                throw new Error(res.error)
            console.log(res)
            toast.success('Account created successfully')

            sessionStorage.setItem("chat-user", JSON.stringify(res))
            setAuthUser(res)
 
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, signup };
}

export default userSignup

function handleInPutErrors({ fullname, username, email, password, confirmPassword, gender }) {
    // handle input errors here

    if (!fullname || !username || !email || !password || !confirmPassword || !gender) {
        toast.error("Please fill in all the fields")
        return false
    }

    if (password !== confirmPassword) {
        toast.error("password do not match")
        return false
    }

    if (password.length < 8) {
        toast.error("password must be at least 8 characters")
        return false
    }

    return true

}