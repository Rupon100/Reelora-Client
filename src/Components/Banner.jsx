import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slide1 from '../Slider/Slide1';
import Slide2 from '../Slider/Slide2';
import Slide3 from '../Slider/Slide3';

const Banner = () => {
    return (
        <div>
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation={true}
              className=''
            >
              <SwiperSlide><Slide1></Slide1></SwiperSlide>
              <SwiperSlide><Slide2></Slide2></SwiperSlide>
              <SwiperSlide><Slide3></Slide3></SwiperSlide>
            </Swiper>

            <style>
                {`
                    .swiper-button-prev,
                    .swiper-button-next {
                        width: 20px; 
                        height: 20px; 
                        pointer-events: auto;
                        position: absolute;
                        z-index: 50;
                    }

                    .swiper-button-prev::after,
                    .swiper-button-next::after {
                        font-size: 20px; 
                    }
                `}
            </style>


        </div>
    );
};

export default Banner;