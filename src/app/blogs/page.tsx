import Header from '@/components/Header';
import React from 'react';

const page = () => {
  return (
    <div className=" text-white w-full px-0 sm:px-6 md:px-8 lg:px-16">
      <nav>
        <Header />
      </nav>

      <div className="relative inline-block mb-6 ml-16 mt-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f0d078] to-[#D9AC47]">
          Blogs
        </h2>
        <div className="h-1 w-1/3 bg-gradient-to-r from-[#D9AC47] to-transparent mt-2 rounded-full animate-pulse"></div>
      </div>

      <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 font-light ml-16 max-w-3xl leading-relaxed">
        Real stories, expert advice, and transformative solutions to help you
        look and feel your best.
      </p>
    </div>
  );
};

export default page;
