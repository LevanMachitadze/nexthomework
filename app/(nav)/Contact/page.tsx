'use client';

import { useState } from 'react';

interface FormData {
  parentName: string;
  email: string;
  phone: string;
  studentName: string;
  studentAge: string;
  program: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    studentAge: '',
    program: '',
    message: '',
  });

  const [error, setError] = useState<string>('');

  const programs = ['Math', 'Sport', 'Art', 'Physics'];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    for (const key in formData) {
      if (formData[key as keyof FormData].trim() === '') {
        setError('All fields must be filled.');
        return;
      }
    }
    alert('Form submitted successfully!');
    setFormData({
      parentName: '',
      email: '',
      phone: '',
      studentName: '',
      studentAge: '',
      program: '',
      message: '',
    });
  };

  return (
    <>
      <section className='bg-peach-light min-h-screen flex flex-col items-center py-16 px-4'>
        <button className='mb-6 px-6 py-2 font-medium bg-white w-fit shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-lg border-2 border-black'>
          Contact Form
        </button>
        <h1 className='text-3xl font-bold mb-4'>Student Information</h1>
        <p className='text-center text-gray-600 max-w-2xl mb-8'>
          If you have specific questions or wish to request more information
          about Little Learners Academy, please complete the contact form below.
          Kindly provide the following details to help us better understand your
          needs.
        </p>
        <div className='flex justify-center mb-6 space-x-4'>
          <button className='flex items-center px-4 py-2 bg-white border-2 border-black shadow-[3px_3px_0px_black] rounded-lg hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
            Facebook
          </button>
          <button className='flex items-center px-4 py-2 bg-white border-2 border-black shadow-[3px_3px_0px_black] rounded-lg hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
            Twitter
          </button>
          <button className='flex items-center px-4 py-2 bg-white border-2 border-black shadow-[3px_3px_0px_black] rounded-lg hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
            LinkedIn
          </button>
        </div>
        <div className='w-full max-w-4xl p-8 bg-white border-2 border-black rounded-lg shadow-[5px_5px_0px_black]'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium'>Parent Name</label>
                <input
                  type='text'
                  name='parentName'
                  value={formData.parentName}
                  onChange={handleChange}
                  className='w-full mt-1 px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400'
                  placeholder='Enter Parent Name'
                />
              </div>
              <div>
                <label className='block text-sm font-medium'>
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full mt-1 px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400'
                  placeholder='Enter Email Address'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium'>
                  Phone Number
                </label>
                <input
                  type='text'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className='w-full mt-1 px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400'
                  placeholder='Enter Phone Number'
                />
              </div>
              <div>
                <label className='block text-sm font-medium'>
                  Student Name
                </label>
                <input
                  type='text'
                  name='studentName'
                  value={formData.studentName}
                  onChange={handleChange}
                  className='w-full mt-1 px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400'
                  placeholder='Enter Student Name'
                />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-sm font-medium'>Student Age</label>
                <input
                  type='number'
                  name='studentAge'
                  value={formData.studentAge}
                  onChange={handleChange}
                  className='w-full mt-1 px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400'
                  placeholder='Enter Student Age'
                />
              </div>
              <div>
                <label className='block text-sm font-medium'>
                  Program of Interest
                </label>
                <select
                  name='program'
                  value={formData.program}
                  onChange={handleChange}
                  className='w-full mt-1 px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400'
                >
                  <option value=''>Select Program</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className='block text-sm font-medium'>Message</label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='w-full mt-1 px-4 py-2 border rounded focus:ring-2 focus:ring-orange-400'
                placeholder='Enter your Message'
                rows={4}
              />
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <button
              type='submit'
              className='w-full py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500'
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
