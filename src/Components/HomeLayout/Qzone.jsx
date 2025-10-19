import React from 'react';
import swimming from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playGround from "../../assets/playground.png"
import backGround from "../../assets/bg.png"

const Qzone = () => {
    return (
        <div>
            <div className='bg-gray-100 rounded-md p-2 mb-5'>
                <h2 className='font-bold p-3'>QZone</h2>
                <div className='flex flex-col'>
                    <img src={swimming} alt="" />
                    <img src={classImg} alt="" />
                    <img src={playGround} alt="" />
                </div>
            </div>
            <img className='w-full' src={backGround} alt="" />
        </div>
    );
};

export default Qzone;