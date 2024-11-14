'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from '../../assets/images/svg/Logo.svg';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='max-w-[1800px] w-full mx-auto px-6 py-10 border-t border-black'>
      <div className='flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0'>
        <div className='space-y-4 lg:w-1/3 max-w-[519px] w-full pr-9'>
          <div className='flex items-center space-x-2'>
            <div className='p-2 bg-black text-white rounded-full'>
              <Image
                src={Logo}
                alt='logo'
                width={100}
                height={100}
                className='h-8 w-8'
              />
            </div>
            <h2 className='text-lg font-bold'>Little Learners</h2>
          </div>
          <p className='text-gray-700 text-center lg:text-left'>
            We believe in the power of play to foster creativity,
            problem-solving skills, and imagination.
          </p>

          <div className='space-y-3'>
            <div className='flex items-center space-x-2'>
              <FaEnvelope className='border border-black p-1 rounded-md w-[40px] h-[40px]' />
              <span>hello@littlelearners.com</span>
            </div>
            <div className='flex items-center space-x-2'>
              <FaPhoneAlt className='border border-black p-1 rounded-md w-[40px] h-[40px]' />
              <span>+91 91813 23 2309</span>
            </div>
            <div className='flex items-center space-x-2'>
              <FaMapMarkerAlt className='border border-black p-1 rounded-md w-[40px] h-[40px]' />
              <span>Somewhere in the World</span>
            </div>
          </div>
        </div>

        <div className='flex flex-wrap justify-between w-full lg:w-2/3 space-y-4 lg:space-y-0'>
          <div className='w-1/2 md:w-auto'>
            <h3 className='font-bold mb-2'>Home</h3>
            <ul className='space-y-1'>
              <li>
                <Link href='#'>Features</Link>
              </li>
              <li>
                <Link href='#'>Our Testimonials</Link>
              </li>
              <li>
                <Link href='#'>FAQ</Link>
              </li>
            </ul>
          </div>
          <div className='w-1/2 md:w-auto'>
            <h3 className='font-bold mb-2'>About Us</h3>
            <ul className='space-y-1'>
              <li>
                <Link href='#'>Our Mission</Link>
              </li>
              <li>
                <Link href='#'>Our Vision</Link>
              </li>
              <li>
                <Link href='#'>Awards and Recognitions</Link>
              </li>
              <li>
                <Link href='#'>History</Link>
              </li>
              <li>
                <Link href='#'>Teachers</Link>
              </li>
            </ul>
          </div>
          <div className='w-1/2 md:w-auto'>
            <h3 className='font-bold mb-2'>Academics</h3>
            <ul className='space-y-1'>
              <li>
                <Link href='#'>Special Features</Link>
              </li>
              <li>
                <Link href='#'>Gallery</Link>
              </li>
            </ul>
          </div>
          <div className='w-1/2 md:w-auto'>
            <h3 className='font-bold mb-2'>Contact Us</h3>
            <ul className='space-y-1'>
              <li>
                <Link href='#'>Information</Link>
              </li>
              <li>
                <Link href='#'>Map & Direction</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='mt-8 border-t border-b border-black pt-6'>
        <div className='flex mb-8 flex-col lg:flex-row lg:justify-between items-center space-y-4 lg:space-y-0'>
          <div className='flex space-x-4'>
            <Link href='#'>Terms of Service</Link>
            <span>|</span>
            <Link href='#'>Privacy Policy</Link>
            <span>|</span>
            <Link href='#'>Cookie Policy</Link>
          </div>

          <div className='flex space-x-4'>
            {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, index) => (
              <motion.a
                key={index}
                href='#'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className='p-2 border border-black rounded-md bg-[#FFEFE5] text-black'
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className='text-center text-gray-600 mt-4'>
        Copyright © 2024 Little Learners Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
