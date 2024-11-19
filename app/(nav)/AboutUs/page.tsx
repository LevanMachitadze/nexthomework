'use client';
import React from 'react';
import Image from 'next/image';
import volkano from '../../assets/images/svg/volkano.svg';
import eye from '../../assets/images/svg/eye.svg';
import diagram from '../../assets/images/svg/diagram.svg';
import stat from '../../assets/images/svg/stat.svg';
import z from '../../assets/images/svg/z.svg';
import message from '../../assets/images/svg/message.svg';
import Sarah from '../../assets/images/png/sarah.png';
import David from '../../assets/images/png/David-1.png';
import Emilly from '../../assets/images/png/Emilly.png';
import Michael from '../../assets/images/png/Michael.png';
import Jessica from '../../assets/images/png/Jessica.png';
import William from '../../assets/images/png/William.png';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

type profilesType = {
  name: string;
  qualification: string;
  description: string;
  imgSrc: any;
  iconSrc: any;
};

const timelineData: TimelineItemProps[] = [
  {
    year: '2023',
    title: 'Resilience and Future Horizons',
    description:
      'Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.',
  },
  {
    year: '2017',
    title: 'Innovation and Technology',
    description:
      "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    year: '2012',
    title: 'Expansion and Recognition',
    description:
      'These years marked a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.',
  },
  {
    year: '2005',
    title: 'Inception and Growth',
    description:
      'Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.',
  },
];
const profiles: profilesType[] = [
  {
    name: 'Ms. Sarah Anderson',
    qualification: "Bachelor's Degree in Early Childhood Education",
    description:
      'Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.',
    imgSrc: Sarah,
    iconSrc: { message },
  },
  {
    name: 'Mr. David Roberts',
    qualification: "Master's Degree in Elementary Education",
    description:
      'With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.',
    imgSrc: David,
    iconSrc: { message },
  },
  {
    name: 'Ms. Emily Hernandez',
    qualification: 'Diploma in Child Psychology',
    description:
      "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    imgSrc: Emilly,
    iconSrc: { message },
  },
  {
    name: 'Mr. Michael Turner',
    qualification: "Bachelor's Degree in Physical Education",
    description:
      "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    imgSrc: Michael,
    iconSrc: { message },
  },
  {
    name: 'Ms. Jessica Lee',
    qualification: "Master's Degree in Special Education",
    description:
      "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    imgSrc: Jessica,
    iconSrc: { message },
  },
  {
    name: 'Mr. William Parker',
    qualification: "Bachelor's Degree in Fine Arts",
    description:
      "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    imgSrc: William,
    iconSrc: { message },
  },
];

export default function AboutUs() {
  return (
    <>
      <section className=' max-w-[90%] w-full m-auto'>
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
          <div className='w-full max-w-4xl px-4 py-8 mx-auto bg-white border border-black rounded-lg shadow-lg'>
            <div className='flex flex-col items-center md:flex-row'>
              <div className='flex-1'>
                <div className='flex items-center mb-4'>
                  <button className='ml-4 px-3 py-1 border border-black rounded'>
                    Overview
                  </button>
                </div>

                <h1 className='text-4xl font-bold'>
                  Welcome to Little Learners Academy
                </h1>
              </div>

              <div className='flex-1 mt-8 md:mt-0 md:ml-8'>
                <p className='text-lg'>
                  A leading kinder garden school dedicated to providing a
                  nurturing and stimulating environment for young learners. With
                  a commitment to excellence in early education, we believe in
                  shaping curious minds and building a strong foundation for a
                  lifelong love of learning. Our holistic approach fosters
                  intellectual, social, emotional, and physical development,
                  ensuring that each child reaches their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center my-16'>
        <button className='mb-6 flex flex-row sm:flex-col  px-6 py-2 font-medium bg-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Explore More
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Navigate through our Pages
        </h2>
        <p className='text-center mb-16'>
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </p>

        <div className='flex flex-col md:flex-row gap-8 w-full max-w-[1200px]'>
          <div className='flex flex-col justify-between bg-white text-black rounded-lg shadow-lg p-8 w-full md:w-1/2'>
            <div>
              <span className='flex justify-between'>
                <h3 className='<text-2xl font-bold mb-4'>Mission</h3>
                <Image
                  width={50}
                  height={50}
                  src={volkano}
                  alt='humans logo '
                ></Image>
              </span>
              <p className='text-gray-700'>
                At Little Learners Academy, our mission is to inspire a passion
                for learning and empower young minds to become confident,
                compassionate, and creative individuals. We strive to create a
                safe and inclusive space where children thrive academically,
                socially, and emotionally, setting the stage for a successful
                educational journey.
              </p>
            </div>
          </div>

          <div className='flex flex-col justify-between bg-white text-black rounded-lg shadow-lg p-8 w-full md:w-1/2'>
            <div>
              <span className='flex justify-between'>
                <h3 className='text-2xl font-bold mb-4'>Vision</h3>{' '}
                <Image
                  width={50}
                  height={50}
                  src={eye}
                  alt='humans logo '
                ></Image>
              </span>

              <p className='text-gray-700'>
                Our vision is to be a beacon of educational excellence, where
                children are encouraged to explore, discover, and express their
                unique talents. We aim to foster a generation of lifelong
                learners equipped with critical thinking, empathy, and a deep
                appreciation for diversity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center my-16'>
        <button className='mb-6 flex flex-row sm:flex-col  px-6 py-2 font-medium bg-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Our Achievements{' '}
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Our Awards and Recognitions{' '}
        </h2>
        <p className='text-center mb-16'>
          Little Learners Academy takes pride in our commitment to delivering
          high-quality education and outstanding student experiences. We are
          honored to have received various awards and recognitions for our
          dedication to early childhood education. These accolades reflect our
          team's relentless efforts in creating an exceptional learning
          environment for our students.
        </p>
        <div className='flex flex-col sm:flex-row'>
          <div className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'>
            <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
              <Image
                width={50}
                height={50}
                src={diagram}
                alt='crown logo '
              ></Image>
            </div>
            <h3>Experienced Educators</h3>
            <p>
              Our passionate and qualified teachers create a supportive and
              stimulating learning environment.
            </p>
          </div>
          <div className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'>
            <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
              <Image
                width={50}
                height={50}
                src={stat}
                alt='crown logo '
              ></Image>
            </div>
            <h3>Experienced Educators</h3>
            <p>
              Our passionate and qualified teachers create a supportive and
              stimulating learning environment.
            </p>
          </div>
          <div className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'>
            <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
              <Image width={50} height={50} src={z} alt='crown logo '></Image>
            </div>
            <h3>Experienced Educators</h3>
            <p>
              Our passionate and qualified teachers create a supportive and
              stimulating learning environment.
            </p>
          </div>
        </div>
        <div className='flex justify-between w-[90%] '>
          <span className='font-bold'>8 More Awards</span>
          <div className='flex'>
            <span>←</span>
            <span>→</span>
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center my-16'>
        <button className='mb-6 flex flex-row sm:flex-col  px-6 py-2 font-medium bg-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Our Progressive Journey{' '}
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>Our History</h2>
        <p className='text-center mb-16'>
          Founded with a passion for early education in 2005, our kindergarten
          school boasts a rich history of empowering young learners to reach
          their potential through innovative teaching methods and a supportive
          learning environment
        </p>
        <div className='relative max-w-4xl mx-auto px-6 py-12 bg-white'>
          <div className='absolute w-1 bg-orange-500 left-6 top-0 h-full'></div>
          <ul className='space-y-16'>
            {timelineData.map((item, index) => (
              <li key={index} className='relative flex items-center'>
                <div className='absolute left-0 w-8 h-8 bg-orange-500 rounded-full border-4 border-white top-1/2 transform -translate-y-1/2'></div>
                <div className='ml-16 w-full p-6 bg-white rounded-md shadow-lg border border-gray-100'>
                  <h3 className='text-3xl font-bold text-orange-700'>
                    {item.year}
                  </h3>
                  <h4 className='text-2xl font-semibold mt-2 text-gray-800'>
                    {item.title}
                  </h4>
                  <p className='mt-4 text-gray-600 text-lg leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='flex flex-col items-center my-16'>
        <button className='mb-6 flex flex-row sm:flex-col  px-6 py-2 font-medium bg-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Explore More
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Navigate through our Pages
        </h2>
        <p className='text-center mb-16'>
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </p>
        <div className='min-h-screen py-8'>
          <main className='max-w-6xl mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className='flex flex-col border border-gray-200 shadow-md rounded-lg p-4 bg-white'
                >
                  <div className='flex items-center'>
                    <Image
                      width={50}
                      height={50}
                      src={profile.imgSrc}
                      alt={profile.name}
                      className='w-16 h-16 rounded-full object-cover border border-gray-300'
                    />
                    <div className='ml-4 flex-1'>
                      <h2 className='text-lg font-semibold text-gray-800'>
                        {profile.name}
                      </h2>
                    </div>
                    <Image
                      width={50}
                      height={50}
                      src={message}
                      alt='message'
                    ></Image>
                  </div>
                  <div className='mt-4'>
                    <p className='text-sm font-medium text-gray-700'>
                      {profile.qualification}
                    </p>
                  </div>
                  <p className='mt-2 text-sm text-gray-600'>
                    {profile.description}
                  </p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
