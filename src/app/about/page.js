import BannerAbout from '@/components/Banner/BannerAbout';
import BreadCrumbeAbout from '@/components/Breadcrumb/BreadCrumbeAbout';
import AboutTeam from '@/components/Team/AboutTeam';
import React from 'react';

const AboutPage = () => {
    return (
        <div className='max-w-7xl mx-auto'>

            <BreadCrumbeAbout />
            <BannerAbout />
            <AboutTeam />
            <div>
                <p>
                    This section IS under Development.

                </p>
                <p>Tempor dolor incididunt anim pariatur pariatur Lorem commodo veniam sunt tempor dolore excepteur fugiat. Consequat incididunt ea adipisicing commodo pariatur tempor excepteur ad minim est nisi laboris voluptate id. Velit id deserunt ad proident minim laboris eu fugiat proident laborum eiusmod. Adipisicing labore incididunt sit ullamco ipsum in nulla consequat. Culpa tempor do ullamco ex officia elit qui eu esse tempor anim sit.</p>
            </div>
        </div>
    );
};

export default AboutPage;