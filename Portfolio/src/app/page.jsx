import React from 'react';

// Components
import InitialScreen from '@/components/InitialScreen';
import AboutMe from '@/components/aboutMe';
import Footer from '@/components/footer';
import Projects from '@/components/projects';

const Home = () => {
  return (
    <div className='h-auto w-full '>
      <InitialScreen />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
