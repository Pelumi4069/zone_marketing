import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Background from '../assets/isDark=True.png';

import TeamMember1 from '../assets/Imager1.png';
import TeamMember2 from '../assets/Imager2.png';
import TeamMember3 from '../assets/imager3.png';

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', title: 'CEO', image: TeamMember1 },
    { id: 2, name: 'Jane Smith', title: 'Designer', image: TeamMember2 },
    { id: 3, name: 'Jane Smith', title: 'Designer', image: TeamMember3 },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div
      className="lg:h-[105vh]  p-32  bg-cover bg-center relative items-center overflow-hidden"
      style={{
        backgroundImage: `url(${Background})`, 
      }}
    >
      <div className="container mx-auto flex flex-row py-20 ">
        
      <div className="basis-1/2 pr-2  bg-opacity-80 p-5 rounded">
        <h1 className="text-4xl font-bold mb-4 text-accent">Meet Our Team</h1>
        <p className="text-accent mb-8">
        Since wire-frame renderings are relatively simple <br /> and fast to calculate, they are often used in cases
        </p>
        </div>

        <div className='basis-1/2'>

        <Slider {...sliderSettings}>
          {teamMembers.map((member) => (
            <div key={member.id} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="mx-auto rounded-sm w-auto h-80 mb-4 p-5"
                />
              <h2 className="text-lg font-semibold mb-2 text-accent">{member.name}</h2>
              <p className="text-accent mb-4">{member.title}</p>
            </div>
          ))}
        </Slider>



        <div className="mt-4">
        </div>
      </div>

      <div className="flex-1 relative">

        <div className="relative z-10 p-4">
        </div>

      </div>
          </div>
    </div>
  );
};

export default Team;
