import BannerAbout from '@/components/Banner/BannerAbout';
import BreadCrumbeAbout from '@/components/Breadcrumb/BreadCrumbeAbout';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>

            <BreadCrumbeAbout />
            <BannerAbout />
        </div>
    );
};

export default AboutPage;