import Image from 'next/image';
import Link from 'next/link';
import homeImage from './assets/images/png/homeImage.png';
import ball from './assets/images/svg/ball.svg';
import crown from './assets/images/svg/crown.svg';
import education from './assets/images/svg/education.svg';
import flag from './assets/images/svg/flag.svg';
import humans from './assets/images/svg/humans.svg';
import mask from './assets/images/svg/mask.svg';

export default function Home() {
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

      <div></div>

      <div></div>

      <div></div>
    </section>
  );
}
