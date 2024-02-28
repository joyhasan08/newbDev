import Image from 'next/image';
import React from 'react';

const Carousel = () => {
    return (
        <div className='m-4 rounded-lg '>
            <div className="carousel w-full rounded-lg ">
                <div id="slide1" className="carousel-item relative w-full h-[500px]">
                    <Image alt=''
                        src={'/banner/carousel 2.png'}
                        height={500}
                        width={1000}
                        className=' w-full  h-[500px] object-cover'

                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full   h-[500px]">
                    <Image alt='' src={'/banner/carousel 1.png'} height={500}
                        width={1000} className='w-full  h-[500px] object-cover' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full   h-[500px]">
                    <Image alt='' src={'/banner/carousel 3.png'} height={500}
                        width={1000} className='w-full  h-[500px] object-cover' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carousel;