import React, { useState } from 'react';
import { crib, logo } from '../assets';
import { useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { navigation } from '../constants';
import { HambugerMenu } from './designs/Header';
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg';

const Header = () => {
  const { pathname } = useLocation(); // Destructure pathname
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation((prev) => !prev);
    if (!openNavigation) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 text-black border-b border-transparent bg-transparent lg:backdrop-blur-sm ${
        openNavigation ? 'bg-gray-400' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] flex space-x-2 xl:mr-8" href="#hero">
          <img src={logo} alt="logo" className="lg:w-[100px] lg:h-[80px] w-[50px]" />
          <img src={crib} alt="crib" className="w-full h-[50px] mt-4" />
        </a>

        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-gray-300 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-poppins text-2xl uppercase text-black transition-colors hover:text-gray-500 ${
                  item.onlyMobile ? 'lg:hidden' : ''
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash ? 'z-2 lg:text-black' : 'lg:text-black/70'
                } lg:leading-5 lg:hover:text-black xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HambugerMenu />
        </nav>
        <div className='hidden lg:flex'>
            <Button className="hidden lg:flex" href="https://mycrib.app">
            Visit myCrib
            </Button>
        </div>
        
        <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;