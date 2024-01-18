import React from 'react';
import CardImage1 from '../assets/ic_marketing_seo.svg'; // Replace with your image paths
import CardImage2 from '../assets/ic_marketing_bullhorn.svg';
import CardImage3 from '../assets/ic_marketing_marketing_mail.svg';
import CardImage4 from '../assets/ic_marketing_analysis.svg';
import Icon from '../assets/iconbase.svg';



const Service = () => {
  const servicesData = [
    {
      id: 1,
      image: CardImage1,
      heading: 'SEO',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      image: CardImage2,
      heading: 'Email Marketing',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      image: CardImage3,
      heading: 'Search Engine Optimization',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      image: CardImage4,
      heading: 'Social Marketing',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];




  return (
    <div id='services' className='lg:h-[85vh] bg-tertiary '>
    <div className=" mx-auto  p-24  bg-tertiary float-right">
      <div className='py-8'>
      <h1 className="text-4xl font-bold mb-4 text-accent">Our Services</h1>
      <p className="text-[#919EAB] mb-8">
        Providing top-notch services to meet your needs.
      </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-[#47474763] cursor-pointer p-6 rounded-lg shadow-md text-center transform hover:scale-110 transition ease-out 300"
          >
            <img
              src={service.image}
              alt={`Service ${service.id}`}
              className="w-10 h-10 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-lg font-semibold mb-2 text-accent">{service.heading}</h2>
            <p className="text-[#919EAB] mb-4">{service.paragraph}</p>
            <div className='items-center justify-center text-center flex '>
           <img src={Icon} alt="icon" className='items-center justify-center text-center' />
           </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Service;
