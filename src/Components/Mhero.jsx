import React from 'react';
import Market from '../assets/illustration_marketing_market.svg';
import Play from '../assets/ic_play.svg';

const Mhero = () => {
  return (
    <div id='home' className='lg:h-[105vh] flex flex-col lg:flex-row bg-tertiary items-center lg:bg-cover lg:bg-center lg:bg-no-repeat lg:p-24  p-12 overflow-hidden md:flex justify-between'>
      <div className='text-center lg:text-left py-16'>
        <p className='text-primary font-bold'>DIGITAL MARKETING</p>
        <h1 className='text-4xl lg:text-7xl py-4 font-bold text-white lg:text-start leading-tight'>
          Boosts Your Website Traffic
        </h1>
        <h3 className='py-2 text-lg lg:text-1.5xl text-[#919EAB] lg:w-96 lg:text-start '>
          Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.
        </h3>
        <div className='py-3 flex flex-row lg:flex-row justify-center lg:justify-start items-center'>
          <button className='bg-primary text-white text-sm lg:text-base py-2 px-5 rounded-md mb-2 lg:mb-0 lg:mr-7 cursor-pointer hover:bg-accent hover:text-primary transform hover:scale-110 transition ease-out 300'>
            Try For Free
          </button>
          <img src={Play} alt="" className='px-5 border-1-primary cursor-pointer lg:border-none transform hover:scale-90 transition ease-in 300'/>
          <button className='text-primary px-3 text-sm lg:text-base transform hover:scale-110 transition ease-out 300'>See Our Work</button>
        </div>
      </div>

      <div className='mt-5 lg:mt-0 lg:ml-8 hidden lg:block'>
        <img src={Market} alt="hero_image" className='w-full lg:w-auto'/>
      </div>
    </div>
  );
}

export default Mhero;
