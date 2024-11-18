'use client';
import Image from 'next/image';
import Link from 'next/link';
import homeImage from './assets/images/png/homeImage.png';
import ball from './assets/images/svg/ball.svg';
import crown from './assets/images/svg/crown.svg';
import education from './assets/images/svg/education.svg';
import flag from './assets/images/svg/flag.svg';
import humans from './assets/images/svg/humans.svg';
import mask from './assets/images/svg/mask.svg';
import Swiper from './components/swiper/swiper';
import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};
const faqs: FAQ[] = [
  {
    question: 'What are the school hours at Little Learners Academy?',
    answer:
      'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.',
  },
  {
    question: 'How do you handle food allergies and dietary restrictions?',
    answer:
      'We take food allergies seriously and work closely with parents to accommodate dietary restrictions. Our staff is trained to handle these concerns.',
  },
  {
    question:
      'What is the teacher-to-student ratio at Little Learners Academy?',
    answer:
      'Our teacher-to-student ratio is 1:10 for toddlers and 1:15 for preschoolers, ensuring personalized attention and care for each child.',
  },
  {
    question: 'Is there a uniform policy for students?',
    answer:
      'Yes, we have a uniform policy to promote a sense of community and equality among students.',
  },
  {
    question: 'What extracurricular activities are available for students?',
    answer:
      'We offer activities such as art, music, dance, and sports to help develop students’ skills and interests.',
  },
  {
    question: 'How do you handle discipline and behavior management?',
    answer:
      'We use positive reinforcement and work closely with parents to address behavioral challenges in a supportive manner.',
  },
  {
    question: 'How do I apply for admission to Little Learners Academy?',
    answer:
      'You can apply by visiting our website and filling out the admission form or contacting our administration office directly.',
  },
  {
    question: 'What extracurricular activities are available for students?',
    answer:
      'We offer activities such as art, music, dance, and sports to help develop students’ skills and interests.',
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className='px-[160px] my-20 max-w-[1590px] w-full mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='max-w-765px w-full flex-1'>
          <Image
            className='object-fill max-w-[765px] w-full'
            src={homeImage}
            width={765}
            height={785}
            alt='home page image'
          />
        </div>
        <div className='flex items-center justify-center flex-1'>
          <div className='max-w-[765px] w-full h-[500px] flex flex-col ml-[30px]'>
            <span className='underline '>
              Welcome to Little Learners Academy
            </span>
            <h2 className='text-[54px]'>
              Where Young Minds Blossom and {''}
              <span className='text-[#FF8D4D]'>Dreams Take Flight.</span>
            </h2>
            <p className='mt-[30px] mb-[60px]'>
              Our kinder garden school provides a nurturing and stimulating
              environment, fostering a love for learning that lasts a lifetime.
              Join us as we embark on an exciting educational journey together!
            </p>
            <div className='w-full border-2 border-black rounded-[12px] flex justify-between h-[140px] items-center text-start px-[30px]'>
              <div className='flex flex-col'>
                <span className='text-[44px]'>+7000</span>
                <span>Students Passed Out</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-[44px]'>+37</span>
                <span>Awards & Recognitions</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-[44px]'>+15</span>
                <span>Experience Educators</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <div className='min-h-[200px] flex items-center justify-center'>
          <button className='px-6 py-2 font-medium bg-white  text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
            Children Deserve Bright Future
          </button>
        </div>

        <h2 className='text-[58px] mb-[20px]'>Our Benefits</h2>
        <p className='max-w-[990px] text-center'>
          With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child's future.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-3 mt-[50px] gap-4'>
          <div className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'>
            <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
              <Image
                width={50}
                height={50}
                src={education}
                alt='education logo '
              ></Image>
            </div>
            <h3>Holistic Learning Approach</h3>
            <p>
              Our curriculum focuses on nurturing cognitive, social, emotional,
              and physical development, ensuring a well-rounded education.
            </p>
          </div>
          <div className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'>
            <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
              <Image
                width={50}
                height={50}
                src={crown}
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
              <Image width={50} height={50} src={mask} alt='mask logo '></Image>
            </div>
            <h3>Nurturing Environment</h3>
            <p>
              We prioritize safety and provide a warm and caring atmosphere for
              every child.
            </p>
          </div>
          <div className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'>
            <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
              <Image width={50} height={50} src={flag} alt='flag logo '></Image>
            </div>
            <h3>Play-Based Learning</h3>
            <p>
              We believe in the power of play to foster creativity,
              problem-solving skills, and imagination.
            </p>
          </div>
          <div className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'>
            <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
              <Image width={50} height={50} src={ball} alt='ball logo '></Image>
            </div>
            <h3>Individualized Attention</h3>
            <p>
              Our small class sizes enable personalized attention, catering to
              each child's unique needs.
            </p>
          </div>
          <div className='p-[50px] relative border-2 border-black rounded-[12px] m-[40px] max-w-[504px] w-full bg-white'>
            <div className='absolute -top-[30px] border-2 w-[74px] border-black left-[30px] bg-[#FFDECC] rounded-[12px] max-w-[75px] flex items-center justify-center h-[75px]'>
              <Image
                width={50}
                height={50}
                src={humans}
                alt='humans logo '
              ></Image>
            </div>
            <h3>Parent Involvement</h3>
            <p>
              We foster a strong parent-school partnership to ensure seamless
              communication and collaboration.
            </p>
          </div>
        </div>
      </div>

      <section className='flex flex-col items-center my-16'>
        <button className='mb-6 px-6 py-2 font-medium bg-white  text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Their Happy Words
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Our Testimonials{' '}
        </h2>
        <p className='text-center mb-16'>
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </p>
        <Swiper />
      </section>

      <div className='flex flex-col items-center'>
        <button className='px-6 py-2 font-medium bg-white  text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Solutions For The Doubts
        </button>
        <section className='px-4 py-16 max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Frequently Asked Questions
          </h2>
          <p className='text-center mb-16'>
            Find all the essential information you need in our FAQ section,
            designed to address the most frequently asked questions and help you
            make informed decisions for your child's education.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 flex flex-col justify-between ${
                  activeIndex === index ? 'bg-gray-100 shadow-md' : 'bg-white'
                }`}
                style={{ minHeight: '150px' }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className='w-full flex justify-between items-center text-left text-gray-800 font-medium focus:outline-none'
                >
                  <span className='text-lg'>{faq.question}</span>
                  <span className='text-2xl'>
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className='mt-2 text-gray-600'>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <div>
        <section className='flex flex-col items-center my-16'>
          <button className='mb-6 px-6 py-2 font-medium bg-white  text-black w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
            Explore More{' '}
          </button>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Navigate through our Pages
          </h2>
          <p className='text-center mb-16'>
            Your gateway to discovering a wealth of valuable information about
            our kindergarten school, Feel free to explore and learn more about
            the enriching experiences that await your child at our kindergarten
            school
          </p>
          <div className='px-4 py-16 max-w-6xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
              <div className='bg-white border rounded-lg shadow-md p-6 text-center'>
                <h3 className='text-2xl font-bold mb-4'>About Us</h3>
                <div className='flex items-center justify-center mb-4'>
                  <div className='h-2 w-2 bg-gray-300 rounded-full'></div>
                  <div className='flex-grow border-t-2 border-dashed border-orange-300 mx-2'></div>
                  <div className='h-2 w-2 bg-gray-300 rounded-full'></div>
                </div>
                <p className='text-gray-600 mb-6'>
                  Discover our Mission, Values, and our unwavering commitment to
                  providing the best learning experience for your child. Learn
                  about our passionate educators and our engaging approach to
                  early education.
                </p>
                <button className='bg-orange-100 text-black w-full px-6 py-3 rounded-lg shadow-md hover:bg-orange-200'>
                  Learn More →
                </button>
              </div>
              <div className='bg-white border rounded-lg shadow-md p-6 text-center'>
                <h3 className='text-2xl font-bold mb-4'>Academics</h3>
                <div className='flex items-center justify-center mb-4'>
                  <div className='h-2 w-2 bg-gray-300 rounded-full'></div>
                  <div className='flex-grow border-t-2 border-dashed border-orange-300 mx-2'></div>
                  <div className='h-2 w-2 bg-gray-300 rounded-full'></div>
                </div>
                <p className='text-gray-600 mb-6'>
                  Delve into our comprehensive academic programs designed to
                  stimulate young minds, foster creativity, and encourage a love
                  for learning.
                </p>
                <button className='bg-orange-100 text-black w-full px-6 py-3 rounded-lg shadow-md hover:bg-orange-200'>
                  Learn More →
                </button>
              </div>
              <div className='bg-white border rounded-lg shadow-md p-6 text-center'>
                <h3 className='text-2xl font-bold mb-4'>Student Life</h3>
                <div className='flex items-center justify-center mb-4'>
                  <div className='h-2 w-2 bg-gray-300 rounded-full'></div>
                  <div className='flex-grow border-t-2 border-dashed border-orange-300 mx-2'></div>
                  <div className='h-2 w-2 bg-gray-300 rounded-full'></div>
                </div>
                <p className='text-gray-600 mb-6'>
                  Peek into the vibrant and enriching world of Student Life at
                  Little Learners Academy. Discover the array of extracurricular
                  activities and social events that make our school experience
                  memorable.
                </p>
                <button className='bg-orange-100 text-black w-full px-6 py-3 rounded-lg shadow-md hover:bg-orange-200'>
                  Learn More →
                </button>
              </div>
              <div className='bg-white border rounded-lg shadow-md p-6 text-center'>
                <h3 className='text-2xl font-bold mb-4'>Admissions</h3>
                <div className='flex items-center justify-center mb-4'>
                  <div className='h-2 w-2 bg-gray-300 rounded-full'></div>
                  <div className='flex-grow border-t-2 border-dashed border-orange-300 mx-2'></div>
                  <div className='h-2 w-2 bg-gray-300 rounded-full'></div>
                </div>
                <p className='text-gray-600 mb-6'>
                  Learn about our Enrollment Process and how to secure your
                  child’s place at Little Learners Academy. Find information
                  about admission requirements and application deadlines.
                </p>
                <button className='bg-orange-100 text-black w-full px-6 py-3 rounded-lg shadow-md hover:bg-orange-200'>
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
