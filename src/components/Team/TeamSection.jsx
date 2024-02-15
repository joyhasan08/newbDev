import React from 'react';
import Joy from './Joy';

const TeamSection = () => {
    return (
        <div className=' flex flex-col flex-wrap justify-center items-center  lg:flex-row  gap-4 m-4 max-w-7xl mx-auto'>
            <Joy />
            <Joy />
            <Joy />
            <Joy />
        </div>
    );
};

export default TeamSection;