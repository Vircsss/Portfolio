import React from 'react';

// Icons
import { IoTerminal } from 'react-icons/io5';
import { FaGraduationCap } from 'react-icons/fa';

// Components
import LanguageAbout from '@/components/languageAbout';

// Utils
import { aboutCollege } from '@/utils/aboutArray';

const aboutMe = () => {
  return (
    <div className='flex flex-col h-auto pb-10 w-full'>
      <div className='flex  justify-center items-center p-5 w-full gap-5'>
        <h1 className='text-neutral-800 font-black xxs:text-3xl md:text-7xl'>
          About<span className='text-red-600'>.</span>
        </h1>
        <div className='h-[1px] w-full xxs:hidden sm:flex border border-zinc-500'></div>
      </div>
      <div className='flex lg:flex-row xxs:flex-col gap-5 '>
        <div className='lg:w-2/3 xxs:w-full flex flex-col gap-5 items-start xxs:justify-start md:justify-center px-5'>
          <h2 className='text-neutral-800 font-light md:text-xl xxs:text-sm '>
            
            Currently, I am studying Systems Analysis and Development at FIAP. Since I was little, I have always enjoyed technology and keeping up with the latest news in the digital world. I have an aptitude for learning and solving problems in a practical and efficient way.As stated above, I am currently studying systems analysis and
            development, I have always liked being connected to technology.
          </h2>

          <h2 className='text-neutral-800 font-light md:text-xl xxs:text-sm '>
            I have practical experience with various technologies, including React, Tailwind CSS, Python, JavaScript, and SQL. Furthermore, I am always seeking new learning opportunities and challenges that help me evolve as a developer.z
          </h2>

          <h2 className='text-neutral-800 font-light md:text-xl xxs:text-sm '>
            My interest in technological innovation led me to achieve my first goal as a programmer: the development of the Seu Paulo Buteco website, where I participated in all stages—from design to complete project implementation.z
          </h2>
        </div>
        <div className='lg:w-1/3 xxs:w-full lg:pr-1 h-full flex lg:flex-col xxs:flex-row gap-5   '>

          <div className='gap-5 xxs:pr-1 lg:pr-0 flex flex-col xxs:w-1/2 md:w-full lg:h-1/2 xxs:h-2/5'>
            <div className='flex md:flex-row  xxs:flex-col w-full gap-5 items-center'>
              <FaGraduationCap size={35}/>
              <h2 className='text-neutra-800 md:text-start xxs:text-center font-black md:text-3xl xxs:text-lg'>
                Use at College
              </h2>
            </div>
            <div className='flex overflow-auto flex-wrap w-full h-full gap-2'>
              <LanguageAbout Array={aboutCollege} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutMe;

