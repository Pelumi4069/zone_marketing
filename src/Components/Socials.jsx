import React from 'react';
import Spotify from "../assets/brand_spotify.svg";
import Airbnb from "../assets/brand_airbnb.svg";
import Heroku from "../assets/brand_heroku.svg";
import Netflix from "../assets/brand_netflix.svg";
import Slack from "../assets/brand_slack.svg";
import Vimeo from "../assets/brand_vimeo.svg";
import Image from "../assets/Image Ratio.png";

const Socials = () => {
  return (
    <div className='lg:h-[150vh] flex items-center lg:bg-cover lg:bg-center 
    lg:bg-no-repeat p-24 lg:py-0 overflow-hidden bg-tertiary'>
        <div className='flex flex-col'>
         <div className="flex align-start flex-col md:flex-row md:ml-auto md:mr-auto items-center justify-between">
         <img src={Spotify} alt="spotify" className='p-5' />
         <img src={Slack} alt="slack" className='p-5' />
         <img src={Netflix} alt="netflix" className='p-5' />
         <img src={Heroku} alt="heroku" className='p-5' />
         <img src={Vimeo} alt="vimeo" className='p-5' />
         <img src={Airbnb} alt="airbnb" className='p-5' />
         </div>
         <div>
        <img src={Image} alt="imageratio" className='mt-16 object-cover' />
         </div>
         </div>
    </div>
  )
}

export default Socials;