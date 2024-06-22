import { Link } from "react-router-dom";
import GenderCheckBox from "../components/GenderCheckBox.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import userSignup from "../Hooks/userSignup.js";

const Singup = () => {

  const [formData, setformData] = useState({})
  const navigate = useNavigate();

  const { loading, signup } = userSignup()

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value })
  }
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(formData)

  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          Sign Up <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label- text-white'>Full Name</span>
            </label>
            <input
              id="fullname"
              onChange={handleChange}
              type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input
              id="username"
              onChange={handleChange}
              type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2 '>
              <span className='text-base label-text text-white'>Email</span>
            </label>
            <input
              id="email"
              onChange={handleChange}
              type='email' placeholder='johndoe@gmail.com' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input
              id="password"
              onChange={handleChange}
              type='password'
              placeholder='Enter Password'
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-white'>Confirm Password</span>
            </label>
            <input
              id="confirmPassword"
              onChange={handleChange}
              type='password'
              placeholder='Confirm Password'
              className='w-full input input-bordered h-10'
            />
          </div>

          <GenderCheckBox formData={formData} setformData={setformData} />


          <div className='py-[1rem]'>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
          </div>

          <span className="text-white">Already have an account?
            <Link to='/login' className='text-sm ml-2 hover:underline hover:text-blue-600 mt-2 inline-block'>
              login
            </Link>
          </span>

        </form>
      </div>
    </div>
  );
}

export default Singup