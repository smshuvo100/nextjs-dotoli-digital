import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export function ClientTestimonial() {
  return (
    <div className="client-testimonial">
      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        pagination={{
          clickable: true
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
            slidesPerView: 3.5,
            spaceBetween: 30
          }
        }}
      >
        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"Working with Dotoli Digital was a game-changer for our property listings. The ads, the VR walkthroughs, the lead quality—everything improved within weeks!"</p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Jessica Klein</p>
              <p className="position">Sales Manager at Luxe Living Realty</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"From running high-converting Google Ads to revamping our website, Dotoli Digital brought in leads we didn't think were possible in this market."</p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Patrick</p>
              <p className="position">CEO of Top Florida Roofing</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"The automation workflows and CRM integration set up by Dotoli Digital team helped us cut our lead response time by 80%. Huge win for Trentium Capital!"</p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">David Yates</p>
              <p className="position">Managing Partner at Trentium Capital</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"Our sales jumped 2x after the Shopify overhaul and targeted ads ran by Dotoli Digital. Their SEO strategy continues to bring traffic daily."</p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Ananya Patel</p>
              <p className="position">Founder of Skintique Naturals</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"Dotoli Digital's Make.com setup now handles 90% of our client onboarding. Their AI-first mindset saves us hours every single week."</p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Ravi Sharma</p>
              <p className="position">Co-Founder at Workflow Nest</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"Our pressure washing business went from invisible to fully booked in under a month. Facebook Ads + local SEO did the trick!"</p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Carlos D.</p>
              <p className="position">Owner of Florida Pressure Pros</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"The GTM and GA4 setup finally gave us full visibility into user actions. We now track every lead, click, and purchase with clarity."</p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Sarah Lin</p>
              <p className="position">Head of Marketing at Meeks Wellness</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"We work across three time zones, but the Dotoli Digital team was always on point. Their strategy for UAE and KSA Amazon campaigns was spot on."</p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Zayn Habib</p>
              <p className="position">Ecom Lead at BioSoft Arabia</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"We loved their bold ideas and clean aesthetic. From branding to campaign execution, Dotoli Digital feels like a true creative partner."</p>
            <div className="client-info">
              <Image src="/images/avata.webp" alt="avata" width={70} height={70} />
              <p className="name">Julie Kim</p>
              <p className="position">Art Director at Maven Studios</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="item">
            <Image src="/images/quote.svg" alt="icon" width={80} height={59} />
            <p>"The email workflows they designed are still converting leads three months later. It’s like setting and forgetting—with results!"</p>
            <div className="client-info">
              <p className="name">Ethan Brooks</p>
              <p className="position">Marketing Lead at NurtureDesk</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
