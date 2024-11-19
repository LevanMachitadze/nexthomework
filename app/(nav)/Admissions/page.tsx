import React from 'react';

type stepsType = {
  number: string;
  title: string;
  description: string;
};

const steps: stepsType[] = [
  {
    number: '01',
    title: 'Inquiry',
    description:
      'Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.',
  },
  {
    number: '02',
    title: 'School Tour',
    description:
      'Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.',
  },
  {
    number: '03',
    title: 'Application Form',
    description:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
  },
  {
    number: '04',
    title: 'Parent Interview',
    description:
      "We value parent engagement, and a meeting with our admissions team allows us to understand your child's needs and ensure Little Learners Academy aligns with your family's expectations.",
  },
  {
    number: '05',
    title: 'Student Assessment',
    description:
      'For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.',
  },
  {
    number: '06',
    title: 'Acceptance',
    description:
      'Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.',
  },
];

export default function Admissions() {
  return (
    <>
      <section className=' max-w-[90%] w-full m-auto'>
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
          <div className='w-full max-w-4xl px-4 py-8 mx-auto bg-white border border-black rounded-lg shadow-lg'>
            <div className='flex flex-col items-center md:flex-row'>
              <div className='flex-1'>
                <div className='flex items-center mb-4'>
                  <button className='ml-4 px-3 py-1 border border-black rounded'>
                    Admission
                  </button>
                </div>

                <h1 className='text-4xl font-bold'>
                  Join Our Family of Young Learners
                </h1>
              </div>

              <div className='flex-1 mt-8 md:mt-0 md:ml-8'>
                <p className='text-lg'>
                  At Little Learners Academy, we welcome you to embark on an
                  exciting educational journey for your child. Our admission
                  process is designed to be transparent, straightforward, and
                  inclusive. Here's a step-by-step guide to joining our school
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col items-center my-16 max-w-[90%] w-full m-auto'>
        <button className='mb-6 flex flex-row sm:flex-col px-6 py-2 font-medium bg-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Process
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Admission Process
        </h2>
        <p className='text-center mb-16'>
          Embark on a remarkable educational journey with us! Our Admission and
          Enrollment process is the gateway to providing your child with an
          exceptional learning experience at our kindergarten school.
        </p>
        <div className='flex flex-wrap justify-center gap-8 py-12 bg-gray-100'>
          {steps.map((step) => (
            <div
              key={step.number}
              className='flex flex-col items-center text-center bg-white border-2 border-gray-800 rounded-lg shadow-lg max-w-sm p-6'
            >
              <div className='text-3xl font-bold text-gray-900 bg-gray-200 rounded-full w-16 h-16 flex items-center justify-center mb-4'>
                {step.number}
              </div>
              <h3 className='text-xl font-semibold text-gray-800 mb-2'>
                {step.title}
              </h3>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='flex flex-col items-center my-16 max-w-[90%] w-full m-auto'>
        <button className='mb-6 flex flex-row sm:flex-col px-6 py-2 font-medium bg-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-[8px]'>
          Our Features
        </button>
        <h2 className='text-3xl font-bold text-center mb-8'>Fee Structure</h2>
        <p className='text-center mb-16'>
          Our fee structure is transparent, and we strive to keep our fees
          competitive within the education sector. The fees vary based on the
          program, age group, and any additional services chosen.
        </p>
        <div className='p-8 bg-gray-100'>
          <div className='mb-12 bg-white shadow-md rounded-lg overflow-hidden border border-gray-300'>
            <div className='bg-rose-100 p-4'>
              <h2 className='text-xl font-bold text-gray-700'>Program Fees</h2>
            </div>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-rose-50 text-gray-600'>
                  <th className='py-3 px-4 border-b border-gray-300'>
                    Program
                  </th>
                  <th className='py-3 px-4 border-b border-gray-300'>
                    Age Group
                  </th>
                  <th className='py-3 px-4 border-b border-gray-300'>
                    Annual Tuition
                  </th>
                  <th className='py-3 px-4 border-b border-gray-300'>
                    Registration Fee
                  </th>
                  <th className='py-3 px-4 border-b border-gray-300'>
                    Activity Fee
                  </th>
                </tr>
              </thead>
              <tbody className='text-gray-700'>
                <tr>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    Nursery
                  </td>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    2 - 3 Years
                  </td>
                  <td className='py-3 px-4 border-b border-gray-300'>$1,686</td>
                  <td className='py-3 px-4 border-b border-gray-300'>$162</td>
                  <td className='py-3 px-4 border-b border-gray-300'>$12</td>
                </tr>
                <tr className='h-6'></tr>
                <tr>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    Pre-Kindergarten
                  </td>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    3 - 4 Years
                  </td>
                  <td className='py-3 px-4 border-b border-gray-300'>$2,686</td>
                  <td className='py-3 px-4 border-b border-gray-300'>$220</td>
                  <td className='py-3 px-4 border-b border-gray-300'>$16</td>
                </tr>
                <tr className='h-6'></tr>
                <tr>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    Kindergarten
                  </td>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    4 - 5 Years
                  </td>
                  <td className='py-3 px-4 border-b border-gray-300'>$3,686</td>
                  <td className='py-3 px-4 border-b border-gray-300'>$340</td>
                  <td className='py-3 px-4 border-b border-gray-300'>$20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bg-white shadow-md rounded-lg overflow-hidden border border-gray-300'>
            <div className='bg-rose-100 p-4'>
              <h2 className='text-xl font-bold text-gray-700'>
                Additional Services
              </h2>
            </div>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='bg-rose-50 text-gray-600'>
                  <th className='py-3 px-4 border-b border-gray-300'>
                    Service
                  </th>
                  <th className='py-3 px-4 border-b border-gray-300'>Cost</th>
                </tr>
              </thead>
              <tbody className='text-gray-700'>
                <tr>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    Before and After-School Care
                  </td>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    $120 / per month
                  </td>
                </tr>
                <tr>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    Language Immersion Program
                  </td>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    $60 / per semester
                  </td>
                </tr>
                <tr>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    Transportation (optional)
                  </td>
                  <td className='py-3 px-4 border-b border-gray-300'>
                    $80 / per month
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
