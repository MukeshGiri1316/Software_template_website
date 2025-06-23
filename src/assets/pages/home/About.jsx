import React from 'react'
const homesecondary = () => {
    return (
        <div id='about' className="container py-15">
            <div className="grid grid-cols-2 gap-10">
                {/* Left Section - Images */}
                <div className="relative">
                    <div className='rounded-full text-sm w-[120px] h-[120px] absolute top-0 right-0 bg-secondary p-8 font-semibold tracking-[2px] z-40 text-center text-white animated-float'>
                        Serving since 2010
                    </div>
                    <div className='absolute h-[60%] w-[75%] bg-primary/20 top-[25%] right-[10%] -rotate-z-45 z-10'></div>
                    <div className="relative rounded-lg h-full w-[80%] z-20">
                        <img
                            src="/images/about.png"
                            alt="about"
                            className="w-full h-full rounded-lg object-cover"
                        />
                    </div>
                </div>

                {/* Right Section - Content */}
                <div className="mt-5 sm:mt-16 md:mt-0">
                    <span className='text-lg text-secondaryText font-bold'>
                        <img src="/images/tag.png" alt="" className='w-[20px] inline' />
                        <span className='border border-gray-300 rounded-sm px-2'>About</span>
                    </span>
                    <h2 className="text-4xl font-bold text-primaryText mb-6 capitalize">
                        Our way to succesful <span className='border-b-4 border-b-yellow-400'>future</span>
                    </h2>
                    <div className="space-y-8 text-primaryText tracking-wider leading-8 text-lg">
                        <p>
                            <span className='font-bold'>Company</span>, founded in the Year <span className='italic'>2010</span> is a leading IT company that provides software development and outsourcing services. We are a dependable organization that supports its customers with maximum efforts and makes offshore development easy and reliable. We bring exceptional value to our clients through the Best cost of Software Development services, outstanding quality, reliability, and customer service.
                        </p>
                        <div className='flex gap-5 justify-center items-center w-fit'>
                            <img src="/images/profile.png" alt="" className='w-[40px]' />
                            <span className='text-lg text-secondaryText font-bold tracking-wider'>Founder</span>
                        </div>
                        <button className="group text-sm sm:text-lg font-semibold mt-4 border border-secondary hover:bg-secondary hover:text-white cursor-pointer text-black px-6 py-2 rounded-lg transition duration-300 tracking-wider flex justify-center items-center gap-4">
                            <span>Know More</span>
                            <span className='rounded-full p-2 group-hover:bg-white group-hover:translate-x-2 duration-200'>
                                <img src="/images/arrow.png" alt="" />
                            </span>
                        </button>
                    </div>
                </div>

                {/* numbers */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 col-span-2">
                    <div className="flex flex-col items-center px-2 md:px-5 lg:px-8 py-8 md:py-10 lg:py-15 capitalize">
                        <div className="relative text-lg md:text-xl lg:text-3xl font-bold text-primaryText before:w-[80px] before:h-[80px] before:bg-secondary/20 before:absolute before:top-0 before:left-0 before:rounded-full">15+</div>
                        <span className="mt-2 text-sm sm:text-base lg:text-xl font-semibold text-secondaryText">Years Experience</span>
                    </div>
                    <div className="flex flex-col items-center px-2 md:px-5 lg:px-8 py-8 md:py-10 lg:py-15 capitalize">
                        <span className="relative text-lg md:text-xl lg:text-3xl font-bold text-primaryText before:w-[80px] before:h-[80px] before:bg-secondary/20 before:absolute before:top-0 before:left-0 before:rounded-full">20k+</span>
                        <span className="mt-2 text-sm sm:text-base lg:text-xl font-semibold text-primary">Happy Clients</span>
                    </div>
                    <div className="flex flex-col items-center px-2 md:px-5 lg:px-8 py-8 md:py-10 lg:py-15 capitalize">
                        <span className="relative text-lg md:text-xl lg:text-3xl font-bold text-primaryText before:w-[80px] before:h-[80px] before:bg-secondary/20 before:absolute before:top-0 before:left-0 before:rounded-full">15+</span>
                        <span className="mt-2 text-sm sm:text-base lg:text-xl font-semibold text-primary">Awards Wins</span>
                    </div>
                    <div className="flex flex-col items-center md:px-5 lg:px-8 py-8 md:py-10 lg:py-15 capitalize">
                        <span className="relative text-lg md:text-xl lg:text-3xl font-bold text-primaryText before:w-[80px] before:h-[80px] before:bg-secondary/20 before:absolute before:top-0 before:left-0 before:rounded-full">4.5</span>
                        <span className="mt-2 text-sm sm:text-base lg:text-xl font-semibold text-primary">Client Rating</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default homesecondary