import React, { useEffect, useState } from 'react'

function Evolution() {
    const [formData, setFormData] = useState({
        from: '',
        fullName: '',
        number: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='container py-15'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='px-0 lg:px-10 py-5 md:py-10 flex flex-col gap-8 tracking-wider'>
                    <div className='capitalize relative'>
                        <img src="/images/pointer.png" alt="" className='absolute w-[80px] xl:w-[90px] top-[60%] xl:top-[15%] right-[1%] xl:right-[5%] rotate-z-60 hidden md:block' />
                        <span className='text-lg text-secondaryText font-bold'>
                            <img src="/images/tag.png" alt="" className='w-[20px] inline' />
                            <span className='border border-gray-300 rounded-sm px-2 text-sm md:text-base'>Contact</span>
                        </span>
                        <h1 className='text-xl md:text-3xl lg:text-4xl font-semibold text-primaryText mt-2'>Feel free to get in touch</h1>
                    </div>
                    <p className='text-secondaryText text-sm md:text-base lg:text-lg font-extralight'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus velit illum eum exercitationem magnam? At delectus suscipit velit asperiores rem dolore harum architecto omnis quam iusto nesciunt, iste consectetur odio!
                    </p>
                    <div className='flex gap-5'>
                        <img src="/images/instagram.png" alt="" className='w-[30px]' />
                        <img src="/images/whatsapp.png" alt="" className='w-[30px]' />
                        <img src="/images/facebook.png" alt="" className='w-[30px]' />
                    </div>
                    <div className='flex flex-col space-y-5 text-[11px] sm:text-sm md:text-base'>
                        <div className='min-w-[200px] md:min-w-[300px] w-[50%] py-2 px-4 flex justify-start space-x-4 items-center bg-gray-200 text-slate-800 rounded-lg'>
                            <span>Call us now: </span>
                            <span>
                                9876543210
                            </span>
                        </div>
                        <div className='min-w-[200px] md:min-w-[300px] w-[50%] py-2 px-4 flex justify-start space-x-4 items-center bg-gray-200 text-slate-800 rounded-lg'>
                            <span>Send mail on: </span>
                            <span>
                                example.com
                            </span>
                        </div>
                    </div>
                </div>

                <div className='py-5 md:py-8'>
                    <form className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 md:px-8 lg:px-10 py-10 bg-gradient-to-tr from-primary/80 to-secondary/80 rounded-lg border-2 border-gray-400 text-sm lg:text-base'>
                        <input onChange={handleChange} type="text" placeholder='Full Name' name='fullName' className='bg-white px-4 py-2 outline-none text-black' required />
                        <input onChange={handleChange} type="email" placeholder='Email' name='from' className='bg-white px-4 py-2 outline-none text-black' required />
                        <input onChange={handleChange} type="number" placeholder='Phone number' name='number' className='bg-white px-4 py-2 outline-none text-black' required />
                        <select onChange={handleChange} name='service' className='bg-white px-4 py-2 text-black outline-none cursor-pointer' defaultValue='Choose'>
                            <option value="Choose">Choose an option</option>
                            <option value="IT consulting">IT consulting</option>
                            <option value="Digital marketing">Digital marketing</option>
                            <option value="Finance">Finance</option>
                            <option value="Software development">Software development</option>
                        </select>
                        <textarea onChange={handleChange} rows='10' name='message' placeholder='Write something...' className='md:h-auto col-span-1 lg:col-span-2 bg-white px-4 py-2 outline-none text-black'></textarea>
                        <div className='flex space-x-5'>
                            <button type='submit' className='w-fit border duration-200 cursor-pointer hover:bg-gray-800 hover:text-white py-2 px-6 md:px-8 text-primaryText text-[10px] sm:text-sm md:text-lg rounded-xl mt-5 font-semibold tracking-wider'>Submit</button>
                            <button type='reset' className='w-fit border duration-200 cursor-pointer hover:bg-gray-800 hover:text-white py-2 px-6 md:px-8 text-primaryText text-[10px] sm:text-sm md:text-lg rounded-xl mt-5 font-semibold tracking-wider'>reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Evolution
