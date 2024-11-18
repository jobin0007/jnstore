import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <section id='login'>
      <div className='mx-auto container py-5   p-4'>
        <div className='bg-white W-full p-5 border  shadow-xl max-w-sm mx-auto '>
          <div className='w-20 h-20 mx-auto'>
            <img src={loginIcons} alt='login icons' />
          </div>
          <form className='pt-6'>
            <div className='grid'>
              <label>
                Email :
              </label>
              <div className='bg-slate-100 p-2 rounded-md'>
                <input type='email' placeholder='enter Email' className='w-full h-full outline-none bg-transparent ' />
              </div>
            </div>
            <div>
              <label>
                Password :
              </label>
              <div className='bg-slate-100 p-2 flex rounded-md'>
                <input type={showPassword ? "text" : "password"} placeholder='enter Password' className='w-full h-full outline-none  bg-transparent ' />
                <div className='cursor-pointer' onClick={() => setShowPassword((preve) => !preve)}>
                  <span>
                    {
                      showPassword ? (
                        <FaEyeSlash />
                      ) :
                        (
                          <FaEye />
                        )
                    }


                  </span>
                </div>
              </div>
              <Link to={'/forget-password'} className='w-fit ml-auto block hover:underline hover:text-cyan-500' >
              forget password ?
              </Link>
            </div>
            <button className='bg-cyan-500 text-white px-5 py-2 w-full max-w-[150px] rounded-md hover:scale-105 transition-all mx-auto block mt-4'>
              Login
            </button>
          </form>
          <p className='my-5'> 
            Don&#39;t have account ? <Link className='hover:text-cyan-500 hover:underline' to={'/register'}>
            Create New Account
          </Link> 
          </p> 
          
        </div>
      </div>
    </section>
  )
}

export default Login
