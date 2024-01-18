import React from 'react';
import OPTIM from "../assets/optim.png";
import PLANNING from "../assets/planning.png";
import RESCH from "../assets/research.png";
import RESULT from '../assets/result.png';
import ICON from '../assets/iconbase.svg';

 const Workflow = () => {
  return (
    <div className='lg:h-[105vh] flex items-center lg:bg-cover lg:bg-center 
    lg:bg-no-repeat py-8 px-24 lg:py-0 overflow-hidden md:flex justify-between bg-tertiary'>
        <div className=' container mx-auto flex flex-col'>
            <div className='py-10 bg-tertiary-50  rounded-xl '>
                <p className='text-xs mt-2 text-[#919EAB] '>WORKFLOW</p>
                <h1 className='text-4xl mt-2 block  font-bold leading tight text-accent'>Working Process</h1>
                <p className='mt-2 text-[#919EAB]'>Nunc nonummy metus. Donec elit libero, sodales nec, <br /> volutpat a, suscipit non, turpis.</p>
            </div>

            <div className='  items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4'>

               <div className='p-4 items-center text-center w-25 bg-card h-[9rem] rounded-lg cursor-pointer translate-y-20 transform hover:scale-110 transition ease-out 300'>
                <img  src={PLANNING} alt="icons"className='h-11  justify-center '/>
                <div className='flex flex-row text-end float-right py-4 '>
                <h3 className='mt-1 block text-lg font-bold leading-tight text-tertiary py-4 text-end'>Planning</h3>
                <img src={ICON} alt="icon" className=' bg-card items-end' />
                </div>
               </div>

               <div className='p-4   w-25 items-center bg-cardd h-[9rem] rounded-lg translate-y-16 transform cursor-pointer hover:scale-110 transition ease-out 300'>
                <img src={RESCH} alt="icons" className='h-11  items-center' />
                <div className='flex flex-row text-end float-right py-4'>
                <h3 className='mt-1 block text-lg font-bold leading-tight text-tertiary py-4 text-end'>Research</h3>
                <img src={ICON} alt="icon" className='items-end bg-cardd'/>
                </div>
               </div>

               <div className='p-4 items-center text-center w-25 bg-carddd h-[9rem] rounded-lg overflow-hidden translate-y-12 cursor-pointer transform hover:scale-110 transition ease-out 300'>
                <img src={OPTIM} alt="icons" className='h-11 top-0 ' />
                <div className='flex flex-row text-end float-right py-4 '>
                <h3 className='mt-1 block text-lg font-bold leading-tight text-tertiary py-4 text-end '>Optimizing</h3>
                <img src={ICON} alt="icon" />
                </div>
               </div>

               <div className='p-4 items-center text-center w-25 bg-cardddd h-[9rem] rounded-lg translate-y-8 transform hover:scale-110 cursor-pointer transition ease-out 300'>
                <img src={RESULT} alt="icons" className='h-11 ' />
                <div className='flex flex-row text-end float-right py-4'>
                <h3 className='mt-1 block text-lg font-bold leading-tight text-tertiary py-4 text-end'>Results</h3>
                <img src={ICON} alt="icon" className='text-cardddd' />
                </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Workflow;
