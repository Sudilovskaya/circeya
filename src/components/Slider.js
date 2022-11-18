import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SwiperCore, { Mousewheel } from 'swiper';

SwiperCore.use([Mousewheel]);


const slides = [
  {
    id: 1,
    img: '/img/slider/1.png'
  },
  {
    id: 2,
    img:
      '/img/slider/2.png'
  },
  {
    id: 3,
    img:
      '/img/slider/3.png'
  },
  {
    id: 4,
    img:
      '/img/slider/4.png'
  },
  {
    id: 5,
    img:
      '/img/slider/5.png'
  },
  {
    id: 6,
    img:
      '/img/slider/6.png'
  },
  {
    id: 7,
    img:
      '/img/slider/7.png'
  },
  {
    id: 8,
    img:
      '/img/slider/8.png'
  },
];

export default () => {
  return (
    <div>
      <h1 className="headline">Lorem ipsum dolor sit amet</h1>
      <Swiper
        spaceBetween={ 40 }
        slidesPerView={ 4.5 }
        mousewheel={true}
        onSlideChange={ () => console.log('slide change') }
        onSwiper={ (swiper) => console.log(swiper) }
      >
        {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <img src={slide.img} />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}