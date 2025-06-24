import React, { useState } from 'react'
import { useCursor } from './custom-cursor/cursorContext'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
    const { mouseEnter, mouseLeave } = useCursor()
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <header className='w-full absolute top-0 z-50 bg-white/70 '>
            {/* Top Bar */}
            <div className='border-b-2 border-gray-200 bg-gray-50/70 hidden md:flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-2 text-secondaryText tracking-[2px] font-extralight text-[12px]'>
                <div>
                    mon-sat | 10:00am-07:00pm
                </div>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-10 mt-1 md:mt-0'>
                    <div className='flex gap-2 items-center'>
                        <img src="/images/phone.png" alt="" className='w-[16px] md:w-[20px]' />
                        <span>9876543210</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <img src="/images/email.png" alt="" className='w-[16px] md:w-[20px]' />
                        <span>example@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* Logo + Navigation */}
            <div className='backdrop-blur-md text-xl container mx-auto flex justify-between items-center px-4 md:px-10 py-3 text-primaryText font-bold'>
                <div className="logo text-lg md:text-xl">
                    <span>LOGO</span>
                </div>

                {/* Mobile Menu Toggle */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden md:block'>
                    <ul className='flex space-x-10 lg:space-x-20'>
                        {['Home', 'Services', 'About', 'Contact'].map((item) => (
                            <li
                                key={item}
                                onMouseEnter={() => mouseEnter("button")}
                                onMouseLeave={() => mouseLeave("default")}
                                className='cursor-pointer transition hover:text-gray-500'
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className='md:hidden px-4 pb-4'>
                    <ul className='flex flex-col space-y-4 bg-white/80 backdrop-blur-md rounded-md p-4 shadow'>
                        {['Home', 'Services', 'About', 'Contact'].map((item) => (
                            <li
                                key={item}
                                onMouseEnter={() => mouseEnter("button")}
                                onMouseLeave={() => mouseLeave("default")}
                                className='cursor-pointer transition hover:text-gray-500'
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header
