import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
    FaDribbble
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] z-10'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est laudantium, vitae!
                Ducimus eos expedita, iure neque quam quibusdam ratione ullam.</p>
            <div className='flex justify-between md:[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbble size={30}/>
            </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6 md:m-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="">Analytics</a></li>
                        <li className='py-2 text-sm'><a href="">Marketing</a></li>
                        <li className='py-2 text-sm'><a href="">Commerce</a></li>
                        <li className='py-2 text-sm'><a href="">Insights</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="">Analytics</a></li>
                        <li className='py-2 text-sm'><a href="">Marketing</a></li>
                        <li className='py-2 text-sm'><a href="">Commerce</a></li>
                        <li className='py-2 text-sm'><a href="">Insights</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="">Analytics</a></li>
                        <li className='py-2 text-sm'><a href="">Marketing</a></li>
                        <li className='py-2 text-sm'><a href="">Commerce</a></li>
                        <li className='py-2 text-sm'><a href="">Insights</a></li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'><a href="">Analytics</a></li>
                        <li className='py-2 text-sm'><a href="">Marketing</a></li>
                        <li className='py-2 text-sm'><a href="">Commerce</a></li>
                        <li className='py-2 text-sm'><a href="">Insights</a></li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Footer;
