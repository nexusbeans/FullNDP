import React, { useEffect, useState } from "react";
import "./SliderBlock.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { SectionWraper } from "../../assets/scss/globel";
// import sliderData from "../../Api/CalenderData";
import axios from "axios";


const SliderBlock = () => {
  const [sliderData, SwiperSlideData] = useState([]);

  useEffect(() => {
    // Fetch slider data using Axios
    axios.get("/data/CalenderData.json")
      .then(response => {
        SwiperSlideData(response.data);
      })
      .catch(error => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  return (
    <SectionWraper>
      <Swiper
        centeredSlides={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="wraper_calender">
              <img
                src={slide.image}
                alt={`cal-img-${slide.id}`}
                className="img-fluid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWraper>
  );
};

export default SliderBlock;
