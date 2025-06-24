import React from 'react'


const Footer = () => {
    return (
        <div className="">
            <footer className=" bg-primaryBg w-full shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:justify-items-center">
                        <div className="flex  space-x-3">
                            <div className='flex justify-center m-auto items-center  ' >
                                <span className='font-bold text-3xl'>LOGO</span>
                                {/* <img className='h-[45px]' src="/images/logo.png" alt="logo" /> */}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-primaryText font-semibold mb-4">Call Us</h3>
                            <div className="space-y-3">
                                <a href="tel:+91 9351414903" className="flex items-center text-secondaryText hover:text-blue-600 transition-colors">
                                    +91 9876543210
                                </a>
                            </div>
                        </div>
                        <div className='md:text-center'>
                            <h3 className="text-primaryText font-semibold mb-4">Reach Us</h3>
                            <div className="flex items-start space-x-2 text-secondaryText">
                                <p>Company
                                    address</p>
                            </div>
                        </div>

                        <div className="space-y-3 font-semibold text-primaryText">
                            Follow Us
                            <div className="flex items-center">
                                <div className='flex items-center mt-3 gap-1 mb-4'>
                                    <a ><img className='h-[23px] mr-2' src="/images/facebook.png" alt="facebook" title='facebook-icon' /></a>

                                    <a ><img className='h-[23px] mr-2' src="/images/instagram.png" alt=" instagram-icon" title='youtube icon' /></a>
                                    <a ><img className='h-[23px] mr-2' src="/images/whatsapp.png" alt="instagramwhatsapp-icon" title='instagram icon' /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t-2 border-gray-300 ">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-primaryText text-[10px] md:text-sm font-bold">
                                Copyright © 2025 Company
                            </p>

                            <p className="text-primaryText text-[10px] md:text-sm mt-4 md:mt-0 font-bold">
                                Powered by MG
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
