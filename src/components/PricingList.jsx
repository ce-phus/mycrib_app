import React from 'react';
import { check } from '../assets';
import { pricing } from '../constants';
import Button from './Button';

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap mt-20">
      {pricing.map((item, index) => (
        <div
          key={item.id}
          className={`
            w-[19rem] max-lg:w-full h-full px-6 bg-[#0E0C15] border border-[#FF98E2] 
            rounded-[2rem] lg:w-auto 
            ${index === 0 ? '[&>h4]:text-[#FFC876]' : ''} 
            ${index % 2 === 1 ? '[&>h4]:text-[#AC6AFF]' : ''} 
            ${index === pricing.length - 1 ? '[&>h4]:text-[#FF776F]' : ''}
            ${index % 2 === 0 ? 'py-8' : 'py-14'}
          `}
        >
          <h4 className="text-[2rem] leading-normal">{item.title}</h4>

          <p className="font-light text-[0.875rem] leading-6 md:text-base min-h-[4rem] mb-3 text-white/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="text-[2rem] leading-normal text-white md:text-[2.5rem]">$</div>
                <div className="text-[5.5rem] text-white leading-none font-bold">
                  {item.price}
                  <span className="text-[1rem] leading-normal text-white/50 md:text-[1.5rem]">/mo</span>
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6 text-white hover:text-white/50"
            href={item.price ? 'https://mycrib.app/my-profile' : 'https://mycrib.app/my-profile'}
            white={!!item.price}
          >
            {item.price ? 'Get started' : 'Contact us'}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-[#252134]"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="text-white font-medium text-[0.875rem] leading-6 md:text-base ml-4">
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;