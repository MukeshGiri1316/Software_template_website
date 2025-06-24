import React from 'react'

function Services() {
    return (
        <div className='bg-primaryBg/50 py-15'>
            <div className='container'>
                <div className='flex flex-col justify-center items-center mb-10'>
                    <span className='text-lg text-secondaryText font-bold'>
                        <img src="/images/tag.png" alt="" className='w-[20px] inline' />
                        <span className='border border-gray-300 rounded-sm px-2 text-sm md:text-base'>Service</span>
                    </span>
                    <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-primaryText'>Services we're providing</h1>
                </div>

                {/* service cards start here */}
                <div className="cards grid grid-cols-1 md:grid-cols-2 w-full lg:w-[80%] mx-auto gap-8 md:gap-20">
                    <div className="group bg-primary/15 flex flex-col tracking-wider cursor-pointer">
                        <div className='overflow-hidden'>
                            <img src="/images/website.jpg" alt="" className='group-hover:scale-110 duration-300' />
                        </div>
                        <div className="flex mb-8">
                            <div className='px-2 md:px-5 py-10'>
                                <h3 className="text-lg md:text-xl font-semibold text-primaryText mb-3 capitalize">
                                    Website Devlopment
                                </h3>
                                <p className="text-secondaryText font-semibold text-sm md:text-base">
                                    We deliver rapid, effective solutions tailored to your business needs.
                                </p>
                            </div>
                        </div>
                        <button className='text-start text-sm md:text-lg px-4 py-4 text-white bg-primaryText cursor-pointer flex gap-5'>
                            <span>Learn more</span>
                            <img src="/images/arrow.png" alt="" className='group-hover:px-4 duration-300' />
                        </button>
                    </div>
                    <div className="group bg-primary/15 flex flex-col tracking-wider cursor-pointer">
                        <div className='overflow-hidden'>
                            <img src="/images/website.jpg" alt="" className='group-hover:scale-110 duration-300' />
                        </div>
                        <div className="flex mb-8">
                            <div className='px-2 md:px-5 py-10'>
                                <h3 className="text-lg md:text-xl font-semibold text-primaryText mb-3 capitalize">
                                    Website Devlopment
                                </h3>
                                <p className="text-secondaryText font-semibold text-sm md:text-base">
                                    We deliver rapid, effective solutions tailored to your business needs.
                                </p>
                            </div>
                        </div>
                        <button className='text-start text-sm md:text-lg px-4 py-4 text-white bg-primaryText cursor-pointer flex gap-5'>
                            <span>Learn more</span>
                            <img src="/images/arrow.png" alt="" className='group-hover:px-4 duration-300' />
                        </button>
                    </div>
                    <div className="group bg-primary/15 flex flex-col tracking-wider cursor-pointer">
                        <div className='overflow-hidden'>
                            <img src="/images/website.jpg" alt="" className='group-hover:scale-110 duration-300' />
                        </div>
                        <div className="flex mb-8">
                            <div className='px-2 md:px-5 py-10'>
                                <h3 className="text-lg md:text-xl font-semibold text-primaryText mb-3 capitalize">
                                    Website Devlopment
                                </h3>
                                <p className="text-secondaryText font-semibold text-sm md:text-base">
                                    We deliver rapid, effective solutions tailored to your business needs.
                                </p>
                            </div>
                        </div>
                        <button className='text-start text-sm md:text-lg px-4 py-4 text-white bg-primaryText cursor-pointer flex gap-5'>
                            <span>Learn more</span>
                            <img src="/images/arrow.png" alt="" className='group-hover:px-4 duration-300' />
                        </button>
                    </div>
                    <div className="group bg-primary/15 flex flex-col tracking-wider cursor-pointer">
                        <div className='overflow-hidden'>
                            <img src="/images/website.jpg" alt="" className='group-hover:scale-110 duration-300' />
                        </div>
                        <div className="flex mb-8">
                            <div className='px-2 md:px-5 py-10'>
                                <h3 className="text-lg md:text-xl font-semibold text-primaryText mb-3 capitalize">
                                    Website Devlopment
                                </h3>
                                <p className="text-secondaryText font-semibold text-sm md:text-base">
                                    We deliver rapid, effective solutions tailored to your business needs.
                                </p>
                            </div>
                        </div>
                        <button className='text-start text-sm md:text-lg px-4 py-4 text-white bg-primaryText cursor-pointer flex gap-5'>
                            <span>Learn more</span>
                            <img src="/images/arrow.png" alt="" className='group-hover:px-4 duration-300' />
                        </button>
                    </div>

                </div>
                {/* service cards end here */}
            </div>
        </div>
    )
}

export default Services
