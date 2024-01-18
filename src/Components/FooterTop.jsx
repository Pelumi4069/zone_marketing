import React, { useState } from "react";
import Logo from '../assets/Logow.png';
import news from '../assets/email 4.png';
import bfoot from '../assets/Buttonfoot.png';



const FooterTop = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <div className="w-full bg-tertiary  p-24">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6  gap-10">
        <div className="col-span-2">
        <a href='#'>
        <img src={Logo} alt="logo" className="mb-6" />
      </a>
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%] text-[#919EAB]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
          
          </div>
        </div>
      
        <div>
        <h3 className="text-xl font-bodyFont font-semibold mb-6 text-white">Our Address</h3>
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-accent hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              info@example.com
            </li>
            <li className="font-titleFont text-base text-accent hover:text-[#919EAB] hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              655 Schaefer Dale
            </li>
          
          </ul>
        </div>
        <div>
          <img src={news} alt="newsletter" className="px-4 py-4"/>
        </div>
        <div className="col-span-2 flex flex-col items-start w-full ">
        <h3 className="text-xl font-bodyFont font-semibold text-white mb-6">Subscribe to our newsletter</h3>
          <div className="w-full">
          
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Insert your email ...*"
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                {/* <button
                  
                  className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide"
                >
                  Subscribe
                </button> */}
                <img src={bfoot} alt="bfoot" className="transform hover:scale-90 transition ease-in 300 cursor-pointer" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default FooterTop