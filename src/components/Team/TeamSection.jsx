import React from 'react';
import Joy from './Joy';

const TeamSection = () => {
    return (
        <div >
            <span className="block mb-2  font-medium tracki text-center uppercase text-[#F02F65]">Meet Our Team</span>
            <div className=' flex flex-col flex-wrap justify-center items-center  lg:flex-row  gap-4 m-4 max-w-7xl mx-auto'>
                <Joy />
                <Joy />
                <Joy />
            </div>
        </div>
    );
};

export default TeamSection;