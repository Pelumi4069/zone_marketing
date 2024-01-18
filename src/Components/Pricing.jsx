import React, { useState } from 'react';
import pic1 from '../assets/basic01.png';
import pic2 from '../assets/basic2.png';
import pic3 from '../assets/basic3.png';

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const pricingData = [
    {
      id: 1,
      title: 'Basic',
      priceMonthly: 29,
      priceYearly: 250,
      features: ['Auto update mode', 'Online operator 24/7', 'International posting'],
      img: pic1,
    },
    {
      id: 2,
      title: 'Standard',
      priceMonthly: 59,
      priceYearly: 550,
      features: ['Auto update mode', 'Online operator 24/7', 'International posting', 'Unique newsletter'],
      img: pic2,
    },
    {
      id: 3,
      title: 'Premium',
      priceMonthly: 99,
      priceYearly: 950,
      features: ['Auto update mode', 'Online operator 24/7', 'International posting', 'Unique newsletter', '20 design templates'],
      img: pic3,
    },
  ];

  const toggleBillingCycle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="lg:h-[125vh]  mx-auto pt-10 p-24  bg-tertiary overflow-hidden">
      <div className='py-8'>
      <h1 className="text-4xl font-bold mb-4 text-accent">Pricing</h1>
      <p className="text-[#919EAB] mb-8">Choose the perfect plan for your needs. Always flexible to grow.</p>
      </div>

      <div className="flex justify-center mb-6">
        <button
          className={`${
            isMonthly ? 'bg-primary' : 'bg-gray-300'
          } text-[#919EAB] px-4 py-2 rounded-l-md`}
          onClick={toggleBillingCycle}
        >
          Monthly
        </button>
        <button
          className={`${
            !isMonthly ? 'bg-primary' : 'bg-gray-300'
          } text-[#919EAB] px-3 py-2  rounded-r-md`}
          onClick={toggleBillingCycle}
        >
          Yearly
        </button>
      </div>

      <div className="grid  sm:grid-rows-3  lg:grid-cols-3 gap-4  py-10   h-auto items-center justify-center ">
        {pricingData.map((plan) => (
          <div
            key={plan.id}
            className={`${
              plan.title === 'Basic' ? 'sm:col-span-1' : 'sm:col-span-1'
            } bg-[#47474763] p-2 rounded-lg shadow-md text-center py-10 cursor-pointer justify-center items-center`}
          >
             <img src={plan.img} alt="planimage" className='float-right top-0 w-14' />
             <div className=''>
            <h2 className="text-xl font-semibold text-primary mb-4">{plan.title}</h2>


            <p className=" font-bold text-2xl text-accent mb-4">
              {isMonthly ? `$${plan.priceMonthly}/mo` : `$${plan.priceYearly}/yr`}
            </p>
            </div>
            <ul className="text-left mb-6 py-4">
              {plan.features.map((feature, index) => (
                <li key={index} className="text-[#919EAB] px-16 justify-center">{feature}</li>
              ))}
            </ul>
            <button className="bg-primary text-white px-6 py-2 rounded-md w-60 transform hover:scale-90 transition ease-in 300">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

