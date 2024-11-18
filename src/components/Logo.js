import React from 'react'
import shopping from "../assest/shopping.gif"
const Logo = () => {
    return (
        <div className='container p-4 items-center  justify-between  w-full '>

            <div className='w-14 h-9 '>
                <img className='w-full' src={shopping} />

            </div>
            <div className='  items-center'>
                <p>JN STORE</p>
            </div>
        </div>


    )
}

export default Logo
