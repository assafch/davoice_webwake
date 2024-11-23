import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function CompanySection() {
  return (
    <section className="bg-white dark:bg-gray-800 pt-6">
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
              href="#"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img
                src="https://github.com/assafch/davoice_webwake/blob/main/logos/hotel_ginie_logo.png?raw=true"
                alt="Logo 1"
                className="h-20 mx-auto"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img
                src="https://github.com/assafch/davoice_webwake/blob/main/logos/Screenshot-2024-10-09-at-17.58.48.png?raw=true"
                alt="Logo 2"
                className="h-20 mx-auto"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img
                src="https://github.com/assafch/davoice_webwake/blob/main/logos/SierLogo.jpg?raw=true"
                alt="Logo 3"
                className="h-20 mx-auto"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="#"
              className="mb-5 hover:text-gray-800 dark:hover:text-gray-200"
            >
              <img
                src="https://github.com/assafch/davoice_webwake/blob/main/logos/lunafit.jpeg?raw=true"
                alt="Logo 4"
                className="h-20 mx-auto"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default CompanySection;
