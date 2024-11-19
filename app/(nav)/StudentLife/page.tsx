import Image from 'next/image';
import React from 'react';

import z from '../../assets/images/svg/Z.svg';
import pencil from '../../assets/images/svg/pencil.svg';
import melody from '../../assets/images/svg/melody.svg';
import puzzle from '../../assets/images/svg/puzzle.svg';
import cimical from '../../assets/images/svg/cimical.svg';
import fary from '../../assets/images/svg/fary.svg';
import light from '../../assets/images/svg/light.svg';
import book from '../../assets/images/svg/book.svg';
import people from '../../assets/images/svg/people.svg';
import sport from '../../assets/images/png/sport.png';
import fest from '../../assets/images/png/fest.png';
import artEx from '../../assets/images/png/artExhibision.png';
import scienceFair from '../../assets/images/png/scienceFair.png';
import international from '../../assets/images/png/international.png';
import graduation from '../../assets/images/png/graduation.png';

type activitiesType = {
  id: number;
  title: string;
  description: string;
  image: any;
  alt: string;
};
const activities: activitiesType[] = [
  {
    id: 1,
    title: 'Sports and Athletics',
    description:
      'Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.',
    image: z,
    alt: 'Sports and Athletics',
  },
  {
    id: 2,
    title: 'Art and Creativity',
    description:
      'Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.',
    image: pencil,
    alt: 'Art and Creativity',
  },
  {
    id: 3,
    title: 'Music and Performing Arts',
    description:
      'Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.',
    image: melody,
    alt: 'Music and Performing Arts',
  },
  {
    id: 4,
    title: 'Language Clubs',
    description:
      'Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.',
    image: puzzle,
    alt: 'Language Clubs',
  },
  {
    id: 5,
    title: 'Science Club',
    description:
      'The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.',
    image: cimical,
    alt: 'Science Club',
  },
  {
    id: 6,
    title: 'Cooking and Culinary Arts',
    description:
      'Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.',
    image: fary,
    alt: 'Cooking and Culinary Arts',
  },
];
const support: activitiesType[] = [
  {
    id: 1,
    title: 'Counseling',
    description:
      'Professional counselors offer guidance and support to students, addressing their emotional and social well-being.',
    image: light,
    alt: 'light',
  },
  {
    id: 2,
    title: 'Learning Support',
    description:
      'Our educators provide additional assistance to students who may require extra support in their academic journey.',
    image: book,
    alt: 'book',
  },
  {
    id: 3,
    title: 'Parent-Teacher Collaboration',
    description:
      "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
    image: people,
    alt: 'people',
  },
];

type eventsType = {
  id: number;
  title: string;
  description: string;
  image: any;
  alt: string;
};

const events: eventsType[] = [
  {
    id: 1,
    title: 'Language Arts',
    description: 'Reading, writing, storytelling, and communication skills.',
    image: sport,
    alt: 'Language Arts',
  },
  {
    id: 2,
    title: 'Mathematics',
    description: 'Number sense, basic operations, problem-solving, and logic.',
    image: fest,
    alt: 'Mathematics',
  },
  {
    id: 3,
    title: 'Science',
    description: 'Exploring the natural world through hands-on experiments.',
    image: artEx,
    alt: 'Science',
  },
  {
    id: 4,
    title: 'Social Studies',
    description: 'Cultivating an understanding of diverse cultures.',
    image: scienceFair,
    alt: 'Social Studies',
  },
  {
    id: 5,
    title: 'Arts and Crafts',
    description: 'Encouraging creativity through various art forms.',
    image: international,
    alt: 'Arts and Crafts',
  },
  {
    id: 6,
    title: 'Physical Education',
    description: 'Promoting physical fitness, coordination, and teamwork.',
    image: graduation,
    alt: 'Physical Education',
  },
];

export default function StudentsLife() {
  return (
    <>
      <section className=' max-w-[90%] w-full m-auto'>
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
          <div className='w-full max-w-4xl px-4 py-8 mx-auto bg-white border border-black rounded-lg shadow-lg'>
            <div className='flex flex-col items-center md:flex-row'>
              <div className='flex-1'>
                <div className='flex items-center mb-4'>
                  <button className='ml-4 px-3 py-1 border border-black rounded'>
                    Enriching Student Life
                  </button>
                </div>

                <h1 className='text-4xl font-bold'>
                  Embracing Learning with Discovery and Joy
                </h1>
              </div>

              <div className='flex-1 mt-8 md:mt-0 md:ml-8'>
                <p className='text-lg'>
                  Welcome to our Student Life page, where the magic of childhood
                  comes alive through the enriching experiences and adventures
                  that our students embark on each day. At our kindergarten
                  school, we believe that learning goes beyond textbooks, and we
                  strive to create a holistic and engaging environment that
                  nurtures every aspect of a child's development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center my-16 max-w-[90%] w-full m-auto'>
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
          {activities.map((Activity, index) => (
            <div
              key={index}
              className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'
            >
              <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
                <Image
                  width={50}
                  height={50}
                  src={Activity.image}
                  alt={Activity.alt}
                />
              </div>
              <h3 className='text-[28px] font-bold'>{Activity.title}</h3>
              <p>{Activity.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='flex flex-col items-center my-16 max-w-[90%] w-full m-auto'>
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
          {events.map((event) => (
            <div
              key={event.id}
              className='relative p-[50px] border-2 border-black rounded-[12px] max-w-[504px] w-full bg-white flex flex-col items-center justify-center'
            >
              <div className='relative z-10 flex flex-col items-center'>
                <Image
                  className='mb-4 w-[80%] h-[60%]'
                  width={100}
                  height={100}
                  src={event.image}
                  alt={event.alt}
                />
                <h3 className='text-[28px] font-bold mb-2'>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='flex flex-col items-center my-16 max-w-[90%] w-full m-auto'>
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
          {support.map((Activity, index) => (
            <div
              key={index}
              className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'
            >
              <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
                <Image
                  width={50}
                  height={50}
                  src={Activity.image}
                  alt={Activity.alt}
                />
              </div>
              <h3 className='text-[28px] font-bold'>{Activity.title}</h3>
              <p>{Activity.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
