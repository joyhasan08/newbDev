import React from 'react';

const StepsSection = () => {
    return (
        <div className='max-w-7xl mx-auto pl-12'>
            <section className="p-6  dark:text-gray-100 w-full rounded-lg my-4    ">
                <div className="container mx-auto">
                    <span className="block mb-2  font-medium tracki text-center uppercase text-[#F02F65]">How it works</span>
                    <h2 className="text-5xl font-bold text-center  text-black">No matter the project's complexity, we apply</h2>
                    <div className="grid gap-6 my-16 lg:grid-cols-3">
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-[#F02F68] dark:text-white">1</div>
                            <p className="text-2xl font-semibold">
                                <b>Nulla.</b>Nostrum, corrupti blanditiis. Illum, architecto?
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-[#F02F68] dark:text-white">2</div>
                            <p className="text-2xl font-semibold">
                                <b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor veniam alias debitis?
                            </p>
                        </div>
                        <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-900 ">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-[#F02F68] dark:text-white">3</div>
                            <p className="text-2xl font-semibold">
                                <b>Maxime.</b>Expedita temporibus culpa reprehenderit doloribus consectetur odio!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StepsSection;