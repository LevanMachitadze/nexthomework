'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useRef, useEffect } from 'react';
import david from '../../assets/images/png/david.png';
import emily from '../../assets/images/png/emily.png';
import jennifer from '../../assets/images/png/jennifer.png';

type CardType = {
  name: string;
  image: any;
  rating: number;
  text: string;
};
const testimonials: CardType[] = [
  {
    name: 'Jennifer B',
    image: jennifer,
    rating: 5,
    text: 'Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!',
  },
  {
    name: 'David K',
    image: david,
    rating: 5,
    text: 'Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.',
  },
  {
    name: 'Emily L',
    image: emily,
    rating: 5,
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
];

export default function Home() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      prevRef.current.style.zIndex = '10';
      nextRef.current.style.zIndex = '10';
    }
  }, []);

  return (
    <section className='px-[160px] my-20 max-w-[1590px] w-full mx-auto'>
      <div className='relative max-w-[1200px] mx-auto p-4'>
        <button
          ref={prevRef}
          className='absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-3 rounded-full shadow hover:bg-gray-300'
        >
          ❮
        </button>
        <button
          ref={nextRef}
          className='absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 text-black p-3 rounded-full shadow hover:bg-gray-300'
        >
          ❯
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            swiper.navigation.update();
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className='mySwiper'
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className='h-[350px] p-4 border-2 border-gray-200 rounded-[12px] shadow-md bg-white flex flex-col justify-between'
            >
              <div className='flex flex-col items-center text-center'>
                <div className='w-[80px] h-[80px] mb-4'>
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name}'s photo`}
                    width={80}
                    height={80}
                    className='rounded-full'
                  />
                </div>
                <h3 className='font-semibold'>{testimonial.name}</h3>
                <div className='flex my-2'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className='text-orange-500'>
                      ★
                    </span>
                  ))}
                </div>
              </div>
              <p className='text-gray-600 text-sm'>{testimonial.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
