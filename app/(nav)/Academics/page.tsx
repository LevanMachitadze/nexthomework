'use client';
import { useState } from 'react';
import Image from 'next/image';
import book from '../../assets/images/svg/book.svg';
import stat from '../../assets/images/svg/stat.svg';
import puzzle from '../../assets/images/svg/puzzle.svg';
import pencil from '../../assets/images/svg/pencil.svg';
import sun from '../../assets/images/svg/sun.svg';
import star from '../../assets/images/svg/star.svg';
import language from '../../assets/images/png/language.png';
import math from '../../assets/images/png/mathematics.png';
import science from '../../assets/images/png/science.png';
import social from '../../assets/images/png/social.png';
import art from '../../assets/images/png/art.png';
import physical from '../../assets/images/png/physical.png';
import classroom from '../../assets/images/png/classroom.png';
import library from '../../assets/images/png/library.png';
import scienceLab from '../../assets/images/png/scienceLab.png';
import computerLab from '../../assets/images/png/computerLab.png';
import garden from '../../assets/images/png/garden.png';

type SubjectsType = {
  id: number;
  title: string;
  description: string;
  image: any;
  alt: string;
};

type GalleryType = {
  category: string;
  image: any;
  title: string;
  description: string;
};

const subjects: SubjectsType[] = [
  {
    id: 1,
    title: 'Language Arts',
    description: 'Reading, writing, storytelling, and communication skills.',
    image: language,
    alt: 'Language Arts',
  },
  {
    id: 2,
    title: 'Mathematics',
    description: 'Number sense, basic operations, problem-solving, and logic.',
    image: math,
    alt: 'Mathematics',
  },
  {
    id: 3,
    title: 'Science',
    description: 'Exploring the natural world through hands-on experiments.',
    image: science,
    alt: 'Science',
  },
  {
    id: 4,
    title: 'Social Studies',
    description: 'Cultivating an understanding of diverse cultures.',
    image: social,
    alt: 'Social Studies',
  },
  {
    id: 5,
    title: 'Arts and Crafts',
    description: 'Encouraging creativity through various art forms.',
    image: art,
    alt: 'Arts and Crafts',
  },
  {
    id: 6,
    title: 'Physical Education',
    description: 'Promoting physical fitness, coordination, and teamwork.',
    image: physical,
    alt: 'Physical Education',
  },
];

const galleryItems: GalleryType[] = [
  {
    category: 'Classrooms',
    image: classroom,
    title: 'Modern Classroom',
    description:
      'Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.',
  },
  {
    category: 'Library',
    image: library,
    title: 'School Library',
    description:
      'Our expansive library is a treasure trove of books, fostering a love for reading and supporting students literacy development.',
  },
  {
    category: 'Science Lab',
    image: scienceLab,
    title: 'Hands-on Science Lab',
    description:
      'Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.',
  },
  {
    category: 'Computer Lab',
    image: computerLab,
    title: 'Tech Savvy Lab',
    description:
      'Equipped with age-appropriate technology, the computer lab enhances students digital literacy and computational skills',
  },
  {
    category: 'Garden and Nature Area',
    image: garden,
    title: 'Outdoor Exploration',
    description:
      'Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.',
  },
];

export default function Academics() {
  const [filteredCategory, setFilteredCategory] = useState<string>('All');

  const filteredItems =
    filteredCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === filteredCategory);

  return (
    <>
      <section className=' max-w-[90%] w-full m-auto'>
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
          <div className='w-full max-w-4xl px-4 py-8 mx-auto bg-white border border-black rounded-lg shadow-lg'>
            <div className='flex flex-col items-center md:flex-row'>
              <div className='flex-1'>
                <div className='flex items-center mb-4'>
                  <button className='ml-4 px-3 py-1 border border-black rounded'>
                    Academics
                  </button>
                </div>

                <h1 className='text-4xl font-bold'>
                  Nurturing Young Minds for Success{' '}
                </h1>
              </div>

              <div className='flex-1 mt-8 md:mt-0 md:ml-8'>
                <p className='text-lg'>
                  Welcome to our Academics page, where we take pride in
                  providing a comprehensive and stimulating educational
                  experience for your child. Our kindergarten school's academic
                  program is thoughtfully designed to foster a love for learning
                  while building a strong foundation of essential skills and
                  knowledge. From language arts and mathematics to science and
                  social studies, our curriculum is carefully crafted to spark
                  curiosity and encourage active exploration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center my-16'>
        <button className='mb-6 flex flex-row sm:flex-col px-6 py-2 font-medium bg-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Our Features
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Our Special Features{' '}
        </h2>
        <p className='text-center mb-16'>
          Our kindergarten school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-[50px] gap-4'>
          {[book, stat, puzzle, pencil, sun, star].map((icon, index) => (
            <div
              key={index}
              className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'
            >
              <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
                <Image
                  width={50}
                  height={50}
                  src={icon}
                  alt={`icon ${index}`}
                />
              </div>
              <h3 className='text-[28px] font-bold'>Feature {index + 1}</h3>
              <p>Feature description goes here.</p>
            </div>
          ))}
        </div>
      </section>

      <section className='flex flex-col items-center my-16'>
        <button className='mb-6 flex flex-row sm:flex-col px-6 py-2 font-medium bg-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Our Features
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>
          What Students Learn{' '}
        </h2>
        <p className='text-center mb-16'>
          At Little Learners Academy, we strive to cultivate a love for learning
          and equip children with essential skills for their future success. Our
          academic programs cover a wide range of subjects, allowing students to
          develop a strong foundation and discover their interests. Some key
          areas of learning include
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-[50px] gap-4'>
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className='relative p-[50px] border-2 border-black rounded-[12px] max-w-[504px] w-full bg-white flex flex-col items-center justify-center'
            >
              <div className='relative z-10 flex flex-col items-center'>
                <Image
                  className='mb-4 w-[80%] h-[60%]'
                  width={100}
                  height={100}
                  src={subject.image}
                  alt={subject.alt}
                />
                <h3 className='text-[28px] font-bold mb-2'>{subject.title}</h3>
                <p>{subject.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='flex flex-col items-center my-16 max-w-[90%] w-full m-auto  '>
        <button className='mb-6 flex flex-row sm:flex-col px-6 py-2 font-medium bg-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Our Gallery
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Our Rooms Gallery
        </h2>
        <p className='text-center mb-16'>
          Step into our Gallery and immerse yourself in a visual journey of
          cherished moments and unforgettable experiences at our kindergarten
          school.
        </p>
        <div className='flex justify-center gap-4 mb-6'>
          {[
            'All',
            'Classrooms',
            'Library',
            'Science Lab',
            'Computer Lab',
            'Garden and Nature Area',
          ].map((category) => (
            <button
              key={category}
              onClick={() => setFilteredCategory(category)}
              className={`px-4 py-2 rounded-lg ${
                filteredCategory === category
                  ? 'bg-[#FF8D4D] text-white'
                  : 'bg-[#FFEFE5] text-[gray-700]'
              } hover:bg-[#FF8D4D] hover:text-white`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className='flex flex-col w-full gap-5'>
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className='p-4 bg-white rounded-lg shadow hover:shadow-lg'
            >
              <Image
                src={item.image}
                alt={item.title}
                className='mb-4 rounded-md w-full h-48 object-cover'
              />
              <h3 className='text-lg font-semibold'>{item.title}</h3>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
