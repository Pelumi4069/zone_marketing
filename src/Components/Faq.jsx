import React from 'react';
import Big from '../assets/bigquest.png';

const Faq = () => {
  return (
    <div className=" lg:h-[95vh] p-24 w-full overflow-hidden bg-tertiary">
        <div className="mx-auto grid md:grid-cols-2 flex-row ">
            <div className="justify-center flex flex-col">
                <h1 className='text-white font-bold text-3xl'>Frequently Asked Questions </h1>
                <p className='text-xs text-[#919EAB]  py-2 my-2'>Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate <br /> arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in, <span className='float-right text-lg '>-</span></p>
                <p className='text-xs text-accent py-2 font-bold'>Malesuada adipiscing, dui vestibulum suscipit nulla quis orci. <span className='float-right'>+</span></p>
                <p className='text-xs text-accent py-2 font-bold'>Ut varius tincidunt libero. <span className='float-right'>+</span></p>
                <p className='text-xs text-accent py-2 font-bold'>In ut quam vitae odio lacinia tincidunt. <span className='float-right'>+</span></p>
                <p className='text-xs text-accent py-2 font-bold'>Fusce vel dui Morbi nec metus. <span className='float-right'>+</span></p>
            </div>
            <div >
                <img src={Big} alt="question" className='w-[400px] mx-auto my-4' />
            </div>
        </div>
    </div>
  )
}

export default Faq;