import React from 'react';
import Ourw1 from '../assets/ourw1.png';
import Ourw2 from '../assets/ourw2.png';
import Ourw3 from '../assets/ourw3.png';
import Ourw4 from '../assets/ourw4.png';
import Ourw5 from '../assets/ourw5.png';
import Ourw6 from '../assets/ourw6.png';




const Ourwork = () => {
  return (
    <div id='blog' className='lg:h-[105vh] flex items-center lg:bg-cover lg:bg-center 
    lg:bg-no-repeat p-24 lg:py-0 overflow-hidden md:flex justify-between bg-tertiary'>
        <div className=' container mx-auto flex flex-col'>

        <div className='py-10  rounded-xl '>
                <p className='text-xs mt-2 text-tertiary '>OUR WORK</p>
                <h1 className='text-4xl mt-2 block  font-bold leading tight text-tertiary'>Case Studies</h1>
                </div>

                <div className="items-center justify-center h-auto w-400px flex flex-wrap">
                    <div>
                        <img src={Ourw1} alt="img" />
                    </div>
                    <div>
                        <img src={Ourw2} alt="img" />
                    </div>
                    <div>
                        <img src={Ourw3} alt="img" />
                    </div>
                    <div>
                        <img src={Ourw4} alt="img" />
                    </div>
                    <div>
                        <img src={Ourw5} alt="img" />
                    </div>
                    <div>
                        <img src={Ourw6} alt="img" />
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Ourwork;
