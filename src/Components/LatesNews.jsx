import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
    return (
        <div>
            <div className='flex items-center gap-5 bg-base-200 p-2 cursor-default'>
                <p className='text-white bg-secondary px-3 py-2 cursor-pointer'>Latest</p>
                <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laborum.</p>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laborum.</p>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, laborum.</p>
                </Marquee>
            </div>
        </div>
    );
};

export default LatesNews;