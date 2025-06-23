import React from 'react'
import { useCursor } from './custom-cursor/cursorContext'

function Header() {
    const {mouseEnter, mouseLeave} = useCursor()
    return (
        <header className='w-full absolute top-0 z-90'>
            <div className='border-b-2 border-gray-200 bg-gray-50/70 flex justify-between py-1 px-10 text-secondaryText tracking-[2px] font-extralight text-[12px]'>
                <div>
                    mon-sat | 10:00am-07:00pm
                </div>
                <div className='flex space-x-10'>
                    <div className='flex gap-2'>
                        <img src="/images/phone.png" alt="" className='w-[20px]' />
                        <span>9876543210</span>
                    </div>
                    <div className='flex gap-2'>
                        <img src="/images/email.png" alt="" className='w-[20px]' />
                        <span>example@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className='text-xl container flex justify-between items-center gap-10 py-2 rounded-xl text-primaryText font-bold'>
                <div className="logo">
                    <span>LOGO</span>
                    {/* <img src="/images/logo.png" alt="logo" className=''/> */}
                </div>
                <nav className="">
                    <ul className='flex space-x-20'>
                        <li onMouseEnter={()=>{mouseEnter("button")}} onMouseLeave={()=>{mouseLeave("default")}} className='cursor-pointer'>Home</li>
                        <li onMouseEnter={()=>{mouseEnter("button")}} onMouseLeave={()=>{mouseLeave("default")}} className='cursor-pointer'>Services</li>
                        <li onMouseEnter={()=>{mouseEnter("button")}} onMouseLeave={()=>{mouseLeave("default")}} className='cursor-pointer'>About</li>
                        <li onMouseEnter={()=>{mouseEnter("button")}} onMouseLeave={()=>{mouseLeave("default")}} className='cursor-pointer'>Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
