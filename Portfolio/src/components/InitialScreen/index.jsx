import React from 'react';

// Icons
import { FaChevronDown } from 'react-icons/fa';


const InitialScreen = () => {
  return (
    <div className='w-full h-screen md:p-0 xxs:p-2 bg-neutral-800 flex flex-col items-center justify-center'>
      <div className='flex flex-col gap-5'>
        <div className='flex flex-col'>
          <h1 className='text-white font-black w-full xxs:text-xl md:text-7xl'>
            Hey, I'm Vinicius<span className='text-red-600'>.</span>
          </h1>
          <h2 className='text-white font-light xxs:text-xl md:text-5xl w-full'>
            I'm a{' '}
            <span className='text-red-600 font-black w-full'>
              Full Stack Developer
            </span>
          </h2>
        </div>
        <div className='flex md:w-96 xxs:w-full '>
          <h3 className='text-white xxs:text-sm md:text-base'>
            i'm 19
            years old, and i'm from{' '}
            <span className='text-red-600 font-bold'>
              São Bernardo do Campo, SP, Brazil
            </span>{' '}
            currently studying{' '}
            <span className='text-red-600 font-bold'>
              Systems Analysis and Development
            </span>{' '}
            at <span className='text-red-600 font-bold'>Fiap</span>
          </h3>
        </div>
      </div>
      <div className='animate-bounce flex justify-center flex-col items-center text-white text-xl absolute bottom-10'>
        <p>Scroll down</p>
        <FaChevronDown className='' />
      </div>
    </div>
  );
};

export default InitialScreen;
