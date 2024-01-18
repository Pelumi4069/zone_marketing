// import React from 'react';
// import Logo from '../assets/Logow.png';

// const Navbar = () => {
//   return (
//     <div className="p-4 py-1 px-4 md:px-14  mx-auto flex flex-wrap items-center justify-between bg-tertiary w-full">
//       <a href='#'>
//         <img src={Logo} alt="logo" />
//       </a>

//       <div className="flex flex-col md:flex-row md:ml-auto md:mr-auto items-center text-base mt-4 md:mt-0 text-[#919EAB]">
//         <a className="mr-5 hover:text-accent cursor-pointer">Home</a>
//         <a className='mr-5 hover:text-accent cursor-pointer'>Service</a>
//         <a className='mr-5 text-accent hover:text-[#919EAB] cursor-pointer'>Case Studies</a>
//         <a className='mr-5 hover:text-accent cursor-pointer'>Blog</a>
//       </div>

//       <div className='flex flex-col md:flex-row justify-between mt-4 md:mt-0'>
//         <h2 className='px-4 md:px-8 mb-2 md:mb-0 text-accent transform hover:scale-110 transition ease-out 300 cursor-pointer'>Login</h2>
//         <button className='inline-flex bg-black-600 border-0 py-1 px-5 mt-2 md:mt-0 bg-white transform hover:scale-110 transition ease-out 300 text-black p-2 rounded'>
//           Join Us
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../assets/Logow.png';
import About from './About';

const navigation = [
  { name: 'Home', href: '#home', current: false },
  { name: 'Services', href: '#services', current: false },
  { name: 'Case Studies', href: '#case', current: true },
  { name: 'Blog', href: '#blog', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function Navbar() {
  return (
    <Disclosure as="nav" className="bg-tertiary fixed w-full px-16 z-20 top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={Logo}
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.name.toLowerCase()}`}
                        className={classNames(
                          item.current ? 'text-primary ' : 'text-[#919EAB] hover:bg-gray-700 hover:text-white',
                          'rounded-md px-5 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-primary p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
<div className='hidden lg:block md:block'>
<div className='flex flex-row md:flex-row justify-between mt-4 md:mt-0 '>
           <h2 className='px-4 md:px-8 mb-2 md:mb-0 text-accent transform hover:scale-110 transition ease-out 300 cursor-pointer'>Login</h2>
           <button className='inline-flex bg-black-600 border-0 py-1 px-5 mt-2 md:mt-0 bg-white transform hover:scale-110 transition ease-out 300 text-black p-2 rounded'>
               Join Us
           </button>
           </div>
           </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a 
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}


export default Navbar;

