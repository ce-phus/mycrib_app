import React from 'react';
import Section from './Section';
import { logo } from '../assets';
import { MdMarkEmailUnread } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const socials = [
  {
    id: '0',
    title: 'Instagram',
    icon: AiFillInstagram,
    url: '#',
  },
  {
    id: '1',
    title: 'Twitter',
    icon: BsTwitterX,
    url: '#',
  },
  {
    id: '2',
    title: 'Facebook',
    icon: FaFacebookF,
    url: '#',
  },
];

const Footer = () => {
  return (
    <Section className="!px-0 !pt-0 pb-5">
      <div className="flex justify-between max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] max-sm:flex-col">
        <div className="">
          <a target="_blank" href="https://mycrib.app" className="">
            <img src={logo} className="lg:w-[50px] lg:h-[50px] w-[50px]" alt="Logo" />
          </a>
          <p className="caption text-gray-700 lg:block mt-2">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
          <span className="mt-2 flex space-x-3">
            <MdMarkEmailUnread className="text-xl text-black" />
            <p className="font-medium text-black">lulwanda@mycrib.app</p>
          </span>
        </div>

        <div className="flex flex-wrap gap-5">
          {socials.map((social) => {
            console.log("Social ID:", social.id);
            const Icon = social.icon; 
            return (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center "
              >
                <Icon className="xl:text-4xl lg:text-3xl text-black" /> 
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Footer;