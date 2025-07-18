//import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
export function TeamMemberSection() {
  return (
    <div className="container">
      <div className="team-member">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3.5}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          autoplay={{
            delay: 2500, // Time between slides in ms
            disableOnInteraction: false // Autoplay keeps going after user interaction
          }}
          navigation={true}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 320px (mobile)
            320: {
              slidesPerView: 1.1,
              spaceBetween: 20
            },
            // when window width is >= 768px (tablet)
            768: {
              slidesPerView: 2.5,
              spaceBetween: 25
            },
            // when window width is >= 1024px (desktop)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }}
        >
           <SwiperSlide>
            <div className="item">
              <Image src="/images/people-2.webp" alt="member" width={1000} height={1200} />
              <div className="text">
                <p className="name">Jared Dotoli</p>
                <p className="position">CEO</p>
              </div>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="item">
              <Image src="/images/name.jpg" alt="member" width={1000} height={1200} />
              <div className="text">
                <p className="name">Mohammad Khalid</p>
                <p className="position">Assistant Manager</p>
              </div>
            </div>
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="item">
              <Image src="/images/people-3.webp" alt="member" width={1000} height={1200} />
              <div className="text">
                <p className="name">Waseem Ahmed Tunio</p>
                <p className="position">Full Stack Developer</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
