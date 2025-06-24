import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useCursor } from '../../components/custom-cursor/cursorContext.js'

function HeroSection() {
    const {mouseEnter, mouseLeave} = useCursor()
    const [typeEffect] = useTypewriter({
            words: ['Software', 'App', 'Website'],
            loop: {},
            typeSpeed: 120,
            deleteSpeed: 50
        })

    return (
        <div className='relative min-h-[70vh] lg:min-h-[100vh] h-fit grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b md:bg-gradient-to-r from-primary/40 to-transparent pt-10 md:pt-30 overflow-hidden'>
            <div className="animated-bg w-full h-full absolute top-0 left-0 z-10">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='z-20 flex flex-col justify-center items-center'>
                <div className='px-5 md:px-10 py-15 flex flex-col gap-5'>
                    <div className='text-base md:text-lg text-primaryText w-fit py-1 px-5 rounded-3xl bg-gray-100'>Welcome to <span className='text-secondaryText font-bold'>Company</span></div>
                    <div className='text-xl md:text-2xl lg:text-4xl font-bold text-primaryText'><span className='text-secondaryText tracking-wider capitalize'>{typeEffect}<Cursor /></span> Development</div>
                    <p className='text-base md:text-lg text-primaryText'>We've cultivated a dynamic space where creativity seamlessly intertwines with strategy and innovation.</p>
                    <button className='outline-none cursor-pointer py-2 md:py-3 px-4 md:px-6 w-fit rounded-lg bg-secondaryText text-white font-bold tracking-wide'>Get started</button>
                </div>
            </div>
            <div className='z-20 flex justify-center items-center'>
                <img src="/images/top-banner.png" alt="top-banner" className='min-w-[300px] md:min-w-[350px] w-[65%] md:w-[70%] drop-shadow-2xl' />
            </div>
        </div>
    )
}

export default HeroSection
