import { useState } from "react"
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const userSignup = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const signup = async (formData) => {
        const success = handleInPutErrors({ fullname:formData.fullname, username:formData.username, email:formData.email, password:formData.password, confirmPassword:formData.confirmPassword, gender:formData.gender })

        if (!success) return;
        setLoading(true)

        try {
            const baseUrl = 'http://localhost:5000/api/auth/signup'
            const { data: res } = await axios.post(baseUrl, formData)
            
            if(res.error)
                throw new Error(res.error)
            console.log(res)
            navigate('/login')
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