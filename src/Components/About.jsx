import React from 'react';
import Icon from '../assets/iconbase.svg';

const About = () => {
  return (
    <div className='lg:h-[60vh] flex flex-col lg:flex-row items-center lg:bg-cover lg:bg-center lg:bg-no-repeat p-10 lg:p-24 lg:py-0 overflow-hidden md:flex justify-between bg-tertiary'>
      <div className='flex flex-col lg:flex-row items-center w-full lg:w-auto'>
        <div className='lg:w-2/5 lg:text-end text-center mb-8 lg:mb-0'>
          <p className='text-xs text-gray-400'>ABOUT US</p>
          <h1 className='text-accent py-3 font-bold text-4xl'>Who We Are</h1>
          <p className='py-3 text-[#919EAB]'>
            In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas.
          </p>
          <div className='flex flex-row items-center justify-end py-3 cursor-pointer transform hover:scale-110 transition ease-out 300'>
            <p className='text-primary text-sm'>Learn more</p>
            <img src={Icon} alt="icon" className='px-2' />
          </div>
        </div>
        <div className='lg:w-1/5 lg:text-center text-center'>
          <div className='py-4 justify-center '>
          <h1 className='text-accent py-3 font-bold text-4xl'>150 <span className='text-primary text-1xl '>+</span></h1>
          <p className='text-[#919EAB] text-sm justify-center'>PROJECTS</p>
          </div>
          <div className='py-4'>
          <h1 className='text-accent py-3 font-bold text-4xl'>32K <span className='text-primary text-md top-5'>+</span></h1>
          <p className='text-[#919EAB] text-sm justify-center'>HAPPY CLIENTS</p>
          </div>
          <div className='py-4'>
          <h1 className='text-accent py-3 font-bold text-4xl'>20 <span className='text-primary top-5 text-1xl'>+</span></h1>
          <p className='text-[#919EAB] text-sm justify-center'>YEARS OF <br/> EXPERIENCE</p>
          </div>
        </div>
        <div className='lg:w-2/5'>
          <p className='text-sm py-5 text-[#919EAB]'>Praesent turpis. Praesent blandit laoreet nibh. Nunc augue ac venenatis nonummy metus.</p>
          <p className='text-sm py-5 text-[#919EAB]'>Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.</p>
          <p className='text-sm py-5 text-[#919EAB]'>Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
