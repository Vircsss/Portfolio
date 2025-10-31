import React from 'react';

// Iconss
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin, FaPhoneAlt, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const footer = () => {
  return (
    <div className='flex flex-col pb-10 h-auto w-full'>
      <div className='flex  justify-center items-center p-5 w-full gap-5'>
        <div className='h-[1px] w-full xxs:hidden sm:flex border border-zinc-500'></div>
        <h1 className='text-neutral-800 font-black xxs:text-3xl md:text-7xl'>
          Contact<span className='text-red-600'>.</span>
        </h1>
      </div>

      <div className='h-auto w-full flex md:flex-row xxs:flex-col md:justify-between items-start p-5  xxs:gap-10 '>
        <div className='flex items-center md:w-1/3 xxs:w-full pt-5 justify-center flex-col gap-2'>
          <img
            src='/Image/minha foto.jpg'
            alt='Minha foto'
            className='w-32 h-32 rounded-full border-2 border-red-600 object-cover'
          />
          <span className=' font-black lg:text-4xl xxs:text-xl'>
            Vinicius Cardozo<span className='text-red-600'>.</span>
          </span>
        </div>

        <div className='flex flex-col md:w-1/3 xxs:w-full h-full xxs:gap-5 md:gap-16 items-center justify-center'>
          <div className='flex items-center justify-center h-1/3'>
            <span className=' font-black lg:text-4xl xxs:text-xl xxs:text-center md:text-start'>
              Social Midia<span className='text-red-600'>.</span>
            </span>
          </div>
          <div className='flex gap-5 justify-center items-center h-2/3 '>
            <a
              href='https://www.linkedin.com/in/viniciusromaguera/'
              className=' hover:text-red-600 hover:scale-105 duration-500'
            >
              <FaLinkedin className='text-4xl' />
            </a>
            <a
              href='https://github.com/Vircsss'
              className=' hover:text-red-600 hover:scale-105 duration-500'
            >
              <FaGithub className='text-4xl' />
            </a>
            <a
              href='https://www.instagram.com/vircs__/'
              className=' hover:text-red-600 hover:scale-105 duration-500'
            >
              <BsInstagram className='text-4xl' />
            </a>
          </div>
        </div>

        <div className='md:w-1/3 xxs:w-full flex flex-col justify-center items-center gap-5 '>
          <div className='flex items-center justify-center'>
            <span className=' font-black lg:text-4xl xxs:text-xl xxs:text-center md:text-start'>
              Contact Me<span className='text-red-600'>.</span>
            </span>
          </div>
          <div className='flex flex-col gap-5 '>
            <div className='flex flex-col'>
              <div className='flex items-center w-full gap-3 '>
                <span className=''>
                  <MdEmail className='text-2xl' />
                </span>
                <span className='font-bold '>Email:</span>
              </div>
              <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                <span className=' md:text-base xxs:text-sm '>
                  vinicius.romacardozo@gmail.com
                </span>
              </div>
            </div>
            <div className='flex flex-col '>
              <div className='flex items-center gap-3 '>
                <FaPhoneAlt className='text-2xl' />
                <span className='font-bold'>Telefone:</span>
              </div>
              <div className='flex flex-col justify-center md:pl-10 xxs:pt-5'>
                <span className=' md:text-base xxs:text-sm '>
                  +55 (11) 94107-8460
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
