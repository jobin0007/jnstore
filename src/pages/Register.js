import React, { useState } from 'react'
import { MdOutlineAssignmentInd } from 'react-icons/md'
// import { registerAPI } from '../../services/userServices'

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile_number, setMobile_number] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])


  const handleSubmit = async (e) => {
    e.preventDefault()
    // const data = registerAPI()
  
  }



  return (
    <section id='register'>
      <div className='mx-auto  container items-center py-4 px-4 '>
        <div className='bg-white W-full p-5 border  shadow-xl max-w-sm mx-auto mb-3'>
          <div>
            < MdOutlineAssignmentInd className='h-20 w-20 mx-auto' />
          </div>
          <div className='h-10 w-20 mx-auto'>
            <h5 className='underline'>Registration</h5>
          </div>
          <form className='create' onSubmit={handleSubmit}>
            <div className='grid mb-3'>
              <div className='bg-slate-100 p-2 rounded-md'>
                <input type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder='Enter Your Name' className='w-full h-full outline-none bg-transparent ' />
              </div>
            </div>
            <div className='grid mb-3'>
              <div className='bg-slate-100 p-2 rounded-md'>
                <input type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} placeholder='Enter Your Email' className='w-full h-full outline-none bg-transparent ' />
              </div>
            </div>
            <div className='grid mb-3'>
              <div className='bg-slate-100 p-2 rounded-md'>
                <input
                  type='text'
                  onChange={(e) => setMobile_number(e.target.value)}
                  value={mobile_number} placeholder='Enter Your Mobile Number' className='w-full h-full outline-none bg-transparent ' />
              </div>
            </div>
            <div className='grid mb-3'>
              <div className='bg-slate-100 p-2 rounded-md'>
                <input type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password} placeholder='Enter Your Password' className='w-full h-full outline-none bg-transparent ' />
              </div>
            </div>
            <div className='grid mb-3'>
              <div className='bg-slate-100 p-2 rounded-md'>
                <input type='text' placeholder='Confirm Password' className='w-full h-full outline-none bg-transparent ' />
              </div>
            </div>
            <button className='bg-cyan-500 text-white px-5 py-2 w-full max-w-[150px] rounded-md hover:scale-105 transition-all mx-auto block mt-4'>
              Register
            </button>
          </form>
        </div>
      </div>
    </section>

  )
}


export default Register
