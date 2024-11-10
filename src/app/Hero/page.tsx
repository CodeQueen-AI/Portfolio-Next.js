import React from 'react';
import Image from 'next/image';


const Hero = () => {
  return (
    <section className='-mt-8'>
      <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative'>
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
          <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
            <h1 
              className='text-5xl lg:text-6xl font-bold leading-relaxed x:leading-loose font-Averia text-blue-950'
            >
              I am
              <br />
              Sumbal <span className='text-secondary'>Naz!</span>
            </h1>
            <p
              className='text-2xl tracking-wide'
            >
              Welcome To My Portfolio
            </p>
            <p
              className='text-gray-400'
            >
             Explore Sumbal Naz Portfolio! Dive into my projects, skills, and coding journey. Join me as I turn ideas into reality through code
            </p>
            <div className='flex justify-center md:justify-start'>
              <button className='primary-btn flex items-center gap-2'>
                <span>View Portfolio</span>
              </button>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Image
            src="/Home Pic.png"
            alt='Home Img'
            width={250}
            height={250}
            className='w-[350px] md:w-[550px] drop-shadow'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
