import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slide1 from '../Slider/Slide1';
import Slide2 from '../Slider/Slide2';
import Slide3 from '../Slider/Slide3';

const Banner = () => {
    return (
        <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><Slide1></Slide1></SwiperSlide>
              <SwiperSlide><Slide2></Slide2></SwiperSlide>
              <SwiperSlide><Slide3></Slide3></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Banner;