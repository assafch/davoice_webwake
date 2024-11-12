// components/CompanySection.js
import React from 'react';
import hotelLogo from '/src/images/hotel_genie_logo.svg'
import relyonLogo from '/src/images/Relyon_logo.svg'
import seirtechLogo from '/src/images/Seirtech_logo.svg'

function CompanySection() {
  return (
    <section className="bg-white dark:bg-gray-800 pt-6">
      <div className="container mx-auto px-6 text-center">
        <span className="font-semibold text-gray-500 uppercase dark:text-gray-400">
          TRUSTED GLOBALLY
        </span>
        <div className="overflow-x-auto">
        <div className="flex flex-wrap justify-center items-center mt-4 gap-x-72">
            <a
              href="#"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img src={hotelLogo} alt="Logo 1" className="h-20" />
            </a>
            <a
              href="#"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img src={relyonLogo} alt="Logo 2" className="h-32" />
            </a>
            <a
              href="#"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img src={seirtechLogo} alt="Logo 3" className="h-36" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanySection;
