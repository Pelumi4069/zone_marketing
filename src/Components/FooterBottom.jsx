import React from 'react'

const FooterBottom = () => {
  return (
    <div className="lg:h-[5vh] w-full bg-tertiary px-24 text-center justify-center items-center ">
      <div className='flex flex-row'>
      <div className="">
          <p className="text-sm text-[#919EAB] justify-center items-center">
            &copy; {new Date().getFullYear()}   zone.com. All rights reserved.
          </p>
        </div>
        {/* <div className='flex flex-row float-right text-sm text-[#919EAB] justify-end '>
          <p>Help Center</p>
          <p>Terms of Service</p>
        </div> */}
      </div>
    </div>
  )
}

export default FooterBottom