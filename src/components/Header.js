import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <header className='h-30 shadow-xl bg-white'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div className=' '>
                    <Link to={"/"}>
                        <Logo w={90} h={70} />
                    </Link>
                </div>

                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border border-cyan-500 rounded-full pl-5     '>
                    <input type='text ' placeholder='search product here .....' className='w-full outline-none '></input>
                    <div className='text-lg w-13 bg-cyan-600 min-w-[50px] h-8 flex items-center justify-center rounded-r-full text-white'>
                        <GrSearch />
                    </div>
                </div>

                <div className='flex items-center justify-between gap-7'>
                    <div className='text-4xl cursor-pointer'>
                        <FaRegUserCircle />

                    </div>
                    <div className='text-4xl cursor-pointer relative'>
                        <span>   <FaCartShopping /></span>
                        <div className='bg-cyan-500 w-5 h-5 text-white rounded-full flex items-center absolute justify-center -top-2 -right-3'>
                            <p className='text-sm'>
                                0
                            </p>
                        </div>
                    </div>
                    <div>
                        < Link to={'/login'} className='px-3 py-1 text-white bg-cyan-500 border rounded-full hover:bg-white hover:border hover:border-black hover:text-black'>Login</Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
