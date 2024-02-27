import Image from 'next/image';
import React from 'react';

const Business = () => {
    return (
        <div className='p-4'>
            <span className="block mb-4  font-medium  text-center uppercase text-[#F02F65]">Our Goals</span>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto '>
                <div className='flex justify-center items-center'>
                    <Image
                        alt=''
                        src={"/banner/banner pic cafe.png"}
                        height={500}
                        width={500}
                        className='w-full h-[500] rounded-lg'
                    />
                </div>
                <div className=' space-y-14' >
                    <div className='space-y-5'>
                        <h1 className='text-4xl font-semibold max-w-96'>
                            Reach Your Business Goals
                            With Our Services
                        </h1>
                        <p className='text-lg font-light max-w-96'>
                            Seasoned tech experts providing reliable software development services to match specified requirements, budgets and timeframes.
                        </p>
                    </div>

                    <div className='space-y-4'>
                        <h1 className='text-4xl font-semibold max-w-96'>
                            Full-Service
                            Software
                            Development
                        </h1>
                        <h1>
                            Focused On Your Business Success
                        </h1>
                        <p className='text-lg font-light max-w-96'>
                            Our expert developers can turn your innovative ideas into exceptional digital solutions.
                        </p>
                        <button className='btn bg-[#F3326A] text-white ' >Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Business;