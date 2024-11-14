'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/images/svg/Logo.svg';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='max-w-[1800px] w-full mx-auto'>
      <div className='mt-4 mb-3 rounded-lg border-2 border-black'>
        <button className='w-full bg-[#FFDECC] text-sm lg:text-base py-2'>
          Admission is Open, Grab your seat now
        </button>
      </div>

      <div className='rounded-lg border-2 border-black flex items-center h-[80px] pr-4 lg:px-0 bg-white'>
        <div className='flex items-center justify-center w-full lg:max-w-[230px] bg-[#FF8D4D] h-full p-2'>
          <Image
            src={Logo}
            alt='logo'
            width={100}
            height={100}
            className='h-8 w-8'
          />
          <h2 className='ml-2 text-lg font-semibold'>Little Learners</h2>
        </div>

        <div className='hidden lg:block w-full max-w-[665px] border-black border-2 h-full' />

        <nav className='hidden lg:flex h-full'>
          <ul className='flex h-full'>
            {[
              { href: '/', label: 'Home', width: '122px' },
              { href: '/AboutUs', label: 'About Us', width: '150px' },
              { href: '/Academics', label: 'Academics', width: '166px' },
              { href: '/Admissions', label: 'Admissions', width: '168px' },
              { href: '/StudentLife', label: 'Student Life', width: '176px' },
              { href: '/Contact', label: 'Contact', width: '140px' },
            ].map((item, index) => (
              <motion.li
                key={index}
                className='h-full border-black border-2 flex justify-center items-center text-black'
                style={{
                  width: item.width,
                  backgroundColor:
                    pathname === item.href ? '#FFEFE5' : 'transparent',
                }}
                whileHover={{ scale: 1.1, backgroundColor: '#FFAE80' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href}>{item.label}</Link>
              </motion.li>
            ))}
          </ul>
        </nav>

        <div className='flex lg:hidden w-full justify-end'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='p-2 border-2 border-black rounded-md bg-[#FFEFE5]'
          >
            {menuOpen ? (
              <FaTimes className='h-6 w-6' />
            ) : (
              <FaBars className='h-6 w-6' />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className='lg:hidden mt-2'>
          <ul className='flex flex-col space-y-2'>
            {[
              { href: '/', label: 'Home' },
              { href: '/AboutUs', label: 'About Us' },
              { href: '/Academics', label: 'Academics' },
              { href: '/Admissions', label: 'Admissions' },
              { href: '/StudentLife', label: 'Student Life' },
              { href: '/Contact', label: 'Contact' },
            ].map((item, index) => (
              <motion.li
                key={index}
                className='h-full border-black border-2 flex justify-center items-center text-black'
                style={{
                  backgroundColor:
                    pathname === item.href ? '#FFEFE5' : 'transparent',
                }}
                whileHover={{ scale: 1.1, backgroundColor: '#FFAE80' }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className='w-full text-center'
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
