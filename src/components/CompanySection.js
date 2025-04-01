import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function CompanySection() {
  return (
    <section className="bg-white dark:bg-gray-800 pt-6 pb-6">
      <div className="container mx-auto px-6 text-center">
        <span className="font-semibold text-gray-500 uppercase dark:text-gray-400">
          TRUSTED GLOBALLY
        </span>
        <Swiper
          modules={[Autoplay]} // Import and use Autoplay module
          spaceBetween={50}
          slidesPerView={3}
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 5000, // 3 seconds between slides
            disableOnInteraction: false, // Keep autoplay running even after user interaction
          }}
          className="mt-4"
        >
          <SwiperSlide>
            <a
              href="https://www.hotelgenie.app" // Use the real link
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img
                src="https://github.com/assafch/davoice_webwake/blob/main/logos/hotel_ginie_logo.png?raw=true"
                alt="Wake Word Detection and Speech-to-Intent AI"
                className="h-20 mx-auto"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://lookdeep.health" // Use the real link
              target="_blank"
              rel="noopener noreferrer"

              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img
                src="https://github.com/assafch/davoice_webwake/blob/main/logos/look_deep_logo.jpg?raw=true"
                alt="Wake Word Detection and Speech-to-Intent AI"
                className="h-20 mx-auto"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.lunafitapp.com" // Use the real link
              target="_blank"
              rel="noopener noreferrer"

              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img
                src="https://github.com/assafch/davoice_webwake/blob/main/logos/lunafit.jpeg?raw=true"
                alt="Wake Word Detection and Speech-to-Intent AI"
                className="h-20 mx-auto"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.relyon.ai" // Use the real link
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img
                src="https://github.com/assafch/davoice_webwake/blob/main/logos/relyon_new.png?raw=true?raw=true"
                alt="Wake Word Detection and Speech-to-Intent AI"
                style={{ backgroundColor: '#f5f5f5' }} // #f5f5f5 White background for Sier
                className="h-20 mx-auto"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://www.siertech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img
                src="https://raw.githubusercontent.com/assafch/davoice_webwake/refs/heads/main/logos/Siernewlogo.avif?raw=true"
                alt="Wake Word Detection and Speech-to-Intent AI"
                className="h-20 mx-auto"
                style={{ backgroundColor: '#ffffff' }} // White background for Sier
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default CompanySection;
